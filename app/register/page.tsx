import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Register | Elite Karate Events",
  description: "Register for Elite Karate Events competitions and championships.",
};

export default function RegisterPage() {
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
            Register for an Event
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Register for your next karate competition or championship.
          </p>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="section-py">
        <div className="section-container section-px">
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-6 py-4 bg-bg-light border border-black/10 rounded-lg focus:outline-none focus:border-red-primary transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 bg-bg-light border border-black/10 rounded-lg focus:outline-none focus:border-red-primary transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-6 py-4 bg-bg-light border border-black/10 rounded-lg focus:outline-none focus:border-red-primary transition-colors"
                  required
                />
                <input
                  type="text"
                  placeholder="Dojo / Club Name"
                  className="w-full px-6 py-4 bg-bg-light border border-black/10 rounded-lg focus:outline-none focus:border-red-primary transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full px-6 py-4 bg-bg-light border border-black/10 rounded-lg focus:outline-none focus:border-red-primary transition-colors"
                  required
                />
                <select className="w-full px-6 py-4 bg-bg-light border border-black/10 rounded-lg focus:outline-none focus:border-red-primary transition-colors">
                  <option value="">Select Age Category</option>
                  <option value="u12">U12</option>
                  <option value="u16">U16</option>
                  <option value="u21">U21</option>
                  <option value="u30">U30</option>
                  <option value="u40">U40</option>
                  <option value="50+">50+</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select className="w-full px-6 py-4 bg-bg-light border border-black/10 rounded-lg focus:outline-none focus:border-red-primary transition-colors">
                  <option value="">Select Competition Category</option>
                  <option value="kata">Kata</option>
                  <option value="kumite">Kumite</option>
                  <option value="team-kata">Team Kata</option>
                  <option value="team-kumite">Team Kumite</option>
                </select>
                <select className="w-full px-6 py-4 bg-bg-light border border-black/10 rounded-lg focus:outline-none focus:border-red-primary transition-colors">
                  <option value="">Select Event</option>
                  <option value="london-2027">Elite Karate Championship London 2027</option>
                </select>
              </div>

              <textarea
                placeholder="Additional Notes or Message"
                rows={4}
                className="w-full px-6 py-4 bg-bg-light border border-black/10 rounded-lg focus:outline-none focus:border-red-primary transition-colors resize-none"
              ></textarea>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
                <p className="font-semibold mb-2">Note:</p>
                <p>This is a preliminary registration form. You will receive confirmation and payment details via email shortly after submission.</p>
              </div>

              <button
                type="submit"
                className="w-full py-4 font-bold rounded-lg text-white transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                style={{background: "linear-gradient(135deg, #8B0000 0%, #C1121F 100%)"}}
              >
                SUBMIT REGISTRATION
                <ArrowRight size={20} />
              </button>
            </form>

            <div className="mt-8 p-6 bg-bg-light rounded-lg text-center">
              <p className="text-black/70">
                Questions? <a href="/contact" className="text-red-primary font-semibold hover:underline">Contact us</a> for more information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
