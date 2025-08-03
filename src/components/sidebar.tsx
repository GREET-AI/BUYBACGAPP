"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calculator, Timer, FunctionSquare, Info, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

interface SidebarProps {
  className?: string;
}

const navigation = [
  { name: "BUYBACG Token", href: "/how-it-works", icon: Info },
  { name: "BUYBACG Mechanics", href: "/buybacg-mechanics", icon: FunctionSquare },
  { name: "BUYBACG Rewards", href: "/calculator", icon: Calculator },
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
    <div className="px-3 -mt-2 relative overflow-hidden text-center">
      <div className="flex items-center justify-center mb-1">
        <Timer className="w-5 h-5 text-[#22c55e] mr-2" />
        <span className="font-bags-bold text-2xl bg-gradient-to-r from-[#16a34a] to-[#22c55e] bg-clip-text text-transparent animate-gradient">
          {timeLeft}
        </span>
      </div>
      <p className="text-sm text-white/70 font-bags">Next Buyback Time</p>
    </div>
  );
}

function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden fixed top-4 left-4 z-50">
          <Menu className="h-6 w-6 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-64 bg-black/95 backdrop-blur-sm border-r border-white/20">
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <div className="space-y-4 py-4 relative">
          <div className="px-3 py-2">
            <Link href="/how-it-works" className="block">
              <div className="flex items-center justify-center mb-4 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#16a34a]/50 via-green-500/30 to-[#22c55e]/50 rounded-full blur-lg group-hover:blur-xl transition-all duration-500 animate-pulse opacity-75" />
                <div className="w-[120px] h-[120px] rounded-full flex items-center justify-center relative hover:scale-105 transition-transform duration-500 group-hover:rotate-12 overflow-hidden">
                  <Image
                    src="/BUYBACG.png"
                    alt="BUYBACG Logo"
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
            </Link>

            <nav className="space-y-2 mt-6">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link key={item.name} href={item.href}>
                    <Button 
                      variant="ghost" 
                      className={cn(
                        "w-full justify-start gap-3 transition-all duration-300 relative overflow-hidden group tracking-wide text-lg py-6",
                        isActive 
                          ? "bg-gradient-to-r from-transparent to-[#16a34a]/40 text-white font-medium" 
                          : "hover:bg-gradient-to-r hover:from-transparent hover:to-[#16a34a]/30 text-white/80 hover:text-white"
                      )}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#16a34a]/10 to-[#22c55e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient" />
                      <Icon className={cn(
                        "h-6 w-6 transition-all duration-300 transform group-hover:scale-110",
                        isActive ? "text-white" : "text-white/70 group-hover:text-white"
                      )} />
                      <span className="relative z-10">{item.name}</span>
                    </Button>
                  </Link>
                );
              })}
            </nav>

            {/* Timer moved to bottom */}
            <div className="mt-auto pt-8">
              <CountdownTimer />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  return (
    <>
      <MobileNav />
      <div className={cn("pb-12 border-r relative overflow-hidden backdrop-blur-sm border-opacity-20", className)}>
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#16a34a]/40 via-green-500/20 to-[#22c55e]/40 animate-gradient" />
        
        {/* Animated LED border */}
        <div className="absolute right-0 top-0 w-[2px] h-full">
          <div className="absolute inset-0 animate-led-flow">
            <div className="absolute inset-0 bg-gradient-to-b from-[#16a34a] via-green-500 to-[#22c55e] opacity-70 blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#16a34a] via-green-500 to-[#22c55e]" />
          </div>
          <div className="absolute inset-0 animate-led-pulse">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-50 blur-sm" />
          </div>
        </div>

        <div className="space-y-4 py-4 relative flex flex-col h-full">
          <div className="px-3 py-2 flex-1">
            <Link href="/how-it-works" className="block">
              <div className="flex items-center justify-center mb-4 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#16a34a]/50 via-green-500/30 to-[#22c55e]/50 rounded-full blur-lg group-hover:blur-xl transition-all duration-500 animate-pulse opacity-75" />
                <div className="w-[120px] h-[120px] rounded-full flex items-center justify-center relative hover:scale-105 transition-transform duration-500 group-hover:rotate-12 overflow-hidden">
                  <Image
                    src="/BUYBACG.png"
                    alt="BUYBACG Logo"
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
            </Link>

            <nav className="space-y-2 mt-6">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link key={item.name} href={item.href}>
                    <Button 
                      variant="ghost" 
                      className={cn(
                        "w-full justify-start gap-3 transition-all duration-300 relative overflow-hidden group tracking-wide text-lg py-6",
                        isActive 
                          ? "bg-gradient-to-r from-transparent to-[#16a34a]/40 text-white font-medium" 
                          : "hover:bg-gradient-to-r hover:from-transparent hover:to-[#16a34a]/30 text-white/80 hover:text-white"
                      )}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#16a34a]/10 to-[#22c55e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient" />
                      <Icon className={cn(
                        "h-6 w-6 transition-all duration-300 transform group-hover:scale-110",
                        isActive ? "text-white" : "text-white/70 group-hover:text-white"
                      )} />
                      <span className="relative z-10">{item.name}</span>
                    </Button>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Timer moved to bottom */}
          <div className="px-3 pb-4">
            <CountdownTimer />
          </div>
        </div>
      </div>
    </>
  );
} 