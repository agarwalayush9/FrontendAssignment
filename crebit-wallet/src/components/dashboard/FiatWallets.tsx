"use client";

import React from "react";
import { MoreVertical, Plus } from "lucide-react";

const fiatWallets = [
  {
    flag: "🇦🇺",
    code: "AUD",
    name: "Australian Dollar",
    balance: "5400 AUD",
    inr: "3,51,953.48 INR",
  },
  {
    flag: "🇮🇩",
    code: "IDR",
    name: "Indonesian Rupiah",
    balance: "5400 IDR",
    inr: "3,51,953.48 INR",
  },
  {
    flag: "🇯🇵",
    code: "JPY",
    name: "Japanese Yen",
    balance: "5400 J...",
    inr: "3,51,953.48 INR",
  },
];

export default function FiatWallets() {
  return (
    <section>
      {/* Section title */}
      <h2
        className="font-bold mb-4"
        style={{ fontSize: 13, color: "#6B7280", letterSpacing: "0.03em" }}
      >
        Fiat Wallets
      </h2>

      {/* Cards row */}
      <div className="flex flex-wrap lg:flex-nowrap gap-[14px]">
        {fiatWallets.map((wallet) => (
          <div
            key={wallet.code}
            className="flex flex-1 min-w-[280px] lg:max-w-[323px] items-center px-4 h-[64px] rounded-[8px] bg-[#16181D] border border-white/5 hover:border-white/10 hover:bg-[#1A1C23] transition-all cursor-pointer"
          >
            {/* Flag circle (using emoji) */}
            <div
              className="shrink-0 flex items-center justify-center rounded-full text-[28px] leading-none overflow-hidden"
              style={{ width: 36, height: 36 }}
            >
              {wallet.flag}
            </div>

            {/* Text content */}
            <div className="flex-1 flex justify-between items-center ml-3">
              {/* Left side: Code and Name */}
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-[#E5E7EB]">
                  {wallet.code}
                </span>
                <span className="text-[11px] font-semibold text-[#6B7280]">
                  {wallet.name}
                </span>
              </div>
              
              {/* Right side: Balance and INR */}
              <div className="flex flex-col items-end mr-3">
                <span className="text-[14px] font-bold text-white tracking-wide">
                  {wallet.balance}
                </span>
                <span className="text-[11px] font-semibold text-[#6B7280]">
                  {wallet.inr}
                </span>
              </div>
            </div>

            {/* Three-dot menu */}
            <button className="shrink-0 text-[#6B7280] hover:text-[#D1D5DB] transition-colors p-1 -mr-2">
              <MoreVertical size={16} strokeWidth={2.5} />
            </button>
          </div>
        ))}

        {/* Add More Fiats — dashed border card */}
        <div
          className="flex flex-1 lg:flex-none items-center justify-center gap-2 h-[64px] rounded-[8px] bg-[#16181D] border-[2px] border-dashed border-[#374151] hover:bg-[#1A1C23] hover:border-[#4B5563] hover:text-white text-[#D1D5DB] transition-all cursor-pointer min-w-[280px] lg:min-w-0 lg:w-[194px]"
        >
          <Plus size={18} strokeWidth={2.5} />
          <span className="text-[14px] font-bold tracking-wide">
            Add More Fiats
          </span>
        </div>
      </div>
    </section>
  );
}
