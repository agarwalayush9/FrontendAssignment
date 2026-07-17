"use client";

import React from "react";
import {
  Link2,
  Earth,
  Monitor,
  LayoutGrid,
  ChevronDown,
  Sidebar as SidebarIcon,
  Wand2,
  HandCoins,
} from "lucide-react";
import Image from "next/image";

const navSections = [
  {
    label: "EARNINGS",
    items: [
      { icon: Link2,      label: "Shortlinks", active: false, badge: "5",  hasArrow: false },
      { icon: HandCoins,  label: "Faucet",     active: false, badge: null, hasArrow: false },
      { icon: Monitor,    label: "PTC ADs",    active: false, badge: null, hasArrow: true  },
    ],
  },
  {
    label: "ORBIT SPACE",
    items: [
      { icon: Earth,      label: "Discover", active: false, badge: null, hasArrow: false },
      { icon: LayoutGrid, label: "Crates",   active: false, badge: null, hasArrow: false },
      { icon: Monitor,    label: "Shop",     active: false, badge: null, hasArrow: true  },
    ],
  },
];

function TriangleUp() {
  return (
    <svg width="6" height="4" viewBox="0 0 6 4" fill="#4B5563" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 0L6 4H0L3 0Z" />
    </svg>
  );
}







export default function Sidebar() {
  return (
    <aside
      className="hidden lg:flex flex-col h-full shrink-0 z-10"
      style={{
        width: 254,
        minWidth: 254,
        background: "#0C0E12",
        borderRight: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* ── Logo Header ── */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", minHeight: 58 }}
      >
        <div className="flex items-center gap-3">
          {/* Logo icon */}
          <div className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/Frame 147.svg" alt="CREBiT logo" width={35} height={35} style={{ display: 'block' }} />
          </div>

          {/* Brand text */}
          <div className="flex flex-col items-end leading-none gap-[2px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/Group.svg" alt="CREBiT wordmark" width={70} height={19} style={{ display: 'block', marginTop: 3 }} />
            <span
              style={{
                fontSize: 12,
                color: "#D61D64",
                fontWeight: 700,
                lineHeight: 1,
                marginRight: 2,
                letterSpacing: "0.02em",
                fontFamily: "var(--font-sans)",
              }}
            >
              ~Wallet
            </span>
          </div>
        </div>

        {/* Collapse Icon */}
        <button className="flex flex-col gap-[3px] p-1 bg-transparent border-none cursor-pointer transition-opacity hover:opacity-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/Icon.svg" alt="collapse" width={12} height={7} style={{ display: 'block' }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/Accent.svg" alt="expand" width={12} height={7} style={{ display: 'block' }} />
        </button>
      </div>

      {/* ── Navigation ── */}
      <nav className="flex-1 overflow-y-auto pt-4 pb-2 px-[20px]">
        {/* Dashboard Standalone Button */}
        <button
          className="w-full flex items-center gap-[14px] px-[16px] rounded-[8px] mb-6 cursor-pointer transition-all duration-150"
          style={{
            height: 38,
            background: "#D61D64",
            color: "#FFFFFF",
            border: "none",
            textAlign: "left",
            boxShadow: "0 0 16px rgba(214,29,100,0.2)",
          }}
        >
          <LayoutGrid size={18} strokeWidth={2} />
          <span className="flex-1" style={{ letterSpacing: "0.04em", fontSize: 14, fontWeight: 700 }}>
            Dashboard
          </span>
        </button>

        {navSections.map((section) => (
          <div key={section.label} className="mb-4">
            <div
              className="flex items-center gap-2 px-1 mb-3"
              style={{ fontSize: 11, fontWeight: 700, color: "#4B5563", letterSpacing: "0.1em" }}
            >
              {section.label}
              <TriangleUp />
            </div>

            {section.items.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className="w-full flex items-center gap-[14px] px-[16px] rounded-[8px] mb-1 cursor-pointer transition-all duration-150"
                  style={{
                    height: 38,
                    background: item.active ? "#D61D64" : "transparent",
                    color: "#FFFFFF",
                    fontSize: 14,
                    fontWeight: item.active ? 700 : 600,
                    border: "none",
                    textAlign: "left",
                    boxShadow: item.active ? "0 0 16px rgba(214,29,100,0.2)" : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!item.active) {
                      (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.04)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!item.active) {
                      (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                    }
                  }}
                >
                  {typeof item.icon === "string" ? (
                    <Image src={item.icon} alt={item.label} width={18} height={18} style={{ opacity: item.active ? 1 : 0.8 }} />
                  ) : (
                    <Icon size={18} strokeWidth={item.active ? 2.5 : 2} />
                  )}
                  <span className="flex-1" style={{ letterSpacing: "0.02em" }}>{item.label}</span>
                  {item.badge && (
                    <span
                      className="font-bold"
                      style={{
                        color: "#fff",
                        fontSize: 13,
                        lineHeight: 1,
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                  {item.hasArrow && (
                    <ChevronDown size={14} style={{ color: "#4B5563" }} />
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </nav>

      {/* ── Bottom controls ── */}
      <div
        className="px-[20px] py-4 flex items-center justify-between mt-auto mb-2"
      >
        <div className="flex items-center gap-[14px]">
          <button className="rounded-[14px] transition-colors hover:bg-gray-800" style={{ background: "#1C1E23", color: "#E5E7EB", border: "none", cursor: "pointer", width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <SidebarIcon size={22} strokeWidth={1.8} />
          </button>
          <button className="rounded-[14px] transition-colors hover:bg-gray-800" style={{ background: "#1C1E23", color: "#E5E7EB", border: "none", cursor: "pointer", width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Wand2 size={22} strokeWidth={1.8} />
          </button>
        </div>
        <span style={{ fontSize: 16, color: "#6B7280", fontWeight: 700, letterSpacing: "0.08em", fontFamily: "var(--font-sans)" }}>v0.1.23</span>
      </div>
    </aside>
  );
}
