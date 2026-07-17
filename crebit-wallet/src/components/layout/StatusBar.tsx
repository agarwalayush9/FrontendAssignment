"use client";

import React from "react";
import { Hexagon, ChevronsUp, ShoppingBag, Droplets, Shield, Cpu, SignalHigh, Headphones, Book, MoreVertical } from "lucide-react";

export default function StatusBar() {
  return (
    <div
      className="flex items-center px-5 shrink-0 bg-[#121318] border-t border-white/5"
      style={{ height: 44 }}
    >
      {/* Left side items */}
      <div className="flex items-center gap-4 text-[#9CA3AF]">
        {/* Item 1 */}
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center">
            <Hexagon size={16} strokeWidth={2} />
            <ChevronsUp size={10} className="absolute text-[#22C55E]" strokeWidth={3} />
          </div>
          <span className="font-bold text-[13px] text-white tracking-wide">1.7%</span>
        </div>

        <div className="w-[1px] h-[16px] bg-white/10" />

        {/* Item 2 */}
        <div className="flex items-center gap-2">
          <ShoppingBag size={14} strokeWidth={2.5} />
          <span className="font-bold text-[13px] text-white tracking-wide">156</span>
        </div>

        <div className="w-[1px] h-[16px] bg-white/10" />

        {/* Item 3 */}
        <div className="flex items-center gap-1.5">
          <Droplets size={14} strokeWidth={2.5} />
          <span className="font-bold text-[13px] text-white tracking-wide">6:17</span>
        </div>

        <div className="w-[1px] h-[16px] bg-white/10" />

        {/* Item 4 */}
        <div className="flex items-center gap-2">
          <Shield size={14} strokeWidth={2.5} />
          <span className="font-bold text-[13px] text-white tracking-wide">98</span>
        </div>

        <div className="w-[1px] h-[16px] bg-white/10" />

        {/* Item 5 */}
        <div className="flex items-center gap-2">
          <span className="text-[14px]">🎉</span>
          <div className="font-bold text-[13px] whitespace-nowrap tracking-wide">
            <span className="text-[#D61D64]">You Won!</span>
            <span className="text-white"> - 1200 DOGE</span>
          </div>
        </div>

        <div className="w-[1px] h-[16px] bg-white/10" />

        {/* Item 6 */}
        <div className="flex items-center">
          <Cpu size={15} strokeWidth={2.5} className="text-[#EAB308]" />
        </div>
      </div>

      {/* Right side icons */}
      <div className="flex items-center gap-5 ml-auto text-[#9CA3AF]">
        <SignalHigh size={16} strokeWidth={2.5} className="text-[#22C55E]" />
        <Headphones size={16} strokeWidth={2.5} className="hover:text-white transition-colors cursor-pointer" />
        <Book size={16} strokeWidth={2.5} className="hover:text-white transition-colors cursor-pointer" />
        <MoreVertical size={16} strokeWidth={2.5} className="hover:text-white transition-colors cursor-pointer" />
      </div>
    </div>
  );
}
