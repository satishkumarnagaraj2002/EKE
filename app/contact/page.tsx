import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Elite Karate Events",
  description: "Contact Elite Karate Events for event inquiries, registrations, partnerships, and more.",
};

export default function ContactPage() {
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
            Contact Us
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get in touch with our team for event inquiries, registrations, or partnerships.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-py">
        <div className="section-container section-px">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="card-premium p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{background: "linear-gradient(135deg, #8B0000 0%, #C1121F 100%)"}}>
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="font-black mb-2">Email</h3>
              <p className="text-black/70 mb-4">
                [contact@elitekarateevents.com - placeholder]
              </p>
              <p className="text-sm text-black/50">For general inquiries and support</p>
            </div>

            <div className="card-premium p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{background: "linear-gradient(135deg, #8B0000 0%, #C1121F 100%)"}}>
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="font-black mb-2">Phone</h3>
              <p className="text-black/70 mb-4">
                [+44 XXXX XXXXXX - placeholder]
              </p>
              <p className="text-sm text-black/50">Available during business hours</p>
            </div>

            <div className="card-premium p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{background: "linear-gradient(135deg, #8B0000 0%, #C1121F 100%)"}}>
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="font-black mb-2">Location</h3>
              <p className="text-black/70 mb-4">
                [Location - placeholder]
              </p>
              <p className="text-sm text-black/50">Serving the global karate community</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="section-heading text-center mb-12">Send us a Message</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-6 py-4 bg-bg-light border border-black/10 rounded-lg focus:outline-none focus:border-red-primary transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 bg-bg-light border border-black/10 rounded-lg focus:outline-none focus:border-red-primary transition-colors"
                  required
                />
              </div>

              <div>
                <select className="w-full px-6 py-4 bg-bg-light border border-black/10 rounded-lg focus:outline-none focus:border-red-primary transition-colors">
                  <option value="">Select Subject</option>
                  <option value="general">General Enquiry</option>
                  <option value="event">Event Enquiry</option>
                  <option value="registration">Registration</option>
                  <option value="partnership">Partnership</option>
                  <option value="media">Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <textarea
                placeholder="Message"
                rows={6}
                className="w-full px-6 py-4 bg-bg-light border border-black/10 rounded-lg focus:outline-none focus:border-red-primary transition-colors resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full py-4 font-bold rounded-lg text-white transition-all hover:scale-105 active:scale-95"
                style={{background: "linear-gradient(135deg, #8B0000 0%, #C1121F 100%)"}}
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
