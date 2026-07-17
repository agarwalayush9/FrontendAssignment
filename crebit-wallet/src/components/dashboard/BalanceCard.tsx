"use client";

import React, { useState } from "react";
import {
  Eye,
  TrendingUp,
  FileText,
} from "lucide-react";
import PriceChart from "./PriceChart";

const timeRanges = ["7D", "30D", "90D", "180D"];

export default function BalanceCard() {
  const [activeRange, setActiveRange] = useState("7D");

  return (
    <section
      className="p-6 shrink-0 flex flex-col lg:flex-row items-stretch justify-between w-full max-w-[1146px] h-auto lg:h-[231px]"
      style={{
        borderRadius: 16,
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Left Column: Balance & Buttons */}
      <div className="flex flex-col justify-between">
        <div>
          {/* Total Balance Header */}
          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold text-white text-[15px] tracking-wide">Total Balance</span>
            <button className="text-gray-400 hover:text-white transition-colors">
              <Eye size={16} strokeWidth={2} />
            </button>
          </div>

          {/* Balance Amount & Badge */}
          <div className="flex items-center gap-3 mb-1.5">
            <span className="font-bold text-white tracking-tight" style={{ fontSize: 32 }}>
              258346.00 BTC
            </span>
            {/* Green Badge */}
            <div
              className="flex items-center gap-1 px-2 py-1 rounded-[6px]"
              style={{ background: "#112615" }}
            >
              <TrendingUp size={14} color="#4ADE80" strokeWidth={2.5} />
              <span className="font-bold text-[#4ADE80] text-[13px]">15%</span>
            </div>
          </div>

          {/* Fiat Value */}
          <p className="font-semibold text-[#6B7280] text-[14px]">≈ 25,000 INR</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 mt-8 lg:mt-auto">
          <button className="px-6 h-[42px] rounded-[8px] font-bold text-white text-[14px] bg-[#D61D64] hover:bg-[#E02870] transition-colors">
            Deposit
          </button>
          <button className="px-5 h-[42px] rounded-[8px] font-bold text-white text-[14px] bg-[#22252A] hover:bg-[#2A2E35] transition-colors">
            Buy Crypto
          </button>
          <button className="px-5 h-[42px] rounded-[8px] font-bold text-white text-[14px] bg-[#22252A] hover:bg-[#2A2E35] transition-colors">
            Withdraw
          </button>
          <button className="w-[42px] h-[42px] flex items-center justify-center rounded-[8px] bg-[#22252A] hover:bg-[#2A2E35] transition-colors text-white shrink-0">
            <FileText size={18} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Right Column: Chart & Time Ranges */}
      <div className="flex flex-col w-full lg:w-[500px] mt-6 lg:mt-0">
        {/* Time range tabs */}
        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-[6px] p-[5px] rounded-[10px] bg-[#1A1D24]">
            {timeRanges.map((range) => (
              <button
                key={range}
                onClick={() => setActiveRange(range)}
                className="rounded-[6px] font-bold transition-all flex items-center justify-center text-[12px]"
                style={{
                  width: 90,
                  height: 39,
                  background: activeRange === range ? "#5C616B" : "transparent",
                  color: activeRange === range ? "#fff" : "#D1D5DB",
                  border: "none",
                }}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="flex-1 -mx-2">
          <PriceChart range={activeRange} />
        </div>
      </div>
    </section>
  );
}
