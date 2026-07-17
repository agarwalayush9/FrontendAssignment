"use client";

import React from "react";
import {
  Search,
  ChevronDown,
  Plus,
  Globe,
  ShoppingBag,
  Bell,
} from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="flex items-center gap-4 px-[20px] shrink-0"
      style={{
        height: 84,
        background: "#0C0E12",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Search bar */}
      <div
        className="flex items-center gap-3 px-[14px] w-full max-w-[457px] shrink-0"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "8px",
          height: 39,
        }}
      >
        <Search size={19} strokeWidth={1.6} style={{ color: "#D1D5DB" }} />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none flex-1"
          style={{ 
            color: "#6B7280", 
            fontSize: 16, 
            fontWeight: 700, 
            letterSpacing: "0.05em",
            fontFamily: "var(--font-sans)"
          }}
        />
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* BTC price ticker & Deposit Group */}
      <div className="flex items-center h-[40px]">
        {/* BTC Ticker (Left Side) */}
        <div
          className="flex items-center gap-[10px] px-[14px] h-full cursor-pointer"
          style={{
            background: "#1A1A22",
            border: "1px solid rgba(214, 29, 100, 0.4)",
            borderRight: "none",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
          }}
        >
          <div
            className="flex items-center justify-center rounded-full font-black"
            style={{ width: 22, height: 22, background: "#F7931A", color: "#fff", fontSize: 13, flexShrink: 0 }}
          >
            <span style={{ transform: "rotate(14deg)", display: "inline-block" }}>₿</span>
          </div>
          <span className="text-white" style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.06em", fontFamily: "var(--font-sans)" }}>
            0.0021780
          </span>
          <ChevronDown size={16} strokeWidth={1.5} style={{ color: "#E5E7EB", marginLeft: 2 }} />
        </div>

        {/* Deposit Button (Right Side) */}
        <button
          className="flex items-center gap-[6px] px-[18px] h-full cursor-pointer transition-opacity hover:opacity-90"
          style={{
            background: "#D61D64",
            color: "#fff",
            border: "none",
            borderTopRightRadius: "8px",
            borderBottomRightRadius: "8px",
          }}
        >
          <Plus size={18} strokeWidth={3} />
          <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.06em", fontFamily: "var(--font-sans)" }}>
            Deposit
          </span>
        </button>
      </div>

      {/* Events button */}
      <button
        className="hidden lg:flex cursor-pointer transition-all hover:opacity-90 items-center justify-center overflow-hidden"
        style={{ 
          background: "linear-gradient(0deg, rgba(54, 54, 54, 0.4), rgba(54, 54, 54, 0.4)), linear-gradient(79.11deg, rgba(224, 40, 112, 0.406) 57.05%, rgba(249, 104, 62, 0.595) 106.48%)",
          border: "none", 
          padding: 0, 
          flexShrink: 0, 
          lineHeight: 0,
          borderRadius: 8,
          width: 98,
          height: 40
        }}
      >
        <Image 
          src="/icons/Frame 3590.svg" 
          alt="Events" 
          width={98} 
          height={40} 
          style={{ display: "block", mixBlendMode: "screen" }} 
          priority 
        />
      </button>

      {/* Divider */}
      <div className="hidden lg:block shrink-0" style={{ width: 1, height: 20, background: "rgba(255,255,255,0.07)" }} />

      {/* Icon group */}
      <div className="hidden lg:flex items-center gap-6">
        {/* ShoppingBag icon */}
        <button
          className="rounded-lg transition-opacity hover:opacity-70"
          style={{ color: "#E5E7EB", background: "transparent", border: "none", cursor: "pointer", display: "flex" }}
        >
          <ShoppingBag size={22} strokeWidth={1.6} />
        </button>

        {/* Spin and win icon */}
        <button
          className="rounded-lg transition-opacity hover:opacity-70"
          style={{ background: "transparent", border: "none", cursor: "pointer", display: "flex" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/Spin and win-02.svg" alt="Spin and win" width={22} height={22} style={{ display: "block" }} />
        </button>

        {/* Bell with 99+ badge */}
        <button
          className="rounded-lg transition-opacity hover:opacity-70 relative"
          style={{ color: "#E5E7EB", background: "transparent", border: "none", cursor: "pointer", display: "flex" }}
        >
          <Bell size={22} strokeWidth={1.6} />
          <span
            className="absolute font-bold text-white rounded-full flex items-center justify-center"
            style={{
              background: "#D61D64",
              fontSize: 10,
              lineHeight: 1,
              top: -6,
              right: -8,
              padding: "2px 5px",
              height: 18,
              letterSpacing: "0.02em",
              fontFamily: "var(--font-sans)",
            }}
          >
            99+
          </span>
        </button>
      </div>

      {/* Language selector */}
      <div
        className="flex items-center gap-2 px-[14px] rounded-[8px] cursor-pointer transition-opacity hover:opacity-80 ml-2"
        style={{
          background: "#1C1E23",
          color: "#E5E7EB",
          height: 44,
          flexShrink: 0,
        }}
      >
        <Globe size={18} strokeWidth={1.5} />
        <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: "0.05em", fontFamily: "var(--font-sans)" }}>EN</span>
        <ChevronDown size={16} strokeWidth={1.5} />
      </div>

      {/* User Avatar */}
      <div className="flex items-center gap-3 cursor-pointer transition-opacity hover:opacity-80 ml-2" style={{ flexShrink: 0 }}>
        {/* Avatar using the provided unified SVG */}
        <div className="flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/Group 360.svg" alt="Profile Avatar" width={48} height={48} style={{ display: "block" }} />
        </div>
        <ChevronDown size={16} strokeWidth={1.5} style={{ color: "#E5E7EB" }} />
      </div>
    </header>
  );
}
