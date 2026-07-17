"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBanner() {
  const [alertsCount, setAlertsCount] = useState(4);

  if (alertsCount === 0) return null;

  const dismiss = () => setAlertsCount((prev) => Math.max(0, prev - 1));

  return (
    <div
      className="relative w-full max-w-[1146px] banner-stack-shadow"
      style={{ marginTop: 6, marginBottom: 8 }}
      role="alert"
      aria-live="polite"
    >
      {/* Stack layers (decorative depth) */}
      {alertsCount >= 4 && (
        <div
          aria-hidden="true"
          className="absolute inset-x-[12px] -bottom-[10px] h-full rounded-[8px]"
          style={{
            background: "#090A0D",
            border: "1px solid rgba(255,255,255,0.02)",
            zIndex: 0,
          }}
        />
      )}
      {alertsCount >= 3 && (
        <div
          aria-hidden="true"
          className="absolute inset-x-[8px] -bottom-[6px] h-full rounded-[8px]"
          style={{
            background: "#0D0F13",
            border: "1px solid rgba(255,255,255,0.03)",
            zIndex: 1,
          }}
        />
      )}
      {alertsCount >= 2 && (
        <div
          aria-hidden="true"
          className="absolute inset-x-[4px] -bottom-[3px] h-full rounded-[8px]"
          style={{
            background: "#111317",
            border: "1px solid rgba(255,255,255,0.04)",
            zIndex: 2,
          }}
        />
      )}

      {/* Main banner card */}
      <div
        className="relative flex items-center gap-4 px-4 rounded-[8px]"
        style={{
          background: "#16181D",
          border: "1px solid rgba(255,255,255,0.06)",
          height: 44,
          zIndex: 3,
        }}
      >
        {/* Green accent bar */}
        <div
          aria-hidden="true"
          className="shrink-0 rounded-full"
          style={{
            width: 3,
            height: 16,
            background: "#4ADE80",
            boxShadow: "0 0 8px rgba(74,222,128,0.45)",
          }}
        />

        {/* Message */}
        <p className="flex-1 min-w-0 truncate text-[13px] text-[#D1D5DB]">
          <span className="font-semibold text-white">
            New Yield Opportunities Available,{" "}
          </span>
          <span>Explore top DeFi strategies and start earning today. </span>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="font-semibold text-[#D61D64] hover:text-[#FF4FAC] transition-colors underline underline-offset-2"
          >
            Start Earning
          </a>
        </p>

        {/* Dismiss */}
        <button
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="shrink-0 p-1 rounded text-[#6B7280] hover:text-white hover:bg-white/5 transition-all"
        >
          <X size={15} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
