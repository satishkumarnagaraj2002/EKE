import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AthleteCard } from "@/components/AthleteCard";
import { athletes } from "@/data/athletes";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Athletes | Elite Karate Events",
  description: "Meet the world-class karate athletes competing at Elite Karate Events. Showcase of elite performers from around the globe.",
};

export default function AthletesPage() {
  return (
    <main className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero min-h-[60vh] flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-96 -top-96 h-[600px] w-[600px] rounded-full bg-red/20 blur-3xl opacity-20" style={{background: "linear-gradient(135deg, #8B0000 0%, #C1121F 100%)"}}></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 w-full py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-black uppercase text-white mb-6">
            Elite Athletes
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Meet the world-class karate athletes competing at the highest level.
          </p>
        </div>
      </section>

      {/* Athletes Grid */}
      <section className="section-py">
        <div className="section-container section-px">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {athletes.map((athlete) => (
              <AthleteCard
                key={athlete.id}
                slug={athlete.slug}
                name={athlete.name}
                country={athlete.country}
                dojo={athlete.dojo}
                discipline={athlete.discipline}
                image={athlete.image}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
