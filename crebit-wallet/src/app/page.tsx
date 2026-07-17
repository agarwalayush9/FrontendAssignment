import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import StatusBar from "@/components/layout/StatusBar";
import AnnouncementBanner from "@/components/dashboard/AnnouncementBanner";
import BalanceCard from "@/components/dashboard/BalanceCard";
import FiatWallets from "@/components/dashboard/FiatWallets";
import CryptoWallets from "@/components/dashboard/CryptoWallets";
import { ChevronRight, Plus } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#0C0E12] text-[#D9D9D9]">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden relative">
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <AnnouncementBanner />
          <div className="px-[20px] pt-4 pb-[120px] flex flex-col gap-[20px]">
            {/* Breadcrumb & Advertise */}
            <div className="flex items-center justify-between mb-2 mt-2">
              <div className="flex items-center gap-2 text-[13px] tracking-wide">
                <span className="font-bold text-[#F3F4F6]">User Panel</span>
                <ChevronRight size={14} strokeWidth={2} className="text-[#4B5563]" />
                <span className="font-semibold text-[#6B7280]">Dashboard</span>
              </div>
              <button 
                className="flex items-center gap-2 px-4 h-[38px] rounded-[10px] bg-[#16181D] border-[2px] border-dashed border-[#374151] text-[#9CA3AF] hover:text-white hover:border-[#4B5563] hover:bg-[#1A1C23] transition-all"
                style={{ 
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.03em"
                }}
              >
                <Plus size={16} strokeWidth={2.5} />
                Advertise Here
              </button>
            </div>

            <BalanceCard />
            <FiatWallets />
            <CryptoWallets />
          </div>
        </main>
        <div className="absolute bottom-0 w-full">
          <StatusBar />
        </div>
      </div>
    </div>
  );
}
