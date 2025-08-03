"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRightCircle, Zap, Target, TrendingUp, Rocket, Flame, Crown, Star, Shield, CheckCircle } from 'lucide-react';

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
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

const XIcon = () => (
  <svg width="36" height="36" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
    <rect width="1200" height="1227" rx="300" fill="#000"/>
    <path d="M860 320H740L600 520L460 320H340L540 600L340 880H460L600 680L740 880H860L660 600L860 320Z" fill="#14F195"/>
  </svg>
);



export default function Timer() {
  const [countdown, setCountdown] = useState(getNextBuybackCountdown());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getNextBuybackCountdown());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Floating BUYBACG logos
  const [floatingLogos, setFloatingLogos] = useState<Array<{ id: string; left: string; top: string; delay: string; size: string; opacity: number }>>([]);
  
  useEffect(() => {
    const generateLogo = () => {
      const newLogo = {
        id: Date.now().toString(),
        left: `${Math.random() * 90 + 5}%`,
        top: `${Math.random() * 90 + 5}%`,
        delay: `${Math.random() * 2}s`,
        size: `${Math.random() * 0.8 + 0.6}rem`,
        opacity: Math.random() * 0.3 + 0.1
      };

      setFloatingLogos(prev => [...prev, newLogo]);

      setTimeout(() => {
        setFloatingLogos(prev => prev.filter(logo => logo.id !== newLogo.id));
      }, 8000);
    };

    const logoInterval = setInterval(generateLogo, 1500);
    return () => clearInterval(logoInterval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black">
      {/* Animated BuyBag gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#16a34a]/20 via-green-900/10 to-[#22c55e]/20 animate-gradient-slow" />
      
      {/* Floating BUYBACG Logos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {floatingLogos.map((logo) => (
          <div
            key={logo.id}
            className="absolute animate-float-logo"
            style={{
              left: logo.left,
              top: logo.top,
              animationDelay: logo.delay,
              fontSize: logo.size,
              opacity: logo.opacity
            }}
          >
            <Image 
              src="/BUYBACG.png" 
              alt="BUYBACG Logo" 
              width={32} 
              height={32} 
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Flame className="w-8 h-8 text-[#fbbf24] animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#fbbf24] via-[#22c55e] to-[#16a34a] bg-clip-text text-transparent animate-pulse">
              THE BUYBACG REVOLUTION
            </h1>
            <Flame className="w-8 h-8 text-[#fbbf24] animate-pulse" />
          </div>
          <p className="text-xl md:text-2xl text-white/80 font-bags font-semibold max-w-3xl mx-auto">
            UNLIMITED HOLDER GROWTH • MOST AGGRESSIVE BUYBACK MACHINE • CHALLENGE ACCEPTED
          </p>
        </div>

        {/* BUYBACG Logo - No Background */}
        <div className="w-40 h-40 mb-8 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbbf24] via-[#22c55e] to-[#16a34a] rounded-full blur-2xl opacity-50 animate-pulse"></div>
          <Image 
            src="/buybacg.gif" 
            alt="BUYBACG Logo" 
            width={160} 
            height={160} 
            className="w-40 h-40 object-contain drop-shadow-[0_0_40px_#16a34a99] relative z-10"
          />
        </div>

        {/* Countdown Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Zap className="w-8 h-8 text-[#22c55e] animate-bounce" />
            <span className="text-6xl md:text-8xl font-extrabold text-[#22c55e] font-mono drop-shadow-[0_0_16px_#22c55e99] tracking-widest animate-pulse-glow">{countdown}</span>
            <Zap className="w-8 h-8 text-[#22c55e] animate-bounce" />
          </div>
          <div className="text-xl md:text-2xl text-white/70 font-bold tracking-wide mb-4">NEXT BUYBACK & BURN CYCLE</div>
          
          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-[#16a34a]/20 to-[#22c55e]/20 backdrop-blur-sm rounded-2xl p-6 border border-[#22c55e]/30 max-w-4xl mx-auto mb-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Target className="w-6 h-6 text-[#fbbf24]" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#fbbf24]">MISSION: UNLIMITED HOLDER GROWTH</h2>
              <Target className="w-6 h-6 text-[#fbbf24]" />
            </div>
            <p className="text-lg md:text-xl text-white/90 font-bags font-semibold mb-3">
              Every 30 minutes, 75% of fees go to BUYBACK & BURN. 25% to HOLDER AIRDROPS.
            </p>
            <p className="text-base md:text-lg text-[#22c55e] font-bags font-medium">
              No charity donations. No developer profits. ONLY HOLDER GROWTH. CHALLENGE ACCEPTED.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8 px-4">
          <div className="bg-gradient-to-br from-[#16a34a]/20 to-[#22c55e]/20 backdrop-blur-sm rounded-xl p-4 border border-[#22c55e]/30 text-center">
            <TrendingUp className="w-8 h-8 text-[#fbbf24] mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">75%</div>
            <div className="text-sm text-white/70">BUYBACK & BURN</div>
          </div>
          <div className="bg-gradient-to-br from-[#16a34a]/20 to-[#22c55e]/20 backdrop-blur-sm rounded-xl p-4 border border-[#22c55e]/30 text-center">
            <Rocket className="w-8 h-8 text-[#fbbf24] mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">25%</div>
            <div className="text-sm text-white/70">HOLDER AIRDROPS</div>
          </div>
          <div className="bg-gradient-to-br from-[#16a34a]/20 to-[#22c55e]/20 backdrop-blur-sm rounded-xl p-4 border border-[#22c55e]/30 text-center">
            <Crown className="w-8 h-8 text-[#fbbf24] mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">∞</div>
            <div className="text-sm text-white/70">HOLDER GROWTH</div>
          </div>
        </div>

        {/* Buyback & Burn Proof Section */}
        <div className="w-full max-w-6xl mx-auto px-4 mb-8">
          <div className="bg-gradient-to-br from-[#16a34a]/10 to-[#22c55e]/10 backdrop-blur-sm rounded-3xl p-8 border border-[#22c55e]/30">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-[#fbbf24]" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#fbbf24]">BUYBACK & BURN PROOF</h2>
                <Shield className="w-8 h-8 text-[#fbbf24]" />
              </div>
              <p className="text-lg md:text-xl text-white/90 font-bags font-semibold max-w-4xl mx-auto">
                All buyback & burn transactions are transparent, verifiable and secured on-chain. Trust is our foundation: every burn is logged and auditable for your peace of mind.
              </p>
            </div>

            {/* Official Partners */}
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">OFFICIAL PARTNERS</h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30 flex items-center justify-center">
                  <Image src="/solana.png" alt="Solana" width={48} height={48} className="w-12 h-12 object-contain" />
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-yellow-500/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30 flex items-center justify-center">
                  <Image src="/jupiter.png" alt="Jupiter" width={48} height={48} className="w-12 h-12 object-contain" />
                </div>
                <div className="bg-gradient-to-br from-[#16a34a]/20 to-[#22c55e]/20 backdrop-blur-sm rounded-xl p-4 border border-[#22c55e]/30 flex items-center justify-center">
                  <Image src="/bagslogo.png" alt="Bags.fm" width={48} height={48} className="w-12 h-12 object-contain rounded-full" />
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30 flex items-center justify-center">
                  <Image src="/raydium.svg" alt="Raydium" width={48} height={48} className="w-12 h-12 object-contain" />
                </div>
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30 flex items-center justify-center">
                  <Image src="/meteora.svg" alt="Meteora" width={48} height={48} className="w-12 h-12 object-contain" />
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-black/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30 flex items-center justify-center">
                  <Image src="/solscan.svg" alt="Solscan" width={48} height={48} className="w-12 h-12 object-contain" />
                </div>
              </div>
            </div>

            {/* Latest Transactions */}
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-[#22c55e] mb-4">LATEST BUYBACK & BURN TRANSACTIONS</h3>
              <div className="bg-gradient-to-br from-[#16a34a]/20 to-[#22c55e]/20 backdrop-blur-sm rounded-2xl p-6 border border-[#22c55e]/30 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-[#22c55e]" />
                  <span className="text-lg font-semibold text-white">No transactions yet</span>
                  <CheckCircle className="w-6 h-6 text-[#22c55e]" />
                </div>
                <p className="text-white/70 text-sm">
                  Buyback & burn transactions will appear here once the system is live
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-[#fbbf24]/20 to-[#22c55e]/20 backdrop-blur-sm rounded-2xl p-6 border border-[#fbbf24]/30 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Star className="w-6 h-6 text-[#fbbf24] animate-pulse" />
              <h3 className="text-xl md:text-2xl font-bold text-[#fbbf24]">STAY DEGEN. STAY ON TIME.</h3>
              <Star className="w-6 h-6 text-[#fbbf24] animate-pulse" />
            </div>
            <p className="text-lg text-white/90 font-bags font-semibold">
              Don&apos;t miss the next buyback & burn cycle. Join the most aggressive buyback machine in crypto history!
            </p>
          </div>
        </div>
      </div>

      {/* Social & Share Cards */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Follow us on X */}
          <div className="bg-gradient-to-br from-[#16a34a]/20 to-[#22c55e]/20 backdrop-blur-sm rounded-2xl p-6 border border-[#22c55e]/30 hover:border-[#22c55e]/50 transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <XIcon />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Join the Revolution on X</h3>
                <p className="text-white/70 text-sm mb-4">Get real-time buyback & burn updates, community vibes, and never miss a BUYBACG cycle. The most aggressive buyback machine needs the most aggressive community!</p>
                <a 
                  href="https://x.com/BUYBACG" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#22c55e] text-black font-semibold rounded-lg hover:bg-[#16a34a] transition-colors duration-300 group-hover:scale-105"
                >
                  @BUYBACG
                  <ArrowRightCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Join our X Community */}
          <div className="bg-gradient-to-br from-[#16a34a]/20 to-[#22c55e]/20 backdrop-blur-sm rounded-2xl p-6 border border-[#22c55e]/30 hover:border-[#22c55e]/50 transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <XIcon />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Join the Degen Community</h3>
                <p className="text-white/70 text-sm mb-4">Connect with fellow degens, share your airdrops, and be part of the fastest-growing buyback & burn community. UNLIMITED HOLDER GROWTH starts here!</p>
                <a 
                  href="https://x.com/i/communities/1951990625445753063" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#22c55e] text-black font-semibold rounded-lg hover:bg-[#16a34a] transition-colors duration-300 group-hover:scale-105"
                >
                  Join community
                  <ArrowRightCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 