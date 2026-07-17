import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CREBiT Wallet — Dashboard",
  description: "Manage your crypto and fiat assets with CREBiT Wallet. Deposit, withdraw, buy crypto and track your portfolio.",
  keywords: ["crypto wallet", "bitcoin", "fiat wallet", "DeFi", "CREBiT"],
  robots: "noindex",          // Assignment — don't index
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
