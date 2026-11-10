import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { athletes } from "@/data/athletes";

export const metadata: Metadata = {
  title: "Featured Athletes | Elite Karate Events",
  description: "Meet the athletes featured on the Shito Ryu England squad training poster.",
};

export default function AthletesPage() {
  return (
    <main className="bg-white">
      <Navigation />
      <section className="bg-dark-primary px-5 pb-12 pt-32 text-white md:px-8 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-red-accent">Shito Ryu England</p>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase sm:text-5xl">Featured athletes</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            These athlete details are taken from the squad training and selections poster.
          </p>
        </div>
      </section>

      <section className="section-py">
        <div className="section-container section-px">
          <div className="mx-auto mb-12 max-w-3xl overflow-hidden border border-black/10 bg-dark-primary shadow-xl">
            <Image
              src="/Sqad.jpeg"
              alt="Shito Ryu England Open Kata and Kumite squad training and selections poster"
              width={1122}
              height={1400}
              className="h-auto w-full"
              priority
            />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {athletes.map((athlete) => (
              <article key={athlete.id} className="border border-black/10 bg-white p-6 shadow-sm">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-red-primary">
                  {athlete.country} / {athlete.discipline}
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold uppercase text-dark-primary">{athlete.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-black/60">{athlete.category}</p>
                <Link
                  href={`/athletes/${athlete.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-red-primary"
                >
                  Athlete details <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
