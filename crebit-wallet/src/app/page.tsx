import BalanceCard from "@/components/dashboard/BalanceCard";
import CryptoWallets from "@/components/dashboard/CryptoWallets";
import FiatWallets from "@/components/dashboard/FiatWallets";
import AnnouncementBanner from "@/components/dashboard/AnnouncementBanner";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import StatusBar from "@/components/layout/StatusBar";
import { ChevronRight, Plus } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#0C0E12] text-[#D9D9D9]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main area */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Top header */}
        <Header />

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-[#0C0E12]">
          <div className="w-full flex justify-center">
            <AnnouncementBanner />
          </div>

          <div
            className="flex flex-col"
            style={{
              width: 1186,
              height: 527,
              gap: 10,
              paddingLeft: 20,
              paddingRight: 20,
              opacity: 1,
            }}
          >
            {/* Breadcrumb + Advertise row */}
            <div className="flex items-center justify-between w-full max-w-[1146px] shrink-0">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-[13px]" style={{ listStyle: "none" }}>
                  <li>
                    <span className="font-bold text-[#D1D5DB]">User Panel</span>
                  </li>
                  <li aria-hidden="true">
                    <ChevronRight size={13} strokeWidth={2} className="text-[#4B5563]" />
                  </li>
                  <li>
                    <span className="font-medium text-[#6B7280]" aria-current="page">
                      Dashboard
                    </span>
                  </li>
                </ol>
              </nav>

              <button
                aria-label="Advertise here"
                className="flex items-center justify-center gap-1.5 rounded-[4px] bg-[#16181D] border border-dashed border-[#374151] text-[#9CA3AF] hover:text-white hover:border-[#4B5563] hover:bg-[#1A1C23] transition-all shrink-0"
                style={{ height: 26, paddingInline: 10, fontSize: 12, fontWeight: 700, letterSpacing: "0.03em" }}
              >
                <Plus size={12} strokeWidth={2.5} aria-hidden="true" />
                Advertise Here
              </button>
            </div>

            {/* BalanceCard */}
            <div className="w-full shrink-0">
              <BalanceCard />
            </div>

            {/* FiatWallets */}
            <div className="w-full shrink-0">
              <FiatWallets />
            </div>

            {/* CryptoWallets */}
            <div className="w-full shrink-0">
              <CryptoWallets />
            </div>
          </div>
        </main>

        {/* Status bar — pinned to bottom */}
        <StatusBar />
      </div>
    </div>
  );
}
