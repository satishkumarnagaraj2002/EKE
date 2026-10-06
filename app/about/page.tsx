import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Trophy, Users, Heart, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Elite Karate Events",
  description: "About Elite Karate Events - Creating world-class karate competitions for athletes globally.",
};

export default function AboutPage() {
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
            About Elite Karate Events
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Creating premium karate competitions for athletes worldwide.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-py">
        <div className="section-container section-px">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-heading mb-6">Our Mission</h2>
            <p className="text-lg text-black/70 leading-relaxed mb-8">
              Elite Karate Events is dedicated to creating high-quality karate competitions and experiences that bring athletes, clubs, coaches and officials together. We believe in promoting excellence, fair play, and respect within the karate community.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="font-black text-2xl mb-4">Vision</h3>
                <p className="text-black/70">
                  To be the world's leading karate competition platform, known for excellence, professionalism, and fostering world-class athletes.
                </p>
              </div>
              <div>
                <h3 className="font-black text-2xl mb-4">Values</h3>
                <p className="text-black/70">
                  We are committed to discipline, respect, excellence, and community. Every decision we make is guided by these core values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-py bg-bg-light">
        <div className="section-container section-px">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-4">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center" style={{background: "linear-gradient(135deg, #8B0000 0%, #C1121F 100%)"}}>
                <Trophy className="text-white" size={32} />
              </div>
              <h3 className="font-black text-lg mb-3">EXCELLENCE</h3>
              <p className="text-black/70 text-sm">
                We strive for the highest standards in all aspects of our events.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center" style={{background: "linear-gradient(135deg, #8B0000 0%, #C1121F 100%)"}}>
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="font-black text-lg mb-3">RESPECT</h3>
              <p className="text-black/70 text-sm">
                We honor the art of karate and respect all athletes and officials.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center" style={{background: "linear-gradient(135deg, #8B0000 0%, #C1121F 100%)"}}>
                <Users className="text-white" size={32} />
              </div>
              <h3 className="font-black text-lg mb-3">COMMUNITY</h3>
              <p className="text-black/70 text-sm">
                We bring together athletes, coaches, and officials in celebration of karate.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center" style={{background: "linear-gradient(135deg, #8B0000 0%, #C1121F 100%)"}}>
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="font-black text-lg mb-3">PERFORMANCE</h3>
              <p className="text-black/70 text-sm">
                We create environments where athletes can demonstrate their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
