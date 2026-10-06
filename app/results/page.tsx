import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { results } from "@/data/results";
import { Trophy, Filter } from "lucide-react";

export const metadata: Metadata = {
  title: "Results | Elite Karate Events",
  description: "Competition results from Elite Karate Events. View medals, champion results, and athlete achievements.",
};

export default function ResultsPage() {
  // Group results by competition
  const groupedResults = results.reduce(
    (acc, result) => {
      if (!acc[result.competitionName]) {
        acc[result.competitionName] = [];
      }
      acc[result.competitionName].push(result);
      return acc;
    },
    {} as Record<string, typeof results>
  );

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
            Competition Results
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Browse results from past Elite Karate Events championships and competitions.
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-py bg-bg-light">
        <div className="section-container section-px">
          <div className="mb-12">
            <h2 className="section-heading mb-4">Latest Results</h2>
          </div>

          {Object.entries(groupedResults).map(([competitionName, competitionResults]) => (
            <div key={competitionName} className="mb-12">
              <h3 className="text-2xl font-black mb-6 text-black">{competitionName}</h3>

              <div className="space-y-4">
                {competitionResults.map((result) => (
                  <div
                    key={result.id}
                    className="card-premium p-6 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      {/* Position Badge */}
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center font-black text-lg text-white ${
                          result.position === 1
                            ? "bg-gold-primary"
                            : result.position === 2
                              ? "bg-gray-400"
                              : "bg-orange-600"
                        }`}
                      >
                        {result.position === 1 ? "🥇" : result.position === 2 ? "🥈" : "🥉"}
                      </div>

                      <div className="flex-1">
                        <p className="font-bold text-lg">{result.athleteName}</p>
                        <div className="text-sm text-black/60">
                          <p>{result.categoryName}</p>
                          <p>{result.country} • {result.discipline}</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold text-red-primary">
                        {result.position === 1 ? "Gold" : result.position === 2 ? "Silver" : "Bronze"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
