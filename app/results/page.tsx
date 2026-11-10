import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Competition Results | Elite Karate Events",
  description: "Official competition results from Elite Karate Events.",
};

export default function ResultsPage() {
  return (
    <main className="bg-white">
      <Navigation />
      <section className="relative overflow-hidden bg-gradient-hero px-5 pb-16 pt-32 text-center text-white">
        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="text-4xl font-black uppercase sm:text-5xl md:text-6xl">Competition results</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            Official results will be published here when they are available.
          </p>
        </div>
      </section>
      <section className="section-py">
        <div className="section-container section-px text-center">
          <p className="text-black/65">In the meantime, browse reports and photos from our past events.</p>
          <Link href="/past-events" className="btn-primary mt-6 inline-flex">
            VIEW PAST EVENTS
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
