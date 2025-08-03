"use client";
import { useState } from "react";
import Image from "next/image";
import ProofModal from "@/components/ProofModal";
import ProofContent from "@/app/rewards-proof/ProofContent";

export default function FloatingProofButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="fixed z-50 bottom-6 right-6 bg-black shadow-xl rounded-full w-16 h-16 flex items-center justify-center animate-bounce hover:scale-110 transition-transform duration-200 border-4 border-[#22c55e] hover:border-[#16a34a]"
        aria-label="Show Buyback Proof"
        style={{ boxShadow: "0 4px 32px 0 #22c55e55" }}
        onClick={() => setOpen(true)}
      >
        <Image
          src="/BUYBACG.png"
          alt="BUYBACG Logo"
          width={32}
          height={32}
          className="w-8 h-8 object-contain drop-shadow-lg"
        />
      </button>
      <ProofModal open={open} onClose={() => setOpen(false)}>
        <ProofContent />
      </ProofModal>
    </>
  );
} 