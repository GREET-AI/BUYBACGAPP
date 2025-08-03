import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Sidebar } from "@/components/sidebar";
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
          <div className="flex min-h-screen bg-black">
            <Sidebar className="w-64 hidden md:block fixed h-screen" />
            <div className="flex-1 md:ml-64 bg-black min-h-screen">
              <main className="min-h-screen bg-black">
                {children}
              </main>
            </div>
            <FloatingProofButtonClient />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
