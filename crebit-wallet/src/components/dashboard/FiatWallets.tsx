"use client";

import React from "react";
import { MoreVertical, Plus } from "lucide-react";

interface FiatWallet {
  flag: string;
  code: string;
  name: string;
  balance: string;
  inr: string;
}

const FIAT_WALLETS: FiatWallet[] = [
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
    balance: "5400 JPY",
    inr: "3,51,953.48 INR",
  },
];

/** Single fiat card */
function FiatCard({ wallet }: { wallet: FiatWallet }) {
  return (
    <article
      className="flex items-center gap-3 px-[14px] h-[64px] rounded-[4px] bg-[#16181D] border border-white/5 hover:border-white/10 hover:bg-[#1A1C23] transition-all cursor-pointer"
      style={{ minWidth: 0, flex: "1 1 280px", maxWidth: 323 }}
      aria-label={`${wallet.name} wallet`}
    >
      {/* Flag */}
      <div
        aria-hidden="true"
        className="shrink-0 flex items-center justify-center rounded-full overflow-hidden text-[26px] leading-none"
        style={{ width: 36, height: 36 }}
      >
        {wallet.flag}
      </div>

      {/* Name / Code */}
      <div className="flex flex-col min-w-0">
        <span className="text-[14px] font-bold text-[#E5E7EB] leading-tight">
          {wallet.code}
        </span>
        <span className="text-[11px] font-medium text-[#6B7280] truncate">
          {wallet.name}
        </span>
      </div>

      {/* Balance */}
      <div className="flex flex-col items-end ml-auto shrink-0">
        <span className="text-[13px] font-bold text-white leading-tight tracking-wide">
          {wallet.balance}
        </span>
        <span className="text-[11px] font-medium text-[#6B7280]">
          {wallet.inr}
        </span>
      </div>

      {/* Menu */}
      <button
        aria-label={`${wallet.code} wallet options`}
        className="shrink-0 p-1 -mr-1 text-[#6B7280] hover:text-[#D1D5DB] transition-colors rounded"
      >
        <MoreVertical size={15} strokeWidth={2.5} />
      </button>
    </article>
  );
}

export default function FiatWallets() {
  return (
    <section aria-label="Fiat Wallets">
      <h2
        className="font-bold mb-[14px]"
        style={{
          fontSize: 13,
          color: "#6B7280",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        Fiat Wallets
      </h2>

      <div className="flex flex-wrap gap-[14px]">
        {FIAT_WALLETS.map((w) => (
          <FiatCard key={w.code} wallet={w} />
        ))}

        {/* Add More Fiats */}
        <button
          aria-label="Add more fiat currencies"
          className="flex items-center justify-center gap-2 h-[64px] rounded-[4px] bg-transparent border-[1.5px] border-dashed border-[#374151] text-[#9CA3AF] hover:border-[#D61D64] hover:text-white hover:bg-white/[0.02] transition-all"
          style={{ minWidth: 194, flex: "0 0 194px" }}
        >
          <Plus size={16} strokeWidth={2.5} />
          <span className="text-[13px] font-bold tracking-wide">
            Add More Fiats
          </span>
        </button>
      </div>
    </section>
  );
}
