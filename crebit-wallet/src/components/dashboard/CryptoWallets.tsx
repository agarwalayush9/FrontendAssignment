"use client";

import React from "react";
import { ListFilter, GripVertical, RefreshCcw, EyeOff } from "lucide-react";

const cryptoAssets = [
  {
    icon: "₿",
    iconBg: "#F7931A",
    symbol: "BTC",
    name: "Bitcoin",
    balance: "0.84864327 BTC",
    inr: "3,553.48 INR",
    hold: true,
    staked: true,
  },
];

export default function CryptoWallets() {
  return (
    <section className="shrink-0 w-full">
      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <h2
          className="font-bold"
          style={{ fontSize: 13, color: "#6B7280", letterSpacing: "0.03em" }}
        >
          Crypto Wallets
        </h2>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-[#E5E7EB] hover:text-white transition-colors">
            <RefreshCcw size={16} strokeWidth={2.5} />
            <span className="font-bold text-[13px] tracking-wide">Manage Assets</span>
          </button>
          <button className="flex items-center gap-2 text-[#E5E7EB] hover:text-white transition-colors">
            <ListFilter size={16} strokeWidth={2.5} />
            <span className="font-bold text-[13px] tracking-wide">Sort</span>
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-auto pb-4">
        <div className="min-w-[800px]">
          {/* Table header */}
          <div
            className="grid items-center px-4 py-1.5 rounded-lg mb-1"
            style={{
              gridTemplateColumns: "24px 32px 1fr 1fr 1fr 1fr 120px",
              fontSize: 10,
              color: "#4B5563",
              background: "rgba(255,255,255,0.02)",
              gap: "0 12px",
            }}
          >
            <span />
            <span />
            <span>ASSET</span>
            <span>BALANCE</span>
            <span>HOLD</span>
            <span>STAKED</span>
            <span className="text-right">ACTIONS</span>
          </div>

          {/* Asset rows */}
          <div className="flex flex-col gap-[8px]">
            {cryptoAssets.map((asset) => (
              <div
                key={asset.symbol}
                className="grid items-center px-5 rounded-[12px] bg-[#16181D] border border-white/5 hover:border-white/10 hover:bg-[#1A1C23] transition-all cursor-pointer shrink-0"
                style={{
                  gridTemplateColumns: "16px 40px 1fr 1fr 1fr 1fr 120px",
                  height: 72,
                  gap: "0 20px",
                }}
              >
            {/* Drag handle */}
            <div className="flex justify-center text-[#4B5563]">
              <GripVertical size={16} strokeWidth={2.5} />
            </div>

            {/* Icon */}
            <div
              className="flex items-center justify-center rounded-full font-bold text-white text-[20px]"
              style={{
                width: 36,
                height: 36,
                background: asset.iconBg,
              }}
            >
              {asset.icon}
            </div>

            {/* Symbol / Name */}
            <div className="flex flex-col justify-center gap-0.5">
              <span className="font-bold text-white text-[16px] tracking-wide leading-none">
                {asset.symbol}
              </span>
              <span className="font-bold text-[#6B7280] text-[13px] leading-none">
                {asset.name}
              </span>
            </div>

            {/* Balance */}
            <div className="flex flex-col items-end gap-0.5">
              <span className="font-bold text-white text-[15px] tracking-wide leading-none">
                {asset.balance}
              </span>
              <span className="font-bold text-[#6B7280] text-[13px] leading-none">
                {asset.inr}
              </span>
            </div>

            {/* Hold */}
            <div className="flex flex-col items-start gap-0.5 pl-4">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white text-[15px] leading-none">Hold</span>
                {asset.hold && (
                  <EyeOff size={14} className="text-[#9CA3AF]" strokeWidth={2} />
                )}
              </div>
              <span className="font-bold text-[#6B7280] text-[15px] tracking-[4px] leading-none mt-1">
                ******
              </span>
            </div>

            {/* Staked */}
            <div className="flex flex-col items-start gap-0.5">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white text-[15px] leading-none">Staked</span>
                {asset.staked && (
                  <EyeOff size={14} className="text-[#9CA3AF]" strokeWidth={2} />
                )}
              </div>
              <span className="font-bold text-[#6B7280] text-[15px] tracking-[4px] leading-none mt-1">
                ******
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-4">
              <button className="font-bold text-[#E5E7EB] hover:text-white underline underline-offset-[4px] decoration-white/30 hover:decoration-white transition-all text-[14px]">
                Convert
              </button>
              <button className="font-bold text-[#E5E7EB] hover:text-white underline underline-offset-[4px] decoration-white/30 hover:decoration-white transition-all text-[14px]">
                Earn
              </button>
            </div>
          </div>
        ))}
        </div>
        </div>
      </div>
    </section>
  );
}
