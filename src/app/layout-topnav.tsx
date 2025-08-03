import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { TopNavBar } from "@/components/TopNavBar";
import FloatingProofButtonClient from "@/components/FloatingProofButtonClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BUYBACG - The Ultimate Buyback & Burn Token",
  description: "BUYBACG is the most aggressive buyback machine in crypto history. Earn airdrops every 30 minutes just for holding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={inter.className}>
        <ThemeProvider>
          <TopNavBar />
          <main className="pt-16">
            {children}
          </main>
          <FloatingProofButtonClient />
        </ThemeProvider>
      </body>
    </html>
  );
} 