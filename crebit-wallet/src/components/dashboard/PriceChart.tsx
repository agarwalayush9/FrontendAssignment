"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Generate realistic-looking BTC price data
function generateData(range: string) {
  const points: { name: string; value: number }[] = [];
  const days = range === "7D" ? 7 : range === "30D" ? 30 : range === "90D" ? 90 : 180;
  const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];

  let base = 2400;
  for (let i = 0; i < (days === 7 ? 7 : days / 5); i++) {
    base += (Math.random() - 0.46) * 200;
    base = Math.max(1800, Math.min(3200, base));
    points.push({
      name: days === 7 ? dayLabels[i % 7] : `${i + 1}`,
      value: Math.round(base),
    });
  }

  // Spike near Thursday (index 4 for 7D)
  if (days === 7) {
    points[4] = { name: "T", value: 2586 };
  }

  return points;
}

const CustomTooltip = ({ active, payload, label }: { active?: boolean, payload?: Array<{value: number}>, label?: string }) => {
  const safeLabel = label || "";
  if (active && payload && payload.length) {
    const dayMap: Record<string, string> = {
      M: "Monday",
      T: "Thursday",
      W: "Wednesday",
      F: "Friday",
      S: "Saturday",
    };
    return (
      <div
        style={{
          background: "#CFD3DA", // Light grey matching screenshot
          borderRadius: 4,
          padding: "6px 10px",
          color: "#111827",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 2 }}>{dayMap[safeLabel] || label}</div>
        <div style={{ fontSize: 14, fontWeight: 800 }}>{payload[0].value.toFixed(2)}BTC</div>
      </div>
    );
  }
  return null;
};

interface PriceChartProps {
  range: string;
}

export default function PriceChart({ range }: PriceChartProps) {
  const data = generateData(range);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 10, right: 10, left: -30, bottom: 0 }}
      >
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D61D64" stopOpacity={0.3} />
            <stop offset="60%" stopColor="#D61D64" stopOpacity={0.05} />
            <stop offset="100%" stopColor="#D61D64" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="rgba(255,255,255,0.04)"
          vertical={false}
        />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#6B7280", fontSize: 10, fontWeight: 700 }}
          interval={0}
        />
        <YAxis
          hide={true}
          domain={["dataMin - 200", "dataMax + 200"]}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{
            stroke: "#D61D64",
            strokeWidth: 1.5,
            strokeDasharray: "3 3",
          }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#D61D64"
          strokeWidth={2}
          fill="url(#chartGradient)"
          activeDot={{ r: 6, fill: "#D61D64", stroke: "#FFF", strokeWidth: 3 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
