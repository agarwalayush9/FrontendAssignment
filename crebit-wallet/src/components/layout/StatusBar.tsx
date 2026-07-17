"use client";

import React from "react";
import {
  Hexagon,
  ChevronsUp,
  ShoppingBag,
  Droplets,
  Shield,
  Cpu,
  SignalHigh,
  Headphones,
  BookOpen,
  MoreVertical,
} from "lucide-react";

export default function StatusBar() {
  return (
    <footer
      role="contentinfo"
      aria-label="System status bar"
      className="flex items-center justify-between shrink-0 w-full min-w-0"
      style={{
        height: 44,
        background: "#0C0E12",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "8px 20px",
        gap: 10,
        opacity: 1,
      }}
    >
      {/* Left: status items */}
      <div className="flex items-center gap-[10px] text-[#6B7280] min-w-0 overflow-hidden">

        {/* 1 — Version / growth */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="relative flex items-center justify-center" aria-hidden="true">
            <Hexagon size={15} strokeWidth={2} />
            <ChevronsUp size={9} className="absolute text-[#4ADE80]" strokeWidth={3} />
          </div>
          <span className="font-bold text-[12px] text-white tabular-nums">1.7%</span>
        </div>

        <Divider />

        {/* 2 — Shopping */}
        <div className="flex items-center gap-1.5 shrink-0">
          <ShoppingBag size={13} strokeWidth={2.5} aria-hidden="true" />
          <span className="font-bold text-[12px] text-white tabular-nums">156</span>
        </div>

        <Divider />

        {/* 3 — Time */}
        <div className="flex items-center gap-1.5 shrink-0">
          <Droplets size={13} strokeWidth={2.5} aria-hidden="true" />
          <span className="font-bold text-[12px] text-white tabular-nums">6:17</span>
        </div>

        <Divider />

        {/* 4 — Shield score */}
        <div className="flex items-center gap-1.5 shrink-0">
          <Shield size={13} strokeWidth={2.5} aria-hidden="true" />
          <span className="font-bold text-[12px] text-white tabular-nums">98</span>
        </div>

        <Divider />

        {/* 5 — Win notification */}
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="text-[13px] shrink-0" aria-hidden="true">🎉</span>
          <p className="font-bold text-[12px] truncate">
            <span className="text-[#D61D64]">You Won!</span>
            <span className="text-white"> — 1200 DOGE</span>
          </p>
        </div>

        <Divider />

        {/* 6 — CPU/signal */}
        <div className="flex items-center shrink-0">
          <Cpu size={14} strokeWidth={2.5} className="text-[#EAB308]" aria-label="System active" />
        </div>
      </div>

      {/* Right: quick-action icons */}
      <div
        role="toolbar"
        aria-label="Quick actions"
        className="flex items-center gap-4 ml-auto shrink-0 text-[#6B7280]"
      >
        <SignalHigh
          size={15}
          strokeWidth={2.5}
          className="text-[#4ADE80]"
          aria-label="Connection: strong"
        />
        <button aria-label="Support" className="hover:text-white transition-colors">
          <Headphones size={15} strokeWidth={2.5} />
        </button>
        <button aria-label="Documentation" className="hover:text-white transition-colors">
          <BookOpen size={15} strokeWidth={2.5} />
        </button>
        <button aria-label="More options" className="hover:text-white transition-colors">
          <MoreVertical size={15} strokeWidth={2.5} />
        </button>
      </div>
    </footer>
  );
}

function Divider() {
  return (
    <div aria-hidden="true" className="w-px h-[14px] bg-white/[0.08] shrink-0" />
  );
}
