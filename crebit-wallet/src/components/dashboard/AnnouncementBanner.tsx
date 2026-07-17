"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBanner() {
  const [alertsCount, setAlertsCount] = useState(4); // Starts with 4 alerts (main + 3 stacked)

  if (alertsCount === 0) return null;

  return (
    <div className="relative mx-[20px] mt-6 mb-6 z-10">
      {/* Stack Layer 3 (Bottom-most) */}
      {alertsCount >= 4 && (
        <div 
          className="absolute w-[calc(100%-18px)] h-full left-[9px] top-[12px] rounded-[10px]"
          style={{ background: "#090A0D", border: "1px solid rgba(255,255,255,0.02)", zIndex: 0 }}
        />
      )}
      {/* Stack Layer 2 */}
      {alertsCount >= 3 && (
        <div 
          className="absolute w-[calc(100%-12px)] h-full left-[6px] top-[8px] rounded-[10px]"
          style={{ background: "#0D0F13", border: "1px solid rgba(255,255,255,0.03)", zIndex: 1 }}
        />
      )}
      {/* Stack Layer 1 (Just below main card) */}
      {alertsCount >= 2 && (
        <div 
          className="absolute w-[calc(100%-6px)] h-full left-[3px] top-[4px] rounded-[10px]"
          style={{ background: "#111317", border: "1px solid rgba(255,255,255,0.04)", zIndex: 2 }}
        />
      )}

      {/* Main Card */}
      <div
        className="relative flex items-center gap-[14px] px-[16px] rounded-[10px]"
        style={{
          background: "#16181D",
          border: "1px solid rgba(255,255,255,0.06)",
          height: 48,
          zIndex: 3,
        }}
      >
        {/* Green vertical accent bar */}
        <div
          className="rounded-full shrink-0"
          style={{ width: 3, height: 16, background: "#4ADE80", boxShadow: "0 0 8px rgba(74, 222, 128, 0.4)" }}
        />

        {/* Message */}
        <div className="flex-1 text-left flex items-center" style={{ fontSize: 13, color: "#D1D5DB", letterSpacing: "0.02em" }}>
          <span className="font-semibold text-white mr-1">New Yield Opportunities Available,</span>
          <span>Explore top DeFi strategies and start earning today.</span>
          <button
            className="ml-2 font-semibold transition-colors"
            style={{ color: "#D61D64", background: "none", border: "none", cursor: "pointer", fontSize: 13, textDecoration: "underline" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#FF4FAC")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#D61D64")}
          >
            Start Earning
          </button>
        </div>

        {/* Close */}
        <button
          onClick={() => setAlertsCount(prev => Math.max(0, prev - 1))}
          className="shrink-0 p-1 rounded-full transition-all"
          style={{ color: "#9CA3AF", background: "none", border: "none", cursor: "pointer" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
            (e.currentTarget as HTMLButtonElement).style.color = "#FFF";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            (e.currentTarget as HTMLButtonElement).style.color = "#9CA3AF";
          }}
        >
          <X size={16} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
