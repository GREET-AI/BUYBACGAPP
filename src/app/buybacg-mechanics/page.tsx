"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Shield, TrendingUp, Zap, Target, Calculator } from "lucide-react";

interface FloatingFormula {
  id: string;
  value: string;
  left: string;
  top: string;
  delay: string;
  color: string;
  size: string;
  opacity: number;
}

export default function BuybacgMechanics() {
  const [floatingFormulas, setFloatingFormulas] = useState<FloatingFormula[]>([]);

  const generateRandomFormula = () => {
    const formulas = [
      "0.8% × Volume",
      "75% → Burn",
      "25% → Airdrops",
      "24h+ Hold",
      "Tier × Time",
      "48 Cycles/Day",
      "∞ Buybacks",
      "Anti-Rug",
      "Fair Launch",
      "5 SOL Min"
    ];
    return formulas[Math.floor(Math.random() * formulas.length)];
  };

  useEffect(() => {
    const getRandomBuyBagColor = () => {
      return Math.random() > 0.5 ? '#16a34a' : '#22c55e';
    };

    const generateFormula = () => {
      const newFormula = {
        id: Date.now().toString(),
        value: generateRandomFormula(),
        left: `${Math.random() * 90 + 5}%`,
        top: `${Math.random() * 90 + 5}%`,
        delay: `${Math.random() * 2}s`,
        color: getRandomBuyBagColor(),
        size: `${Math.random() * 0.5 + 0.8}rem`,
        opacity: Math.random() * 0.3 + 0.1
      };

      setFloatingFormulas(prev => [...prev, newFormula]);

      setTimeout(() => {
        setFloatingFormulas(prev => prev.filter(formula => formula.id !== newFormula.id));
      }, 4000);
    };

    const formulaInterval = setInterval(generateFormula, 2000);

    return () => clearInterval(formulaInterval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated BuyBag gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#16a34a]/20 via-green-900/10 to-[#22c55e]/20 animate-gradient-slow" />
      
      {/* Content wrapper with particles */}
      <div className="relative z-10">
        {/* Floating Formulas */}
        {floatingFormulas.map((formula) => (
          <div
            key={formula.id}
            className="absolute animate-float-formula font-bags"
            style={{
              left: formula.left,
              top: formula.top,
              animationDelay: formula.delay,
              color: formula.color,
              opacity: formula.opacity,
              fontSize: formula.size
            }}
          >
            {formula.value}
          </div>
        ))}

        {/* Hero Section */}
        <div className="pt-20 px-6">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <Image src="/buybacg.gif" alt="BuyBag Logo" width={80} height={80} className="w-20 h-20 object-contain" />
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl font-bold tracking-tight relative">
                <span className="relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#16a34a]/20 to-[#22c55e]/20 blur-lg opacity-30" />
                  <span className="relative buybag-gradient-text">
                    BUYBACG Mechanics
                  </span>
                </span>
              </h1>
              
              <p className="text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-medium">
                Understanding the most aggressive buyback & burn system in crypto history.
              </p>
            </div>
          </div>
        </div>

        {/* Core Mechanics Section */}
        <div className="px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 relative">
              {/* Fee Structure Card */}
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-[#22c55e]/40 mb-8 relative overflow-visible buybag-card-glow">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#22c55e] via-[#16a34a] to-[#22c55e] rounded-2xl blur-2xl opacity-30 animate-pulse z-0" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#22c55e]/10 rounded-full flex items-center justify-center text-3xl font-bold text-[#22c55e] transform -rotate-12">
                  <TrendingUp className="w-8 h-8 text-[#22c55e]" />
                </div>
                <div className="relative z-10 flex-1 flex flex-col">
                  <h2 className="text-2xl font-bold mb-6 text-[#22c55e] mt-8">Fee Structure</h2>
                  <div className="space-y-4 mb-auto">
                    <div className="bg-black/50 rounded-lg p-4 border border-[#22c55e]/20">
                      <h3 className="text-lg font-semibold text-[#22c55e] mb-2">Bags.fm Integration</h3>
                      <p className="text-white/80 text-sm">
                        Every trade on bags.fm generates a <span className="font-bold text-[#d97706]">0.8% total raised</span> fee that goes directly to BUYBACG development.
                      </p>
                    </div>
                    <div className="bg-black/40 border border-[#22c55e]/20 rounded-lg p-5">
                      <div className="font-bold text-[#22c55e] mb-2">Fee Distribution</div>
                      <div className="text-white/90 text-sm space-y-2">
                        <div className="flex justify-between">
                          <span>Buyback & Burn:</span>
                          <span className="font-bold text-[#d97706]">75%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Holder Airdrops:</span>
                          <span className="font-bold text-[#22c55e]">25%</span>
                        </div>
                        <div className="border-t border-white/20 pt-2 mt-2">
                          <div className="flex justify-between">
                            <span>Total:</span>
                            <span className="font-bold">100%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buyback & Burn Card */}
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-[#d97706]/40 mb-8 relative overflow-visible buybag-card-glow">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#d97706] rounded-2xl blur-2xl opacity-30 animate-pulse z-0" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#d97706]/10 rounded-full flex items-center justify-center text-3xl font-bold text-[#d97706] transform -rotate-12">
                  <Zap className="w-8 h-8 text-[#d97706]" />
                </div>
                <div className="relative z-10 flex-1 flex flex-col">
                  <h2 className="text-2xl font-bold mb-6 text-[#d97706] mt-8">Buyback & Burn</h2>
                  <div className="space-y-4 mb-auto">
                    <div className="bg-black/50 rounded-lg p-4 border border-[#d97706]/20">
                      <h3 className="text-lg font-semibold text-[#d97706] mb-2">Automatic Process</h3>
                      <p className="text-white/80 text-sm">
                        Every 30 minutes, <span className="font-bold text-[#d97706]">75% of fees</span> are used to buy BUYBACG tokens from the market and burn them permanently.
                      </p>
                    </div>
                    <div className="bg-black/40 border border-[#d97706]/20 rounded-lg p-5">
                      <div className="font-bold text-[#d97706] mb-2">Impact</div>
                      <ul className="text-white/90 text-sm space-y-1">
                        <li>• Reduces total supply</li>
                        <li>• Increases scarcity</li>
                        <li>• Drives price appreciation</li>
                        <li>• 48 cycles per day</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Airdrop System Section */}
        <div className="px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#16a34a]/20 via-[#22c55e]/10 to-[#15803d]/20 backdrop-blur-sm rounded-2xl p-8 border border-[#22c55e]/30 relative overflow-hidden group hover:border-[#22c55e]/50 transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-full flex items-center justify-center text-2xl font-bold text-white transform -rotate-12 shadow-lg">
                💎
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 text-[#22c55e]">Airdrop System</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[#22c55e]">Eligibility Requirements</h3>
                    <div className="space-y-3 text-white/80">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p><span className="font-bold text-[#22c55e]">Minimum Hold:</span> 100,000 BUYBACG</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p><span className="font-bold text-[#d97706]">Time Requirement:</span> 24+ hours</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p><span className="font-bold text-[#22c55e]">Distribution:</span> Every 30 minutes</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[#22c55e]">Calculation Formula</h3>
                    <div className="bg-black/50 rounded-lg p-4 border border-[#22c55e]/20">
                      <pre className="text-sm font-mono bg-black/70 p-3 rounded overflow-x-auto text-white/90">
Your Airdrop = (Your BUYBACG / Total Eligible BUYBACG)
  × (25% of fees per cycle)
  × Tier Multiplier
  × Time Multiplier
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multiplier System Section */}
        <div className="px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Tier Multipliers */}
              <div className="bg-gradient-to-br from-[#16a34a]/15 via-[#22c55e]/10 to-[#15803d]/15 backdrop-blur-sm rounded-xl p-6 border border-[#22c55e]/25 relative overflow-hidden group hover:border-[#22c55e]/40 transition-all duration-300">
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-full flex items-center justify-center text-lg font-bold text-white transform -rotate-12 shadow-lg">
                  🏆
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-[#22c55e]">Tier Multipliers</h3>
                  <div className="space-y-3 text-white/80 text-sm">
                    <div className="bg-white/5 rounded-lg p-3 flex justify-between">
                      <span>Starter (100k+):</span>
                      <span className="font-bold text-[#22c55e]">1.0x</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 flex justify-between">
                      <span>Collector (500k+):</span>
                      <span className="font-bold text-[#22c55e]">1.1x</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 flex justify-between">
                      <span>Investor (1M+):</span>
                      <span className="font-bold text-[#22c55e]">1.2x</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 flex justify-between">
                      <span>Premium (5M+):</span>
                      <span className="font-bold text-[#22c55e]">1.3x</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 flex justify-between">
                      <span>Elite (10M+):</span>
                      <span className="font-bold text-[#d97706]">1.5x</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Time Multipliers */}
              <div className="bg-gradient-to-br from-[#16a34a]/15 via-[#22c55e]/10 to-[#15803d]/15 backdrop-blur-sm rounded-xl p-6 border border-[#22c55e]/25 relative overflow-hidden group hover:border-[#22c55e]/40 transition-all duration-300">
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-full flex items-center justify-center text-lg font-bold text-white transform -rotate-12 shadow-lg">
                  ⏰
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-[#22c55e]">Time Multipliers</h3>
                  <div className="space-y-3 text-white/80 text-sm">
                    <div className="bg-white/5 rounded-lg p-3 flex justify-between">
                      <span>24 hours:</span>
                      <span className="font-bold text-[#22c55e]">1.0x</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 flex justify-between">
                      <span>24+ hours:</span>
                      <span className="font-bold text-[#22c55e]">1.2x</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 flex justify-between">
                      <span>3+ days:</span>
                      <span className="font-bold text-[#22c55e]">1.5x</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 flex justify-between">
                      <span>7+ days:</span>
                      <span className="font-bold text-[#d97706]">2.0x</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Fair Launch Section */}
        <div className="px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Anti-Rug Protection */}
              <div className="bg-gradient-to-br from-[#16a34a]/15 via-[#22c55e]/10 to-[#15803d]/15 backdrop-blur-sm rounded-xl p-6 border border-[#22c55e]/25 relative overflow-hidden group hover:border-[#22c55e]/40 transition-all duration-300">
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-full flex items-center justify-center text-lg font-bold text-white transform -rotate-12 shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-[#22c55e]">Anti-Rug Protection</h3>
                  <div className="space-y-3 text-white/80 text-sm">
                    <div className="bg-white/5 rounded-lg p-3">
                      <p>• No single entity can control enough supply</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p>• Traders can take profits safely</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p>• Viral, organic ecosystem</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p>• Success breeds success</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fair Launch Strategy */}
              <div className="bg-gradient-to-br from-[#d97706]/15 via-[#f59e0b]/10 to-[#d97706]/15 backdrop-blur-sm rounded-xl p-6 border border-[#d97706]/25 relative overflow-hidden group hover:border-[#d97706]/40 transition-all duration-300">
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-[#d97706] to-[#f59e0b] rounded-full flex items-center justify-center text-lg font-bold text-white transform -rotate-12 shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-[#d97706]">Fair Launch Strategy</h3>
                  <div className="space-y-3 text-white/80 text-sm">
                    <div className="bg-white/5 rounded-lg p-3">
                      <p>• <span className="font-bold text-[#d97706]">5 SOL minimum buy-in</span></p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p>• Prevents snipers</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p>• Organic chart growth</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p>• Strategic burns at 50k MC+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calculate Rewards Button */}
        <div className="px-6 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <a 
              href="/calculator"
              className="inline-flex bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold px-8 py-4 rounded-lg text-xl transition-all items-center group border-2 border-[#22c55e] hover:border-[#16a34a] shadow-lg relative overflow-hidden font-bags"
              style={{ minWidth: '250px' }}
            >
              <span className="relative z-10">Calculate Your Rewards</span>
              <Calculator className="w-6 h-6 ml-3 text-white group-hover:scale-110 transition-transform" />
              <span className="absolute inset-0 rounded-lg pointer-events-none group-hover:animate-gloss" style={{background: 'linear-gradient(120deg,rgba(255,255,255,0.15) 0%,rgba(255,255,255,0.35) 50%,rgba(255,255,255,0.15) 100%)', opacity: 0.7}}></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 