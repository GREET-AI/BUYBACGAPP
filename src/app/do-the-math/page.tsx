"use client";

import { useEffect, useState } from "react";

import { ArrowRightCircle, Calculator } from 'lucide-react';

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

export default function DoTheMath() {
  const [floatingFormulas, setFloatingFormulas] = useState<FloatingFormula[]>([]);

  // Generate random mathematical formula
  const generateRandomFormula = () => {
    const formulas = [
      "E = mc²",
      "∑(n²) = n(n+1)(2n+1)/6",
      "∫f(x)dx = F(x) + C",
      "π = 3.14159265359",
      "(x + y)² = x² + 2xy + y²",
      "y = mx + b",
      "a² + b² = c²",
      "∞ → ∞",
      "δy/δx = f'(x)",
      "f'(x) = lim[h→0] [f(x+h) - f(x)]/h",
      "∮ E·dl = -dΦB/dt",
      "∇ × B = μ₀J + μ₀ε₀∂E/∂t",
      "eiπ + 1 = 0",
      "P(A|B) = P(B|A)P(A)/P(B)",
      "F = G(m₁m₂)/r²",
      "∇ · E = ρ/ε₀",
      "dS ≥ 0",
      "ψ(x,t) = Ae^(i(kx-ωt))",
      "∫e^x dx = e^x + C",
      "sin²θ + cos²θ = 1",
      "∇²ψ + (2m/ℏ²)(E-V)ψ = 0",
      "ds² = gμνdxᵘdxᵛ",
      "R_μν - (R/2)g_μν = 8πGT_μν",
      "[x,p] = iℏ",
      "∂ψ/∂t = -(iℏ/2m)∇²ψ",
      "S = k_B ln(W)",
      "F = ma",
      "E = hf",
      "PV = nRT",
      "dQ = TdS"
    ];
    return formulas[Math.floor(Math.random() * formulas.length)];
  };

  useEffect(() => {
    // Generate floating formulas periodically
    const generateFormula = () => {
      const newFormula = {
        id: `${Date.now()}-${Math.random()}`,
        value: generateRandomFormula(),
        left: `${Math.random() * 90 + 5}%`,
        top: `${Math.random() * 90 + 5}%`,
        delay: `${Math.random() * 1}s`,
        color: Math.random() > 0.5 ? '#16a34a' : '#22c55e',
        size: `${Math.random() * 0.5 + 0.8}rem`,
        opacity: Math.random() * 0.3 + 0.1
      };

      setFloatingFormulas(prev => [...prev, newFormula]);

      setTimeout(() => {
        setFloatingFormulas(prev => prev.filter(formula => formula.id !== newFormula.id));
      }, 3000);
    };

    // Generate formulas more frequently
    const interval = setInterval(generateFormula, 400);

    // Initial set of formulas
    for (let i = 0; i < 30; i++) {
      generateFormula();
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#16a34a]/20 via-green-900/10 to-[#22c55e]/20 animate-gradient-slow" />
      
      {/* Content wrapper with floating formulas */}
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
              <div className="absolute inset-[-30%] bg-gradient-to-r from-[#16a34a]/40 via-green-500/20 to-[#22c55e]/40 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-32 h-32 bg-gradient-to-br from-[#16a34a] to-[#22c55e] rounded-full flex items-center justify-center">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="white"/>
                  <path d="M20 8H4C2.9 8 2 8.9 2 10V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V10C22 8.9 21.1 8 20 8Z" fill="white"/>
                  <path d="M12 12C13.1 12 14 12.9 14 14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14C10 12.9 10.9 12 12 12Z" fill="#fbbf24"/>
                </svg>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl font-bold tracking-tight relative">
                <span className="relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#16a34a]/20 to-[#22c55e]/20 blur-lg opacity-30" />
                  <span className="relative buybag-gradient-text">
                    Do the math...
                  </span>
                </span>
              </h1>
              
              <p className="text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-medium">
                Discover how our unique buyback & burn system multiplies your BUYBAG tokens over time.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 relative">
              {/* Buyback & Burn Calculation Card */}
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-[#fbbf24]/40 mb-8 relative overflow-visible buybag-card-glow">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#fbbf24] rounded-2xl blur-2xl opacity-30 animate-pulse z-0" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#fbbf24]/10 rounded-full flex items-center justify-center text-3xl font-bold text-[#fbbf24] transform -rotate-12">
                  <Calculator className="w-8 h-8 text-[#fbbf24]" />
                </div>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#fbbf24]/5 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-6 transition-transform">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#16a34a] to-[#22c55e] rounded-full flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="white"/>
                      <path d="M20 8H4C2.9 8 2 8.9 2 10V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V10C22 8.9 21.1 8 20 8Z" fill="white"/>
                      <path d="M12 12C13.1 12 14 12.9 14 14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14C10 12.9 10.9 12 12 12Z" fill="#fbbf24"/>
                    </svg>
                  </div>
                </div>
                <div className="relative z-10 flex-1 flex flex-col">
                  <h2 className="text-2xl font-bold mb-6 text-[#fbbf24] mt-8">Buyback & Burn Calculation</h2>
                  <div className="space-y-4 mb-auto">
                    <div className="bg-black/50 rounded-lg p-4 border border-[#fbbf24]/20">
                      <h3 className="text-lg font-semibold text-[#fbbf24] mb-2">Airdrop per cycle (in BUYBAG)</h3>
                      <pre className="text-sm font-mono bg-black/70 p-3 rounded overflow-x-auto text-white/90">
const airdrop = (dailyVolumeUSD * 0.008 * 0.25 / 48)
  * (yourBUYBAG / allEligibleBUYBAG)
  * timeMultiplier
  * tierMultiplier;
                      </pre>
                      <p className="text-white/80 mt-3 text-sm">
                        Your airdrop depends on your share of the pool, your holding duration, and your tier. Buyback & burn and airdrops happen every 30 minutes and all multipliers update live.
                      </p>
                    </div>
                    <div className="bg-black/40 border border-[#fbbf24]/20 rounded-lg p-5 mt-6">
                      <div className="font-bold text-[#fbbf24] mb-1">Example</div>
                      <div className="text-white/90 text-sm">
                                                If you hold 200,000 BUYBAG for 24 hours and the daily trading volume is $50,000,000:<br/>
                        <span className="font-mono text-xs text-[#fbbf24]/70">
                          - Your share: 200,000 / 100,000,000 = 0.2%<br/>
                          - Airdrop pool per cycle: ($50,000,000 × 0.008 × 0.25) / 48 ≈ $2,083.33<br/>
                          - Tier Multiplier: 1.1x (Fish)<br/>
                          - Time Multiplier: 1.2x (24h+ holding)<br/>
                          → Airdrop: 2,083.33 × 0.002 × 1.1 × 1.2 ≈ <b className="text-[#fbbf24]">5.50 BUYBAG</b> per cycle<br/>
                          → Daily: 5.50 BUYBAG × 48 cycles = <b className="text-[#fbbf24]">264.00 BUYBAG</b>
                        </span>
                      </div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4 border border-[#fbbf24]/20">
                      <h3 className="text-lg font-semibold text-[#fbbf24] mb-2">Multipliers</h3>
                      <ul className="list-disc list-inside text-white/80 space-y-2 text-sm">
                        <li><b>Tier Multiplier:</b> Shrimp 1x (100k), Fish 1.1x (500k), Crab 1.2x (1M), Dolphin 1.3x (5M), Whale 1.5x (10M)</li>
                        <li><b>Time Multiplier:</b> 24h 1x, 24h+ 1.2x, 3+ days 1.5x, 7+ days 2x</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <a 
                      href="/calculator"
                      className="bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-extrabold px-6 py-2 rounded-lg text-base transition-all flex items-center group border-2 border-black hover:border-[#16a34a] shadow-lg relative overflow-hidden font-sophie"
                      style={{ minWidth: '160px' }}
                    >
                      <span className="relative z-10">Run calculator</span>
                      <ArrowRightCircle className="w-5 h-5 ml-2 text-black group-hover:text-[#16a34a] transition-colors" />
                      <span className="absolute inset-0 rounded-lg pointer-events-none group-hover:animate-gloss" style={{background: 'linear-gradient(120deg,rgba(255,255,255,0.15) 0%,rgba(255,255,255,0.35) 50%,rgba(255,255,255,0.15) 100%)', opacity: 0.7}}></span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Time Multiplier Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-[#16a34a]/20 relative overflow-hidden group hover:border-[#16a34a]/40 transition-all duration-300 flex flex-col min-h-[420px]">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#22c55e]/10 rounded-full flex items-center justify-center text-3xl font-bold text-[#22c55e] transform -rotate-12">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#16a34a] to-[#22c55e] rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="white"/>
                      <path d="M20 8H4C2.9 8 2 8.9 2 10V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V10C22 8.9 21.1 8 20 8Z" fill="white"/>
                      <path d="M12 12C13.1 12 14 12.9 14 14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14C10 12.9 10.9 12 12 12Z" fill="#fbbf24"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#16a34a]/5 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-6 transition-transform">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#16a34a] to-[#22c55e] rounded-full flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="white"/>
                      <path d="M20 8H4C2.9 8 2 8.9 2 10V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V10C22 8.9 21.1 8 20 8Z" fill="white"/>
                      <path d="M12 12C13.1 12 14 12.9 14 14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14C10 12.9 10.9 12 12 12Z" fill="#fbbf24"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#16a34a]/30 via-green-900/20 to-[#22c55e]/30 animate-gradient-slow group-hover:from-[#16a34a]/40 group-hover:to-[#22c55e]/40" />
                <div className="relative z-10 flex-1 flex flex-col">
                  <h2 className="text-2xl font-bold mb-6 text-[#22c55e] mt-8">Time Multipliers</h2>
                  <div className="space-y-4 mb-auto">
                    <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                      <h3 className="text-lg font-semibold text-[#22c55e] mb-2">Time-Based Airdrops</h3>
                      <pre className="text-sm font-mono bg-black/50 p-3 rounded overflow-x-auto">
{`function calculateTimeMultiplier(
  firstSeen: Date,
  currentTime: Date
): number {
  const holdingDays = 
    (currentTime - firstSeen) / (1000 * 60 * 60 * 24);
  
  // Increase multiplier based on holding time
  const timeBonus = Math.min(
    holdingDays * DAILY_BONUS,
    MAX_TIME_MULTIPLIER
  );
  
  return BASE_MULTIPLIER + timeBonus;
}`}
                      </pre>
                      <p className="text-white/70 mt-3 text-sm">
                        Diamond hands get rewarded - hold longer, earn more BUYBAG airdrops.
                      </p>
                    </div>
                    <div className="bg-[#22c55e]/10 rounded-lg p-4 border border-white/10">
                      <h3 className="text-lg font-semibold text-white mb-2">Airdrop Schedule</h3>
                      <ul className="list-disc list-inside text-white/70 space-y-2 text-sm">
                        <li>Base multiplier: 1.0x</li>
                        <li>+0.1x per week held</li>
                        <li>Maximum bonus: 2.5x</li>
                        <li>Continuous tracking</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <a 
                      href="#calculator"
                      className="bg-green-900/40 hover:bg-green-900/60 text-white/70 hover:text-white/90 px-4 py-2 rounded-lg text-sm transition-all flex items-center group font-sophie border-2 border-white/10 hover:border-white/20"
                    >
                      Calculate Airdrops
                      <ArrowRightCircle className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Buyback & Burn System Card */}
            <div className="mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-[#16a34a]/20 relative overflow-hidden group hover:border-[#16a34a]/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#16a34a]/30 via-green-900/20 to-[#22c55e]/30 animate-gradient-slow group-hover:from-[#16a34a]/40 group-hover:to-[#22c55e]/40" />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6 text-[#22c55e]">Automated Buyback & Burn System</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                        <h3 className="text-lg font-semibold text-[#22c55e] mb-2">Buyback & Burn Process</h3>
                        <pre className="text-sm font-mono bg-black/50 p-3 rounded overflow-x-auto">
{`async function processBuybackAndBurn() {
  // Get all token holders from bags.fm
  const holders = await fetchBagsFmHolders();
  const feePool = await getFeePool();

  // 0.8% total raised from trading volume
  const totalRaised = feePool;
  
  // 75% for buyback & burn
  const buybackAmount = totalRaised * 0.75;
  await executeBuybackAndBurn(buybackAmount);

  // 25% for airdrops
  const airdropPool = totalRaised * 0.25;
  
  for (const holder of holders) {
    // Calculate time & tier multipliers
    const timeMultiplier = 
      calculateTimeMultiplier(
        holder.firstSeen,
        new Date()
      );
    
    const tierMultiplier = 
      calculateTierMultiplier(
        holder.balance
      );
    
    // Calculate final airdrop
    const airdrop = 
      (holder.balance / totalEligibleTokens) * 
      airdropPool * 
      timeMultiplier * 
      tierMultiplier;
    
    // Queue airdrop for distribution
    await queueAirdrop(holder.address, airdrop);
  }
}`}
                        </pre>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-[#22c55e]/10 rounded-lg p-4 border border-white/10">
                        <h3 className="text-lg font-semibold text-white mb-2">System Features</h3>
                        <ul className="list-disc list-inside text-white/70 space-y-2">
                          <li>bags.fm API integration</li>
                          <li>30-minute buyback & burn cycles</li>
                          <li>Automatic balance tracking</li>
                          <li>Holding time calculation</li>
                          <li>Fee pool management</li>
                          <li>Transaction verification</li>
                        </ul>
                      </div>
                      <div className="bg-[#22c55e]/10 rounded-lg p-4 border border-white/10">
                        <h3 className="text-lg font-semibold text-white mb-2">Technical Stack</h3>
                        <ul className="list-disc list-inside text-white/70 space-y-2">
                          <li>bags.fm token tracking</li>
                          <li>Node.js buyback system</li>
                          <li>Redis for holder data</li>
                          <li>Automated BUYBAG transfers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 