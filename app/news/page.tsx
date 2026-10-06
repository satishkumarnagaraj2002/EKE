import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { NewsCard } from "@/components/NewsCard";
import { news } from "@/data/news";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "News | Elite Karate Events",
  description: "Latest news and updates from Elite Karate Events. Competition results, athlete interviews, and event announcements.",
};

export default function NewsPage() {
  const allNews = [...news].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
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
            News & Updates
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Stay updated with the latest from Elite Karate Events.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-py">
        <div className="section-container section-px">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.map((article) => (
              <NewsCard
                key={article.id}
                slug={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                image={article.image}
                category={article.category}
                date={article.date}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
