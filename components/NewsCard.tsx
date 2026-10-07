import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";

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
      <div className={`card-premium group cursor-pointer ${featured ? "lg:col-span-2" : ""}`}>
        <div className={`${featured ? "lg:flex" : ""} overflow-hidden`}>
          {/* Image */}
          <div className={`relative bg-dark-secondary overflow-hidden ${featured ? "lg:w-1/2 lg:h-80" : "h-56"}`}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes={featured ? "50vw" : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-black/20 to-transparent"></div>
          </div>

          {/* Content */}
          <div className={`p-6 md:p-8 flex flex-col justify-between bg-dark-secondary/50 ${featured ? "lg:w-1/2" : ""}`}>
            <div>
              {/* Badges */}
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-primary/15 border border-red-primary/30 rounded text-xs font-black uppercase tracking-wide text-red-accent">
                  {category}
                </div>
                <div className="flex items-center gap-1.5 text-white/50 text-xs font-black">
                  <Calendar size={12} className="text-red-accent" />
                  {new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                </div>
              </div>

              {/* Title */}
              <h3 className={`font-black ${featured ? "text-2xl" : "text-lg"} line-clamp-2 mb-4 text-white group-hover:text-red-accent transition-colors`}>
                {title}
              </h3>

              {/* Excerpt */}
              <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3">
                {excerpt}
              </p>
            </div>

            {/* Divider */}
            <div className="divider-light mb-4"></div>

            {/* CTA */}
            <div className="flex items-center justify-between group/cta">
              <span className="text-red-accent font-black text-sm group-hover/cta:text-red-primary transition-colors">
                Read
              </span>
              <ArrowRight size={14} className="text-red-accent group-hover/cta:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
