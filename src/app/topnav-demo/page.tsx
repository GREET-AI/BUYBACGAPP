import { TopNavBar } from "@/components/TopNavBar";
import FloatingProofButtonClient from "@/components/FloatingProofButtonClient";

export default function TopNavDemo() {
  return (
    <div className="min-h-screen bg-black">
      <TopNavBar />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-8">Top Navigation Demo</h1>
          <p className="text-white/80 text-lg mb-4">
            Hier siehst du, wie die Top Navigation Bar aussehen würde!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/10 rounded-lg p-6 border border-[#22c55e]/30">
              <h2 className="text-2xl font-bold text-[#22c55e] mb-4">Vorteile</h2>
              <ul className="text-white/80 space-y-2">
                <li>• Mehr Platz für Content</li>
                <li>• Moderner Look</li>
                <li>• Bessere Mobile Experience</li>
                <li>• Timer prominent sichtbar</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-6 border border-[#22c55e]/30">
              <h2 className="text-2xl font-bold text-[#22c55e] mb-4">Navigation</h2>
              <ul className="text-white/80 space-y-2">
                <li>• BUYBACG Token</li>
                <li>• BUYBACG Mechanics</li>
                <li>• BUYBACG Rewards</li>
                <li>• BUYBACG TIME!</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <FloatingProofButtonClient />
    </div>
  );
} 