import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { news } from "@/data/news";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowLeft } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = news.find((n) => n.slug === params.slug);
  if (!article) {
    return {
      title: "Article Not Found",
    };
  }
  return {
    title: `${article.title} | Elite Karate Events News`,
    description: article.excerpt,
  };
}

export async function generateStaticParams() {
  return news.map((article) => ({
    slug: article.slug,
  }));
}

export default function NewsArticlePage({ params }: Props) {
  const article = news.find((n) => n.slug === params.slug);

  if (!article) {
    return (
      <main className="bg-white">
        <Navigation />
        <div className="section-py text-center">
          <p className="text-xl text-black/70">Article not found</p>
          <Link href="/news" className="text-red-primary font-semibold mt-4 inline-block">
            Back to News
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-white">
      <Navigation />

      {/* Hero Section with Image */}
      <section className="relative w-full h-96 md:h-[500px] overflow-hidden bg-gray-200">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </section>

      {/* Article Content */}
      <section className="section-py">
        <div className="section-container section-px max-w-3xl mx-auto">
          {/* Back Button */}
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-red-primary font-semibold mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft size={18} />
            Back to News
          </Link>

          {/* Article Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-red-primary/10 text-red-primary font-semibold text-sm rounded">
                {article.category}
              </span>
              <div className="flex items-center gap-1 text-black/60 text-sm">
                <Calendar size={14} />
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-4">{article.title}</h1>

            {article.author && (
              <p className="text-black/60">By {article.author}</p>
            )}
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {article.content.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="text-black/70 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related Links */}
          <div className="mt-16 pt-8 border-t border-black/10">
            <h3 className="font-black text-lg mb-6">Related News</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {news
                .filter((n) => n.slug !== article.slug && n.category === article.category)
                .slice(0, 2)
                .map((related) => (
                  <Link key={related.id} href={`/news/${related.slug}`} className="card-premium p-6">
                    <p className="text-xs font-semibold text-red-primary uppercase mb-2">
                      {related.category}
                    </p>
                    <h4 className="font-bold text-lg line-clamp-2 hover:text-red-primary transition-colors">
                      {related.title}
                    </h4>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
