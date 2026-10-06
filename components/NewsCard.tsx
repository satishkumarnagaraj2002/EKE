import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Zap } from "lucide-react";

interface NewsCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  featured?: boolean;
}

export function NewsCard({
  slug,
  title,
  excerpt,
  image,
  category,
  date,
  featured = false,
}: NewsCardProps) {
  return (
    <Link href={`/news/${slug}`}>
      <div className={`card-premium group cursor-pointer relative overflow-hidden ${featured ? "md:col-span-2" : ""}`}>
        {/* Border Glow on Hover */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-dark via-red-primary to-gold-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur -z-10"></div>

        <div className={`${featured ? "md:flex" : ""} overflow-hidden`}>
          {/* Image */}
          <div className={`relative bg-gradient-to-br from-gray-400 to-gray-500 overflow-hidden ${featured ? "md:w-1/2 md:h-96" : "h-56 md:h-64"}`}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes={featured ? "50vw" : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"}
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-100 group-hover:from-black/30 transition-all duration-500"></div>

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
          </div>

          {/* Content */}
          <div className={`p-6 md:p-8 flex flex-col justify-between bg-white/90 ${featured ? "md:w-1/2" : ""}`}>
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-primary/15 border border-red-primary/40 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-red-primary"></span>
                  <span className="font-black text-red-primary text-xs uppercase tracking-wide">{category}</span>
                </div>

                {/* Date Badge */}
                <div className="flex items-center gap-1.5 text-black/50 text-xs font-semibold bg-black/5 px-3 py-1.5 rounded-full">
                  <Calendar size={12} className="text-red-primary" />
                  {new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                </div>
              </div>

              {/* Title */}
              <h3 className={`font-black ${featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"} line-clamp-2 mb-4 group-hover:text-red-primary transition-colors`}>
                {title}
              </h3>

              {/* Excerpt */}
              <p className="text-black/60 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-black/70 transition-colors">
                {excerpt}
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-red-primary/0 via-red-primary/30 to-red-primary/0 mb-4"></div>

            {/* CTA */}
            <div className="flex items-center justify-between group/cta">
              <div className="flex items-center gap-2">
                <Zap size={14} className="text-red-primary" />
                <span className="text-red-primary font-black text-sm group-hover/cta:text-red-bright transition-colors">
                  Read Article
                </span>
              </div>
              <ArrowRight size={16} className="text-red-primary group-hover/cta:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
