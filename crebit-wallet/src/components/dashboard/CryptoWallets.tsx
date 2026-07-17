"use client";

import React from "react";
import { ListFilter, GripVertical, RefreshCcw, EyeOff } from "lucide-react";

interface CryptoAsset {
  id: string;
  icon: string;
  iconBg: string;
  symbol: string;
  name: string;
  balance: string;
  inr: string;
  hold: boolean;
  staked: boolean;
}

const CRYPTO_ASSETS: CryptoAsset[] = [
  {
    id: "btc",
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

const COL_TEMPLATE = "16px 44px 1.5fr 1fr 1fr 1fr 130px";
const COL_GAP = "0 16px";

export default function CryptoWallets() {
  return (
    <section aria-label="Crypto Wallets" className="w-full">
      {/* Section header */}
      <div className="flex items-center justify-between mb-[14px]">
        <h2
          className="font-bold"
          style={{ fontSize: 13, color: "#6B7280", letterSpacing: "0.06em", textTransform: "uppercase" }}
        >
          Crypto Wallets
        </h2>

        <div className="flex items-center gap-5">
          <button
            aria-label="Manage crypto assets"
            className="flex items-center gap-[6px] text-[#9CA3AF] hover:text-white transition-colors text-[13px] font-bold"
          >
            <RefreshCcw size={14} strokeWidth={2.5} />
            Manage Assets
          </button>
          <button
            aria-label="Sort assets"
            className="flex items-center gap-[6px] text-[#9CA3AF] hover:text-white transition-colors text-[13px] font-bold"
          >
            <ListFilter size={14} strokeWidth={2.5} />
            Sort
          </button>
        </div>
      </div>

      {/* Scrollable table */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[760px]">
          {/* Table header */}
          <div
            className="grid px-5 py-2 mb-1 rounded-[4px]"
            style={{
              gridTemplateColumns: COL_TEMPLATE,
              gap: COL_GAP,
              fontSize: 10,
              fontWeight: 700,
              color: "#4B5563",
              letterSpacing: "0.08em",
              background: "rgba(255,255,255,0.025)",
            }}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span>ASSET</span>
            <span className="text-right">BALANCE</span>
            <span className="pl-3">HOLD</span>
            <span>STAKED</span>
            <span className="text-right">ACTIONS</span>
          </div>

          {/* Rows */}
          <div className="flex flex-col gap-[6px]">
            {CRYPTO_ASSETS.map((asset) => (
              <article
                key={asset.id}
                className="grid items-center px-5 rounded-[4px] bg-[#16181D] border border-white/5 hover:border-white/[0.09] hover:bg-[#1A1C23] transition-all cursor-pointer"
                style={{
                  gridTemplateColumns: COL_TEMPLATE,
                  height: 72,
                  gap: COL_GAP,
                }}
                aria-label={`${asset.symbol} — ${asset.balance}`}
              >
                {/* Drag handle */}
                <div className="flex items-center justify-center text-[#374151]" aria-hidden="true">
                  <GripVertical size={15} strokeWidth={2} />
                </div>

                {/* Coin icon */}
                <div
                  className="flex items-center justify-center rounded-full font-black text-white text-[18px] shrink-0"
                  aria-hidden="true"
                  style={{ width: 38, height: 38, background: asset.iconBg }}
                >
                  <span style={{ transform: "rotate(14deg)", display: "inline-block" }}>
                    {asset.icon}
                  </span>
                </div>

                {/* Symbol & Name */}
                <div className="flex flex-col justify-center gap-[2px] min-w-0">
                  <span className="font-bold text-white text-[15px] leading-tight">{asset.symbol}</span>
                  <span className="font-medium text-[#6B7280] text-[12px] leading-tight">{asset.name}</span>
                </div>

                {/* Balance */}
                <div className="flex flex-col items-end justify-center gap-[2px]">
                  <span className="font-bold text-white text-[13px] leading-tight tracking-wide">
                    {asset.balance}
                  </span>
                  <span className="font-medium text-[#6B7280] text-[11px] leading-tight">{asset.inr}</span>
                </div>

                {/* Hold */}
                <div className="flex flex-col justify-center gap-[3px] pl-3">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-white text-[13px] leading-tight">Hold</span>
                    {asset.hold && (
                      <EyeOff size={12} className="text-[#6B7280] shrink-0" strokeWidth={2} aria-label="Hidden" />
                    )}
                  </div>
                  <span
                    className="font-bold text-[#6B7280] text-[10px] leading-tight"
                    style={{ letterSpacing: "3px" }}
                    aria-label="Balance hidden"
                  >
                    ★★★★★
                  </span>
                </div>

                {/* Staked */}
                <div className="flex flex-col justify-center gap-[3px]">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-white text-[13px] leading-tight">Staked</span>
                    {asset.staked && (
                      <EyeOff size={12} className="text-[#6B7280] shrink-0" strokeWidth={2} aria-label="Hidden" />
                    )}
                  </div>
                  <span
                    className="font-bold text-[#6B7280] text-[10px] leading-tight"
                    style={{ letterSpacing: "3px" }}
                    aria-label="Amount hidden"
                  >
                    ★★★★★
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-4">
                  <button className="text-[13px] font-bold text-[#9CA3AF] hover:text-white underline underline-offset-2 decoration-white/20 hover:decoration-white/60 transition-all">
                    Convert
                  </button>
                  <button className="text-[13px] font-bold text-[#9CA3AF] hover:text-white underline underline-offset-2 decoration-white/20 hover:decoration-white/60 transition-all">
                    Earn
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
