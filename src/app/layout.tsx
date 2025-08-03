import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TopNavBar } from "@/components/TopNavBar";
import FloatingProofButtonClient from "@/components/FloatingProofButtonClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BuyBag - The Ultimate Buyback & Burn Token",
  description: "Join the BuyBag revolution! 75% of fees go to buyback & burn, 25% to holder airdrops. The future of deflationary tokens on Solana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-black">
      <body className={`${inter.className} bg-black min-h-screen`}>
        <ThemeProvider>
          <TopNavBar />
          <main className="pt-16 min-h-screen bg-black">
            {children}
          </main>
          <FloatingProofButtonClient />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
