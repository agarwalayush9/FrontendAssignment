"use client";

import React from "react";
import {
  Link2,
  Earth,
  Monitor,
  LayoutGrid,
  ChevronDown,
  PanelLeft,
  Wand2,
  HandCoins,
} from "lucide-react";

type NavIcon = React.ComponentType<{ size?: number; strokeWidth?: number; color?: string }>;

interface NavItem {
  id: string;
  icon: NavIcon;
  label: string;
  active: boolean;
  badge?: string;
  hasArrow?: boolean;
}

interface NavSection {
  label: string;
  items: NavItem[];
}

const NAV_SECTIONS: NavSection[] = [
  {
    label: "EARNINGS",
    items: [
      { id: "shortlinks", icon: Link2,     label: "Shortlinks", active: false, badge: "5" },
      { id: "faucet",     icon: HandCoins, label: "Faucet",     active: false },
      { id: "ptc",        icon: Monitor,   label: "PTC ADs",    active: false, hasArrow: true },
    ],
  },
  {
    label: "ORBIT SPACE",
    items: [
      { id: "discover", icon: Earth,       label: "Discover", active: false },
      { id: "crates",   icon: LayoutGrid,  label: "Crates",   active: false },
      { id: "shop",     icon: Monitor,     label: "Shop",     active: false, hasArrow: true },
    ],
  },
];

function TriangleUp() {
  return (
    <svg width="6" height="4" viewBox="0 0 6 4" fill="currentColor" aria-hidden="true">
      <path d="M3 0L6 4H0L3 0Z" />
    </svg>
  );
}

export default function Sidebar() {
  return (
    <aside
      className="hidden lg:flex flex-col shrink-0"
      style={{
        width: 254,
        height: 586,
        background: "#0C0E12",
        borderRight: "1px solid rgba(255,255,255,0.05)",
        opacity: 1,
      }}
      aria-label="Main navigation"
    >
      {/* ── Logo header ── */}
      <div
        className="flex items-center justify-center shrink-0 w-full"
        style={{ height: 84, borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div
          className="flex items-center justify-between"
          style={{ width: 212, height: 44, gap: 24, opacity: 1 }}
        >
          <div className="flex items-center gap-3">
            {/* Logo mark */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/Frame 147.svg" alt="CREBiT logo" width={34} height={34} />

            {/* Brand text */}
            <div className="flex flex-col items-start leading-none gap-[3px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/Group.svg" alt="CREBiT" width={66} height={17} />
              <span
                style={{
                  fontSize: 11,
                  color: "#D61D64",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                }}
              >
                ~Wallet
              </span>
            </div>
          </div>

          {/* Collapse toggle */}
          <button
            aria-label="Collapse sidebar"
            className="flex flex-col gap-[4px] bg-transparent border-none opacity-60 hover:opacity-100 transition-opacity"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/Icon.svg" alt="" width={14} height={6} aria-hidden="true" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/Accent.svg" alt="" width={14} height={6} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* ── Navigation ── */}
      <nav
        className="flex flex-col overflow-y-auto overflow-x-hidden"
        style={{
          width: 214,
          height: 514,
          gap: 14,
          opacity: 1,
          margin: "0 auto",
          paddingTop: 20,
        }}
        aria-label="Sidebar navigation"
      >
        {/* Dashboard */}
        <button
          className="w-full flex items-center gap-[14px] px-4 rounded-[8px] shrink-0 transition-all duration-150 active:scale-95"
          style={{
            height: 38,
            background: "#D61D64",
            color: "#FFFFFF",
            border: "none",
            boxShadow: "0 4px 20px rgba(214,29,100,0.3)",
          }}
          aria-current="page"
        >
          <LayoutGrid size={17} strokeWidth={2.5} aria-hidden="true" />
          <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.04em" }}>
            Dashboard
          </span>
        </button>

        {/* Sections */}
        {NAV_SECTIONS.map((section) => (
          <div key={section.label} className="flex flex-col shrink-0">
            {/* Section label */}
            <p
              className="flex items-center gap-2 px-1 mb-2 text-[#4B5563]"
              style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em" }}
            >
              {section.label}
              <TriangleUp />
            </p>

            {/* Items */}
            {section.items.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  className="w-full flex items-center gap-[14px] px-4 rounded-[6px] mb-[2px] transition-all duration-150 active:scale-95 hover:bg-white/[0.04]"
                  style={{
                    height: 38,
                    background: item.active ? "#D61D64" : "transparent",
                    color: "#FFFFFF",
                    border: "none",
                    boxShadow: item.active ? "0 4px 20px rgba(214,29,100,0.25)" : "none",
                  }}
                  aria-current={item.active ? "page" : undefined}
                >
                  <Icon
                    size={17}
                    strokeWidth={item.active ? 2.5 : 2}
                    color={item.active ? "#FFFFFF" : "#9CA3AF"}
                  />
                  <span
                    className="flex-1 text-left"
                    style={{
                      fontSize: 14,
                      fontWeight: item.active ? 700 : 500,
                      color: item.active ? "#fff" : "#D1D5DB",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.label}
                  </span>

                  {item.badge && (
                    <span className="font-bold text-[#D1D5DB]" style={{ fontSize: 13 }}>
                      {item.badge}
                    </span>
                  )}
                  {item.hasArrow && (
                    <ChevronDown size={13} color="#4B5563" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </nav>

      {/* ── Bottom controls ── */}
      <div
        className="flex items-center justify-between shrink-0"
        style={{
          width: 214,
          height: 32,
          opacity: 1,
          margin: "auto auto 24px auto",
        }}
      >
        <div className="flex items-center" style={{ gap: 16 }}>
          <button
            aria-label="Toggle sidebar panel"
            className="rounded-[8px] hover:bg-white/5 transition-colors"
            style={{
              background: "#1C1E23",
              color: "#9CA3AF",
              border: "none",
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PanelLeft size={16} strokeWidth={2} />
          </button>
          <button
            aria-label="Customise appearance"
            className="rounded-[8px] hover:bg-white/5 transition-colors"
            style={{
              background: "#1C1E23",
              color: "#9CA3AF",
              border: "none",
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Wand2 size={16} strokeWidth={2} />
          </button>
        </div>
        <span
          style={{ fontSize: 13, color: "#4B5563", fontWeight: 700, letterSpacing: "0.06em" }}
        >
          v0.1.23
        </span>
      </div>
    </aside>
  );
}
