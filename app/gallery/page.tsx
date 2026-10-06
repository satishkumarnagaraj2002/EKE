import type { Metadata } from "next";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery | Elite Karate Events",
  description: "Gallery of premium karate competition photography from Elite Karate Events.",
};

const galleryImages = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1584735175097-24340077477d?w=800&h=800&fit=crop",
    alt: "Karate athlete performing kata",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=800&fit=crop",
    alt: "Kumite competition action",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=800&h=800&fit=crop",
    alt: "Athlete preparation",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=800&fit=crop",
    alt: "Match competition",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=800&fit=crop",
    alt: "Competition arena",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=800&h=800&fit=crop",
    alt: "Athletes celebration",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop",
    alt: "Team competition",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1549719386-74dfaf00b474?w=800&h=800&fit=crop",
    alt: "Medal ceremony",
  },
];

export default function GalleryPage() {
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
            Gallery
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Experience the moments from Elite Karate Events competitions.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-py">
        <div className="section-container section-px">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
