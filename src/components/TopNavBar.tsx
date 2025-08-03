"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Timer, FunctionSquare, Info, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

interface TopNavBarProps {
  className?: string;
}

const navigation = [
  { name: "BUYBACG Token", href: "/how-it-works", icon: Info },
  { name: "BUYBACG Mechanics", href: "/buybacg-mechanics", icon: FunctionSquare },
  { name: "BUYBACG TIME!", href: "/timer", icon: Timer },
];

function getNextBuybackCountdown() {
  const now = new Date();
  const next = new Date(now);
  if (now.getMinutes() < 30) {
    next.setMinutes(30, 0, 0);
  } else {
    next.setHours(now.getHours() + 1, 0, 0, 0);
  }
  const diff = next.getTime() - now.getTime();
  const minutes = Math.floor(diff / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getNextBuybackCountdown());
    const timer = setInterval(() => {
      setTimeLeft(getNextBuybackCountdown());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-black/20 rounded-lg border border-[#22c55e]/30">
      <Timer className="w-4 h-4 text-[#22c55e]" />
      <span className="font-bags-bold text-lg bg-gradient-to-r from-[#16a34a] to-[#22c55e] bg-clip-text text-transparent">
        {timeLeft}
      </span>
      <span className="text-sm text-white/70 font-bags">Next Buyback</span>
    </div>
  );
}

function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="p-0 h-auto bg-black/95 backdrop-blur-sm border-b border-white/20">
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <div className="flex items-center justify-between p-4">
          <Link href="/how-it-works" className="flex items-center gap-3">
            <Image
              src="/BUYBACG.png"
              alt="BUYBACG Logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold buybag-gradient-text">BUYBACG</span>
          </Link>
          <CountdownTimer />
        </div>
        <nav className="flex flex-wrap gap-2 p-4 border-t border-white/10">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href}>
                <Button 
                  variant="ghost" 
                  className={cn(
                    "gap-2 transition-all duration-300 relative overflow-hidden group",
                    isActive 
                      ? "bg-gradient-to-r from-[#16a34a]/40 to-[#22c55e]/40 text-white font-medium" 
                      : "hover:bg-gradient-to-r hover:from-[#16a34a]/30 hover:to-[#22c55e]/30 text-white/80 hover:text-white"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm">{item.name}</span>
                </Button>
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export function TopNavBar({ className }: TopNavBarProps) {
  const pathname = usePathname();
  
  return (
    <>
      <MobileNav />
      <div className={cn("fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-[#22c55e]/20", className)}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/how-it-works" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#16a34a]/50 to-[#22c55e]/50 rounded-full blur-lg group-hover:blur-xl transition-all duration-500 opacity-75" />
                <div className="relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/BUYBACG.png"
                    alt="BUYBACG Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <span className="text-xl font-bold buybag-gradient-text">BUYBACG</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link key={item.name} href={item.href}>
                    <Button 
                      variant="ghost" 
                      className={cn(
                        "gap-2 transition-all duration-300 relative overflow-hidden group px-4 py-2",
                        isActive 
                          ? "bg-gradient-to-r from-[#16a34a]/40 to-[#22c55e]/40 text-white font-medium" 
                          : "hover:bg-gradient-to-r hover:from-[#16a34a]/30 hover:to-[#22c55e]/30 text-white/80 hover:text-white"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm">{item.name}</span>
                    </Button>
                  </Link>
                );
              })}
            </nav>

            {/* Countdown Timer */}
            <div className="hidden md:block">
              <CountdownTimer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 