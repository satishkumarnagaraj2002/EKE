import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Instagram } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { instagramPosts } from "@/data/instagram";

export const metadata: Metadata = {
  title: "Gallery | Elite Karate Events",
  description: "Recent tournament artwork and moments from the Elite Karate Events Instagram.",
};

export default function GalleryPage() {
  return (
    <main className="bg-white">
      <Navigation />

      <section className="relative overflow-hidden bg-[#080a0f] pt-28 text-white md:pt-36">
        <div className="pointer-events-none absolute inset-0 opacity-60" style={{ backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 38px), repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 38px)" }} />
        <div className="section-container section-px relative z-10 grid items-center gap-10 pb-16 md:pb-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="mb-5 inline-flex items-center gap-2 border-l-2 border-[#f02732] bg-white/[0.05] px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
              <Instagram size={15} /> The latest from Elite Karate Events
            </p>
            <h1 className="text-5xl font-black uppercase leading-[0.92] text-white md:text-7xl">The moments<br /><span className="text-[#f02732]">that move us.</span></h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65 md:text-lg">
              Campaigns, medals, and milestones from the road to the 10th Elite Open International Karate Grand Prix.
            </p>
            <a href="https://www.instagram.com/elitekarateevents.uk/" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center gap-3 border border-white/25 px-5 py-3 font-display text-xs font-bold uppercase tracking-wider transition-colors hover:border-[#f02732] hover:bg-[#d71920]">
              <Instagram size={17} /> Follow the official account <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="relative aspect-[1.45] overflow-hidden border border-white/15 bg-[#11151d] shadow-[0_28px_80px_rgba(0,0,0,0.45)]">
            <Image src={instagramPosts[0].image} alt={instagramPosts[0].alt} fill priority className="object-cover transition-transform duration-700 hover:scale-[1.02]" sizes="(max-width: 1024px) 100vw, 58vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 border border-white/30 bg-black/45 px-3 py-2 font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm md:bottom-6 md:left-6">10th Elite Open · Crawley, England</span>
          </div>
        </div>
      </section>

      <section className="section-py bg-[#f4f2ee]">
        <div className="section-container section-px">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-label">RECENT POSTS</p>
              <h2 className="section-title">From the feed</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#565960]">Every image opens its original post on Instagram.</p>
          </div>
          <div className="grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
            {instagramPosts.map((post) => (
              <article key={post.id} className="group">
                <a href={post.postUrl} target="_blank" rel="noopener noreferrer" aria-label={`${post.caption}, view Instagram post`} className="relative block aspect-square overflow-hidden border border-black/10 bg-[#080a0f]">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    className={`${post.fit === "contain" ? "object-contain p-3" : "object-cover"} transition-transform duration-700 group-hover:scale-[1.04]`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
                  <span className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center border border-white/35 bg-black/40 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
                <div className="flex items-start justify-between gap-3 border-b border-black/15 py-4">
                  <div>
                    <p className="font-display text-[10px] font-semibold uppercase tracking-[0.16em] text-[#777a80]">{post.date}</p>
                    <h3 className="mt-2 font-display text-lg font-bold uppercase leading-tight text-[#17191d]">{post.caption}</h3>
                  </div>
                  <Instagram size={17} className="mt-1 shrink-0 text-[#d71920]" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
          <div className="mt-16 border-t border-black/15 pt-8 text-center">
            <a href="https://www.instagram.com/elitekarateevents.uk/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              MORE ON INSTAGRAM <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
