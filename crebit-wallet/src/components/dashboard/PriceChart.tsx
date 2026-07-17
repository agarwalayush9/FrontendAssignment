"use client";

import React, { useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  name: string;
  value: number;
}

const DAY_LABELS = ["M", "T", "W", "T", "F", "S", "S"];
const DAY_NAMES: Record<string, string> = {
  M: "Monday",
  T: "Thursday",
  W: "Wednesday",
  F: "Friday",
  S: "Saturday",
};

function generateData(range: string): DataPoint[] {
  const days = range === "7D" ? 7 : range === "30D" ? 30 : range === "90D" ? 90 : 180;
  const count = days === 7 ? 7 : Math.floor(days / 5);
  const points: DataPoint[] = [];
  let base = 2400;

  for (let i = 0; i < count; i++) {
    base = Math.max(1800, Math.min(3200, base + (Math.random() - 0.46) * 200));
    points.push({
      name: days === 7 ? DAY_LABELS[i % 7] : `${i + 1}`,
      value: Math.round(base),
    });
  }

  // Spike near Thursday for the 7D view (matches the reference)
  if (days === 7 && points.length >= 5) {
    points[4] = { name: "T", value: 2586 };
  }

  return points;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  const safeLabel = label;

  return (
    <div
      role="tooltip"
      style={{
        background: "#CFD3DA",
        borderRadius: 4,
        padding: "6px 10px",
        color: "#111827",
        boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
        fontSize: 12,
        lineHeight: 1.4,
        pointerEvents: "none",
      }}
    >
      <p style={{ fontWeight: 700, marginBottom: 2 }}>{DAY_NAMES[safeLabel ?? ""] ?? safeLabel}</p>
      <p style={{ fontWeight: 800, fontSize: 14 }}>{payload[0].value?.toFixed(2)} BTC</p>
    </div>
  );
}

interface PriceChartProps {
  range: string;
}

export default function PriceChart({ range }: PriceChartProps) {
  // Stabilise data between renders — only regenerate when range changes
  const data = useMemo(() => generateData(range), [range]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 8, right: 4, left: -30, bottom: 0 }}>
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D61D64" stopOpacity={0.3} />
            <stop offset="60%" stopColor="#D61D64" stopOpacity={0.06} />
            <stop offset="100%" stopColor="#D61D64" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />

        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#6B7280", fontSize: 10, fontWeight: 700 }}
          interval={0}
        />

        <YAxis hide domain={["dataMin - 200", "dataMax + 200"]} />

        <Tooltip
          content={<CustomTooltip />}
          cursor={{ stroke: "#D61D64", strokeWidth: 1.5, strokeDasharray: "3 3" }}
          isAnimationActive={false}
        />

        <Area
          type="monotone"
          dataKey="value"
          stroke="#D61D64"
          strokeWidth={2}
          fill="url(#chartGradient)"
          activeDot={{ r: 6, fill: "#D61D64", stroke: "#FFFFFF", strokeWidth: 2.5 }}
          isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
