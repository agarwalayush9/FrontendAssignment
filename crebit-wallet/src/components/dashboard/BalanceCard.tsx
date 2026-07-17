"use client";

import React, { useState } from "react";
import { Eye, TrendingUp, FileText } from "lucide-react";
import PriceChart from "./PriceChart";

const TIME_RANGES = ["7D", "30D", "90D", "180D"] as const;
type TimeRange = (typeof TIME_RANGES)[number];

export default function BalanceCard() {
  const [activeRange, setActiveRange] = useState<TimeRange>("7D");
  const [balanceVisible, setBalanceVisible] = useState(true);

  return (
    <section
      aria-label="Total Balance"
      className="w-full max-w-[1146px] shrink-0 flex flex-col xl:flex-row items-stretch justify-between gap-6"
      style={{
        padding: 20,
        height: "auto",
        minHeight: 231,
        borderRadius: 4,
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* ── Left Column ── */}
      <div className="flex flex-col justify-between gap-6 xl:gap-0">
        <div>
          {/* Balance header */}
          <div className="flex items-center gap-2 mb-[6px]">
            <span className="font-bold text-white text-[15px] tracking-wide">Total Balance</span>
            <button
              onClick={() => setBalanceVisible((v) => !v)}
              aria-label={balanceVisible ? "Hide balance" : "Show balance"}
              className="text-[#6B7280] hover:text-white transition-colors p-0.5"
            >
              <Eye size={15} strokeWidth={2} />
            </button>
          </div>

          {/* Amount */}
          <div className="flex items-center gap-3 mb-[6px]">
            <span
              className="font-black text-white tracking-tight leading-none"
              style={{ fontSize: 30 }}
            >
              {balanceVisible ? "258346.00 BTC" : "••••••••"}
            </span>

            {/* Growth badge */}
            <div
              className="flex items-center gap-1 px-2 py-[3px] rounded-[4px] shrink-0"
              style={{ background: "#0E2B14" }}
            >
              <TrendingUp size={13} color="#4ADE80" strokeWidth={2.5} />
              <span className="font-bold text-[#4ADE80] text-[12px]">15%</span>
            </div>
          </div>

          {/* Fiat equivalent */}
          <p className="font-medium text-[#6B7280] text-[13px]">
            {balanceVisible ? "≈ 25,000 INR" : "≈ ••••• INR"}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-[10px]">
          <button
            className="h-[39px] w-[90px] rounded-[4px] font-bold text-white text-[14px] bg-[#D61D64] hover:bg-[#b81855] active:scale-95 transition-all"
            aria-label="Deposit funds"
          >
            Deposit
          </button>
          <button
            className="h-[39px] w-[90px] rounded-[4px] font-bold text-white text-[14px] bg-[#1E2128] hover:bg-[#252930] active:scale-95 transition-all"
            aria-label="Buy cryptocurrency"
          >
            Buy Crypto
          </button>
          <button
            className="h-[39px] w-[90px] rounded-[4px] font-bold text-white text-[14px] bg-[#1E2128] hover:bg-[#252930] active:scale-95 transition-all"
            aria-label="Withdraw funds"
          >
            Withdraw
          </button>
          <button
            className="h-[39px] w-[36px] flex items-center justify-center rounded-[4px] bg-[#1E2128] hover:bg-[#252930] active:scale-95 transition-all text-white shrink-0"
            aria-label="View statements"
          >
            <FileText size={16} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* ── Right Column: Chart ── */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Time range tabs */}
        <div className="flex items-center justify-end gap-0 mb-3" role="tablist" aria-label="Chart time range">
          {TIME_RANGES.map((range) => {
            const isActive = activeRange === range;
            return (
              <button
                key={range}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveRange(range)}
                className="font-bold transition-all flex items-center justify-center text-[12px] rounded-[4px]"
                style={{
                  width: 90,
                  height: 39,
                  background: isActive ? "#5C616B" : "#1A1D24",
                  color: isActive ? "#fff" : "#9CA3AF",
                  border: "none",
                  letterSpacing: "0.04em",
                }}
              >
                {range}
              </button>
            );
          })}
        </div>

        {/* Chart */}
        <div className="flex-1" style={{ minHeight: 110 }}>
          <PriceChart range={activeRange} />
        </div>
      </div>
    </section>
  );
}
