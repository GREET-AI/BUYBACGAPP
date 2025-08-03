"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRightCircle, ChevronDown, ChevronUp, Shield } from 'lucide-react';

interface FloatingNumber {
  id: number;
  value: string;
  left: string;
  top: string;
  delay: string;
  color: string;
}

interface FloatingLogo {
  id: number;
  left: string;
  top: string;
  delay: string;
  scale: string;
  opacity: string;
}

const SmallBagIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8C6 6.89543 6.89543 6 8 6H16C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18H8C6.89543 18 6 17.1046 6 16V8Z" fill="#22c55e"/>
    <path d="M8 4C7.44772 4 7 4.44772 7 5V7H17V5C17 4.44772 16.5523 4 16 4H8Z" fill="#22c55e"/>
    <text x="12" y="13" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">$</text>
  </svg>
);

const MediumBagIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8C6 6.89543 6.89543 6 8 6H16C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18H8C6.89543 18 6 17.1046 6 16V8Z" fill="#fbbf24"/>
    <path d="M8 4C7.44772 4 7 4.44772 7 5V7H17V5C17 4.44772 16.5523 4 16 4H8Z" fill="#fbbf24"/>
    <text x="12" y="13" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">$$</text>
  </svg>
);

const LargeBagIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8C6 6.89543 6.89543 6 8 6H16C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18H8C6.89543 18 6 17.1046 6 16V8Z" fill="#ef4444"/>
    <path d="M8 4C7.44772 4 7 4.44772 7 5V7H17V5C17 4.44772 16.5523 4 16 4H8Z" fill="#ef4444"/>
    <text x="12" y="13" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">$$$</text>
  </svg>
);

const PremiumBagIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8C6 6.89543 6.89543 6 8 6H16C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18H8C6.89543 18 6 17.1046 6 16V8Z" fill="#8b5cf6"/>
    <path d="M8 4C7.44772 4 7 4.44772 7 5V7H17V5C17 4.44772 16.5523 4 16 4H8Z" fill="#8b5cf6"/>
    <text x="12" y="13" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">$$$$</text>
  </svg>
);

const EliteBagIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8C6 6.89543 6.89543 6 8 6H16C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18H8C6.89543 18 6 17.1046 6 16V8Z" fill="#f59e0b"/>
    <path d="M8 4C7.44772 4 7 4.44772 7 5V7H17V5C17 4.44772 16.5523 4 16 4H8Z" fill="#f59e0b"/>
    <text x="12" y="13" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">$$$$$</text>
  </svg>
);

const TimeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2" fill="none"/>
    <path d="M12 6V12L16 14" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default function HowItWorks() {
  const [floatingNumbers, setFloatingNumbers] = useState<FloatingNumber[]>([]);
  const [floatingLogos, setFloatingLogos] = useState<FloatingLogo[]>([]);
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string; color: string; size: string }>>([]);
  const [shootingStars, setShootingStars] = useState<Array<{ left: string; delay: string }>>([]);
  const [isRevolutionExpanded, setIsRevolutionExpanded] = useState(false);

  const generateRandomTime = () => {
    const minutes = Math.floor(Math.random() * 30);
    const seconds = Math.floor(Math.random() * 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const getRandomBuyBagColor = () => {
    return Math.random() > 0.5 ? '#16a34a' : '#22c55e';
  };

  useEffect(() => {
    // Generate particles (sparkles)
    const newParticles = Array.from({ length: 50 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      color: Math.random() > 0.5 ? '#16a34a' : '#22c55e',
      size: `${Math.random() * 3 + 2}px`
    }));
    setParticles(newParticles);

    // Generate shooting stars
    const newShootingStars = Array.from({ length: 8 }, () => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`
    }));
    setShootingStars(newShootingStars);

    // Generate initial logos for immediate visual impact
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        const initialLogo = {
          id: Date.now() + i + Math.random(),
          left: `${Math.random() * 90 + 5}%`,
          top: `${Math.random() * 90 + 5}%`,
          delay: `${Math.random() * 2}s`,
          scale: `${Math.random() * 0.8 + 0.3}`,
          opacity: `${Math.random() * 0.4 + 0.2}`
        };
        setFloatingLogos(prev => [...prev, initialLogo]);
      }, i * 200);
    }

    // Floating numbers logic
    const generateNumber = () => {
      const newNumber = {
        id: Date.now(),
        value: generateRandomTime(),
        left: `${Math.random() * 90 + 5}%`,
        top: `${Math.random() * 90 + 5}%`,
        delay: `${Math.random() * 2}s`,
        color: getRandomBuyBagColor()
      };

      setFloatingNumbers(prev => [...prev, newNumber]);

      setTimeout(() => {
        setFloatingNumbers(prev => prev.filter(num => num.id !== newNumber.id));
      }, 3000);
    };

    // Floating Solana logos logic
    const generateLogo = () => {
      const newLogo = {
        id: Date.now() + Math.random(),
        left: `${Math.random() * 90 + 5}%`,
        top: `${Math.random() * 90 + 5}%`,
        delay: `${Math.random() * 2}s`,
        scale: `${Math.random() * 0.8 + 0.3}`,
        opacity: `${Math.random() * 0.4 + 0.2}`
      };

      setFloatingLogos(prev => [...prev, newLogo]);

      setTimeout(() => {
        setFloatingLogos(prev => prev.filter(logo => logo.id !== newLogo.id));
      }, 8000);
    };

    // Generate new numbers and logos periodically
    const numberInterval = setInterval(generateNumber, 2000);
    const logoInterval = setInterval(generateLogo, 1500);

    return () => {
      clearInterval(numberInterval);
      clearInterval(logoInterval);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated BuyBag gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#16a34a]/20 via-green-900/10 to-[#22c55e]/20 animate-gradient-slow" />
      
      {/* Content wrapper with particles */}
      <div className="relative z-10">
        {/* Floating Numbers */}
        {floatingNumbers.map((number) => (
          <div
            key={number.id}
            className="absolute animate-float-number font-bags text-lg"
            style={{
              left: number.left,
              top: number.top,
              animationDelay: number.delay,
              color: number.color,
              opacity: 0.4
            }}
          >
            {number.value}
          </div>
        ))}

        {/* Floating BUYBACG Logos */}
        {floatingLogos.map((logo) => (
          <div
            key={logo.id}
            className="absolute animate-float-logo"
            style={{
              left: logo.left,
              top: logo.top,
              animationDelay: logo.delay,
              transform: `scale(${logo.scale})`,
              opacity: logo.opacity
            }}
          >
            <Image 
              src="/BUYBACG.png" 
              alt="BUYBACG Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8 object-contain"
            />
          </div>
        ))}

        {/* Particles & Shooting Stars */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {particles.map((particle, i) => (
            <div
              key={`particle-${i}`}
              className="absolute animate-sparkle"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                width: particle.size,
                height: particle.size,
                background: particle.color,
                borderRadius: '50%',
                opacity: 0.6
              }}
            />
          ))}
          {shootingStars.map((star, i) => (
            <div
              key={`star-${i}`}
              className="absolute animate-shooting-star"
              style={{
                left: star.left,
                top: '-2px',
                animationDelay: star.delay,
                width: '2px',
                height: '2px',
                background: 'linear-gradient(90deg, #22c55e, transparent)',
                borderRadius: '50%',
                boxShadow: '0 0 0 1px #22c55e44'
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <div className="pt-20 px-6">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div className="absolute inset-[-30%] bg-gradient-to-r from-[#16a34a]/40 via-green-500/20 to-[#22c55e]/40 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-32 h-32 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/BUYBACG.gif"
                  alt="BuyBag Logo"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl font-bold tracking-tight relative">
                <span className="relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#16a34a]/20 to-[#22c55e]/20 blur-lg opacity-30" />
                  <span className="relative buybag-gradient-text">
                    Welcome to BUYBACG!
                  </span>
                </span>
              </h1>
              
              <p className="text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-medium">
                In the BUYBACG community, every trade counts—because buyback & burn is the currency of growth.
              </p>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        {/* The BUYBACG Revolution - Collapsible */}
        <div className="px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#16a34a]/20 via-[#22c55e]/10 to-[#15803d]/20 backdrop-blur-sm rounded-2xl border border-[#22c55e]/30 relative overflow-hidden group hover:border-[#22c55e]/50 transition-all duration-300 mb-20">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-full flex items-center justify-center text-2xl font-bold text-white transform -rotate-12 shadow-lg">
                🚀
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#16a34a]/20 to-[#22c55e]/20 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-6 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-full flex items-center justify-center shadow-lg">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="white"/>
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#16a34a]/10 via-transparent to-[#22c55e]/10 animate-pulse opacity-30" />
              
              {/* Header - Always Visible */}
              <div className="relative z-10 p-8">
                <h2 className="text-3xl font-bold text-white bg-gradient-to-r from-[#22c55e] to-[#16a34a] bg-clip-text text-transparent">The BUYBACG Revolution</h2>
                
                {/* Short Description - Always Visible */}
                <p className="text-white/80 text-lg mt-4">
                  <span className="font-bold text-[#22c55e]">UNLIMITED HOLDER GROWTH</span> through the most aggressive buyback machine in crypto history.
                </p>
                
                {/* Call-to-Action Bullet Points - Always Visible */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#22c55e] rounded-full"></div>
                    <span className="text-white/90 font-medium">🚀 <span className="text-[#22c55e] font-bold">75%</span> of all fees go to buyback & burn</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#d97706] rounded-full"></div>
                    <span className="text-white/90 font-medium">💰 <span className="text-[#d97706] font-bold">25%</span> distributed as airdrops to holders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#22c55e] rounded-full"></div>
                    <span className="text-white/90 font-medium">⚡ Buybacks every <span className="text-[#22c55e] font-bold">30 minutes</span> - 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#d97706] rounded-full"></div>
                    <span className="text-white/90 font-medium">🎯 <span className="text-[#d97706] font-bold">0.8%</span> fee on all trades fuels the machine</span>
                  </div>
                </div>
                
                {/* Learn More Button - Bottom Right */}
                <div className="flex justify-end mt-6">
                  <button 
                    onClick={() => setIsRevolutionExpanded(!isRevolutionExpanded)}
                    className="flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold px-4 py-2 rounded-lg transition-all border border-[#22c55e] hover:border-[#16a34a] shadow-lg"
                  >
                    <span className="text-sm">{isRevolutionExpanded ? 'Show Less' : 'Learn More'}</span>
                    {isRevolutionExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Expanded Content */}
              {isRevolutionExpanded && (
                <div className="relative z-10 px-8 pb-8 border-t border-[#22c55e]/20">
                  <div className="text-white/90 text-lg leading-relaxed space-y-4 mt-6">
                    <p>While other projects focus on charity donations and developer profits, <span className="font-bold text-[#22c55e]">BUYBACG is built for ONE purpose only: UNLIMITED HOLDER GROWTH</span>.</p>
                    <p>We&apos;re not here to save the world or fund developers. We&apos;re here to create the <span className="font-bold text-[#d97706]">MOST AGGRESSIVE BUYBACK MACHINE</span> in crypto history.</p>
                    <p>Every trade, every volume, every fee goes directly back to <span className="font-bold text-[#22c55e]">YOU</span> - the holders who generate the volume. No middlemen, no charity, no developer wallets.</p>
                    <p>Our mission: <span className="font-bold text-[#d97706]">INFINITE BUYBACKS</span> until the end of this bull run and beyond. We&apos;re claiming the title of the coin with the most buybacks in crypto history.</p>
                    
                    <div className="bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-lg p-4 mt-4">
                      <h3 className="font-bold text-[#22c55e] text-lg mb-2">🚀 Fair Launch Strategy</h3>
                      <p className="text-white/80 text-sm mb-3">We&apos;re launching with <span className="font-bold text-[#d97706]">5 SOL buy-in</span> to prevent snipers and ensure a healthy, organic chart growth. No pump and dump, no manipulation - just pure, sustainable growth.</p>
                      <p className="text-white/80 text-sm">Our <span className="font-bold text-[#22c55e]">strategic burn schedule</span> starts at 50k MC and continues at moderate intervals, ensuring supply reduction while maintaining price stability.</p>
                    </div>

                    <div className="bg-[#d97706]/10 border border-[#d97706]/30 rounded-lg p-4">
                      <h3 className="font-bold text-[#d97706] text-lg mb-2">🛡️ Anti-Rug Protection</h3>
                      <p className="text-white/80 text-sm mb-3">We&apos;ve designed BUYBACG to be <span className="font-bold text-[#22c55e]">impossible to rug</span>. No single entity can control enough supply to manipulate the market. Traders can take profits, but no one can destroy the project.</p>
                      <p className="text-white/80 text-sm">This creates a <span className="font-bold text-[#d97706]">viral, organic ecosystem</span> where success breeds success, and every holder benefits from the collective growth.</p>
                    </div>

                    <div className="bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-lg p-4">
                      <p className="text-center font-bold text-[#22c55e] text-xl">🎯 CHALLENGE ACCEPTED 🎯</p>
                      <p className="text-center text-white/70 text-sm mt-2">Building the future of fair, sustainable crypto growth</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Three-Step Guide Cards */}
        <div className="px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8 md:grid-cols-3 relative">
              {/* Connection Lines */}
              <div className="absolute top-1/2 left-0 w-full hidden md:block">
                <div className="h-0.5 bg-gradient-to-r from-[#22c55e]/20 to-[#22c55e]/20 w-full"></div>
              </div>

              {/* Step 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-[#16a34a]/20 relative overflow-hidden group hover:border-[#16a34a]/40 transition-all duration-300 flex flex-col min-h-[320px]">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#22c55e]/10 rounded-full flex items-center justify-center text-3xl font-bold text-[#22c55e] transform -rotate-12">
                  1
                </div>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#16a34a]/5 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-6 transition-transform">
                  <Image
                    src="/phantom.png"
                    alt="Phantom"
                    width={48}
                    height={48}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#16a34a]/30 via-green-900/20 to-[#22c55e]/30 animate-gradient-slow group-hover:from-[#16a34a]/40 group-hover:to-[#22c55e]/40" />
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-6 text-[#22c55e] mt-8">Connect Your Wallet</h3>
                  <ul className="space-y-3 text-white/80 text-sm mb-auto">
                    <li className="flex items-start">
                      <ArrowRightCircle className="w-4 h-4 mr-2 mt-0.5 text-[#22c55e]" />
                      <span>Create Phantom or Solflare wallet</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightCircle className="w-4 h-4 mr-2 mt-0.5 text-[#22c55e]" />
                      <span>Save seed phrase securely</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightCircle className="w-4 h-4 mr-2 mt-0.5 text-[#22c55e]" />
                      <span>Ready to buy BUYBACG tokens</span>
                    </li>
                  </ul>
                  <div className="flex justify-end mt-4">
                    <a 
                      href="https://phantom.com"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="bg-green-900/40 hover:bg-green-900/60 text-white/70 hover:text-white/90 px-4 py-2 rounded-lg text-sm transition-all flex items-center group font-bags border-2 border-white/10 hover:border-white/20"
                    >
                      Download
                      <ArrowRightCircle className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-[#16a34a]/20 relative overflow-hidden group hover:border-[#16a34a]/40 transition-all duration-300 flex flex-col min-h-[320px]">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#22c55e]/10 rounded-full flex items-center justify-center text-3xl font-bold text-[#22c55e] transform -rotate-12">
                  2
                </div>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#16a34a]/5 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-6 transition-transform">
                  <Image
                    src="/solana.png"
                    alt="Solana"
                    width={48}
                    height={48}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#16a34a]/30 via-green-900/20 to-[#22c55e]/30 animate-gradient-slow group-hover:from-[#16a34a]/40 group-hover:to-[#22c55e]/40" />
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-6 text-[#22c55e] mt-8">Buy Solana</h3>
                  <ul className="space-y-3 text-white/80 text-sm mb-auto">
                    <li className="flex items-start">
                      <ArrowRightCircle className="w-4 h-4 mr-2 mt-0.5 text-[#22c55e]" />
                      <span>Buy SOL on major exchanges</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightCircle className="w-4 h-4 mr-2 mt-0.5 text-[#22c55e]" />
                      <span>Or swap via Jupiter (jup.ag)</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightCircle className="w-4 h-4 mr-2 mt-0.5 text-[#22c55e]" />
                      <span>We recommend buying 1-5 SOL to get started and cover fees.</span>
                    </li>
                  </ul>
                  <div className="flex justify-end mt-4">
                    <a 
                      href="https://jup.ag"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="bg-green-900/40 hover:bg-green-900/60 text-white/70 hover:text-white/90 px-4 py-2 rounded-lg text-sm transition-all flex items-center group font-bags border-2 border-white/10 hover:border-white/20"
                    >
                      Trade
                      <ArrowRightCircle className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-[#16a34a]/20 relative overflow-hidden group hover:border-[#16a34a]/40 transition-all duration-300 flex flex-col min-h-[320px]">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#22c55e]/10 rounded-full flex items-center justify-center text-3xl font-bold text-[#22c55e] transform -rotate-12">
                  3
                </div>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#16a34a]/5 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-6 transition-transform">
                  <Image
                    src="/BUYBACG.png"
                    alt="BuyBag Logo"
                    width={48}
                    height={48}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#16a34a]/30 via-green-900/20 to-[#22c55e]/30 animate-gradient-slow group-hover:from-[#16a34a]/40 group-hover:to-[#22c55e]/40" />
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-6 text-[#22c55e] mt-8">Buy on bags.fm</h3>
                  <ul className="space-y-3 text-white/80 text-sm mb-auto">
                    <li className="flex items-start">
                      <ArrowRightCircle className="w-4 h-4 mr-2 mt-0.5 text-[#22c55e]" />
                      <span>Visit bags.fm</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightCircle className="w-4 h-4 mr-2 mt-0.5 text-[#22c55e]" />
                      <span>Connect your wallet</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRightCircle className="w-4 h-4 mr-2 mt-0.5 text-[#22c55e]" />
                      <span>Buy BUYBACG tokens</span>
                    </li>
                  </ul>
                  <div className="flex justify-end mt-4">
                    <a 
                      href="https://bags.fm"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="bg-green-900/40 hover:bg-green-900/60 text-white/70 hover:text-white/90 px-4 py-2 rounded-lg text-sm transition-all flex items-center group font-bags border-2 border-white/10 hover:border-white/20"
                    >
                      Trade
                      <ArrowRightCircle className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Then you start earning... text */}
            <div className="text-center mt-12 mb-8">
              <div className="inline-block bg-[#16a34a]/10 rounded-lg px-6 py-3">
                <p className="text-xl text-white/90">Then you start earning...</p>
              </div>
            </div>

            

            {/* Tokenomics Breakdown */}
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              {/* Volume Mechanics */}
              <div className="bg-gradient-to-br from-[#16a34a]/15 via-[#22c55e]/10 to-[#15803d]/15 backdrop-blur-sm rounded-xl p-6 border border-[#22c55e]/25 relative overflow-hidden group hover:border-[#22c55e]/40 transition-all duration-300">
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-full flex items-center justify-center text-lg font-bold text-white transform -rotate-12 shadow-lg">
                  📈
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-[#22c55e]">Volume Mechanics</h3>
                  <div className="space-y-3 text-white/80 text-sm">
                    <div className="bg-white/5 rounded-lg p-3">
                      <p><span className="font-bold text-[#22c55e]">0.8% Total Raised</span> from every bags.fm trade</p>
                    </div>
                                         <div className="bg-white/5 rounded-lg p-3">
                       <p><span className="font-bold text-[#d97706]">75% → Buyback & Burn</span> - Directly reduces supply</p>
                     </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p><span className="font-bold text-[#22c55e]">25% → Holder Airdrops</span> - Distributed to all holders</p>
                    </div>
                    <div className="bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-lg p-3">
                      <p className="text-center font-bold text-[#22c55e]">Every 30 minutes • 48 cycles per day</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Holder Rewards */}
              <div className="bg-gradient-to-br from-[#16a34a]/15 via-[#22c55e]/10 to-[#15803d]/15 backdrop-blur-sm rounded-xl p-6 border border-[#22c55e]/25 relative overflow-hidden group hover:border-[#22c55e]/40 transition-all duration-300">
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-full flex items-center justify-center text-lg font-bold text-white transform -rotate-12 shadow-lg">
                  💎
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-[#22c55e]">Holder Rewards</h3>
                  <div className="space-y-3 text-white/80 text-sm">
                    <div className="bg-white/5 rounded-lg p-3">
                      <p><span className="font-bold text-[#22c55e]">Minimum:</span> 100,000 BUYBACG for 24h+</p>
                    </div>
                                         <div className="bg-white/5 rounded-lg p-3">
                       <p><span className="font-bold text-[#d97706]">Formula:</span> (Your Share × Airdrop Pool × Tier × Time)</p>
                     </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p><span className="font-bold text-[#22c55e]">Live Updates:</span> Real-time +BUYBACG popups</p>
                    </div>
                    <div className="bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-lg p-3">
                      <p className="text-center font-bold text-[#22c55e]">The longer you hold, the more you earn</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Multiplier System */}
            <div className="mt-8 bg-gradient-to-br from-[#16a34a]/15 via-[#22c55e]/10 to-[#15803d]/15 backdrop-blur-sm rounded-xl p-6 border border-[#22c55e]/25 relative overflow-hidden group hover:border-[#22c55e]/40 transition-all duration-300">
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-full flex items-center justify-center text-lg font-bold text-white transform -rotate-12 shadow-lg">
                ⚡
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 text-[#22c55e]">Multiplier System</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-white mb-3">Tier Multipliers</h4>
                    <div className="flex gap-2 flex-wrap">
                      <span className="flex items-center gap-1 bg-[#16a34a]/10 border border-[#16a34a]/30 rounded-full px-3 py-1 text-xs text-[#16a34a] font-medium"><SmallBagIcon />Starter 1x</span>
                      <span className="flex items-center gap-1 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full px-3 py-1 text-xs text-[#22c55e] font-medium"><MediumBagIcon />Collector 1.1x</span>
                      <span className="flex items-center gap-1 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full px-3 py-1 text-xs text-[#22c55e] font-medium"><LargeBagIcon />Investor 1.2x</span>
                      <span className="flex items-center gap-1 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full px-3 py-1 text-xs text-[#22c55e] font-medium"><PremiumBagIcon />Premium 1.3x</span>
                      <span className="flex items-center gap-1 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full px-3 py-1 text-xs text-[#22c55e] font-medium"><EliteBagIcon />Elite 1.5x</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-3">Time Multipliers</h4>
                    <div className="flex gap-2 flex-wrap">
                      <span className="flex items-center gap-1 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full px-3 py-1 text-xs text-white font-medium"><TimeIcon />24h 1x</span>
                      <span className="flex items-center gap-1 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full px-3 py-1 text-xs text-white font-medium"><TimeIcon />24h+ 1.2x</span>
                      <span className="flex items-center gap-1 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full px-3 py-1 text-xs text-white font-medium"><TimeIcon />3d+ 1.5x</span>
                      <span className="flex items-center gap-1 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full px-3 py-1 text-xs text-white font-medium"><TimeIcon />7d+ 2x</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculate Rewards Button */}
            <div className="mt-8 flex justify-center">
              <a 
                href="/buybacg-mechanics"
                className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold px-8 py-3 rounded-lg text-lg transition-all flex items-center group border-2 border-[#22c55e] hover:border-[#16a34a] shadow-lg relative overflow-hidden font-bags"
                style={{ minWidth: '200px' }}
              >
                <span className="relative z-10">Understand the BUYBACG Mechanics</span>
                <ArrowRightCircle className="w-6 h-6 ml-3 text-white group-hover:scale-110 transition-transform" />
                <span className="absolute inset-0 rounded-lg pointer-events-none group-hover:animate-gloss" style={{background: 'linear-gradient(120deg,rgba(255,255,255,0.15) 0%,rgba(255,255,255,0.35) 50%,rgba(255,255,255,0.15) 100%)', opacity: 0.7}}></span>
              </a>
            </div>

            {/* Security Notice Card */}
            <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-[#16a34a]/20 relative overflow-hidden group hover:border-[#16a34a]/40 transition-all duration-300 flex flex-col min-h-[320px]">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#22c55e]/10 rounded-full flex items-center justify-center text-3xl font-bold text-[#22c55e] transform -rotate-12">
                <Shield className="w-8 h-8 text-[#22c55e]" />
              </div>
              <div className="absolute -top-20 -right-8 w-80 h-80 bg-[#16a34a]/5 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-6 transition-transform">
                <Image
                  src="/proof.png"
                  alt="Proof"
                  width={280}
                  height={280}
                  className="w-72 h-72 object-contain scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#16a34a]/30 via-green-900/20 to-[#22c55e]/30 animate-gradient-slow group-hover:from-[#16a34a]/40 group-hover:to-[#22c55e]/40" />
              <div className="relative z-10 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold mb-6 text-[#22c55e] mt-8">Security Notice</h2>
                <div className="max-w-[400px]">
                  <div className="bg-[#22c55e]/10 rounded-lg p-4 border border-white/10 mb-4">
                    <p className="text-white/80">Only buy tokens using the official address announced on <a href="https://x.com/BUYBACG" target="_blank" rel="noopener noreferrer" className="text-[#22c55e] hover:text-[#22c55e]/80">@BUYBACG</a>. Beware of fake tokens and always verify the contract address!</p>
                  </div>
                </div>
                <div className="flex justify-end mt-auto">
                  <a 
                    href="https://x.com/i/communities/1951990625445753063"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-900/40 hover:bg-green-900/60 text-white/70 hover:text-white/90 px-4 py-2 rounded-lg text-sm transition-all flex items-center group font-bags border-2 border-white/10 hover:border-white/20"
                  >
                    Visit X Community
                    <ArrowRightCircle className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 