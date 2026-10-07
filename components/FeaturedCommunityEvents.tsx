import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Check, Clock3, Download, Mail, MapPin, Phone, Trophy } from "lucide-react";
import type { Event } from "@/data/events";

interface FeaturedCommunityEventsProps {
  events: Event[];
}

export function FeaturedCommunityEvents({ events }: FeaturedCommunityEventsProps) {
  const squadEvent = events.find((event) => event.slug === "shito-ryu-england-squad-training-selections-2026");
  const interClubEvent = events.find((event) => event.slug === "11th-elite-inter-club-karate-championships-2026");

  if (!squadEvent || !interClubEvent) return null;

  return (
    <>
      <section className="relative overflow-hidden bg-[#071526] py-16 text-white md:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 95% 5%, rgba(20,92,170,0.48), transparent 30rem), linear-gradient(135deg, transparent 0 74%, rgba(215,25,32,0.16) 74.1%, transparent 74.4%)" }} />
        <div className="section-container section-px relative z-10">
          <header className="mb-9 max-w-3xl">
            <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Shito Ryu England / Open squad session</p>
            <h2 className="font-display text-4xl font-bold uppercase leading-tight md:text-5xl">Training. Selection.<br /><span className="text-sky-300">The next level.</span></h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">Intensive Kata and Kumite training, with selections for upcoming national and international competitions.</p>
          </header>

          <div className="grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
            <div>
              <div className="relative mx-auto aspect-[2/3] max-w-[480px] overflow-hidden rounded-lg border border-white/15 bg-black/40 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                <Image src={squadEvent.image} alt="Shito Ryu England Open Kata and Kumite Squad Training and Selections poster" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-contain" />
              </div>
              <a href={squadEvent.registrationUrl} target="_blank" rel="noopener noreferrer" className="mt-4 flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#e0ba54] px-6 py-4 font-display text-sm font-bold uppercase tracking-wider text-[#11151d] transition hover:bg-[#f0d27c]">
                Book squad training <ArrowRight size={17} />
              </a>
              <p className="mt-3 text-center text-xs text-white/50">Registration closes Friday 9 October 2026</p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="mb-2 font-display text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Saturday 10 October 2026</p>
                <h3 className="font-display text-3xl font-bold uppercase leading-tight md:text-4xl">{squadEvent.name}</h3>
                <p className="mt-3 flex items-center gap-2 text-sm text-white/65"><MapPin size={16} className="shrink-0 text-sky-300" />YMCA Walthamstow, London E17 3EF</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border border-sky-200/15 bg-white/[0.04] p-5">
                  <p className="mb-3 flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-sky-200"><Clock3 size={16} />Kata</p>
                  <p className="text-sm leading-relaxed text-white/75">13:30 registration and licence check<br />13:45-15:45 training and selections</p>
                </div>
                <div className="border border-red-200/15 bg-white/[0.04] p-5">
                  <p className="mb-3 flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-red-200"><Clock3 size={16} />Kumite</p>
                  <p className="text-sm leading-relaxed text-white/75">15:45 registration and licence check<br />16:00-18:00 training and selections</p>
                </div>
              </div>

              <div className="border-l-2 border-sky-300 pl-5">
                <p className="font-display text-xs font-bold uppercase tracking-widest text-white/50">Train with international athletes</p>
                <p className="mt-2 text-sm leading-relaxed text-white/75">Maya Harjan and Nada Wegrzyn will represent England at the World Karate Championships in Poland. Adam Choudhury will represent Bangladesh. Train alongside the youth squad and Shito Ryu England Team. Members have also represented Shito Ryu England in Romania and Austria.</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="border border-white/10 bg-white/[0.04] p-5">
                  <p className="mb-3 font-display text-xs font-bold uppercase tracking-widest text-sky-200">Upcoming selections</p>
                  <p className="text-sm font-semibold text-white">Central England International Open</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/60">1 November 2026 / University of Worcester Arena, Worcester WR2 5JN</p>
                  <p className="mt-3 text-sm font-semibold text-white">Scotland Commonwealth Karate Club Championships</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/60">7-8 November 2026 / Glasgow International Arena</p>
                </div>
                <div className="border border-white/10 bg-white/[0.04] p-5">
                  <p className="mb-3 font-display text-xs font-bold uppercase tracking-widest text-sky-200">Eligibility & fees</p>
                  <p className="text-sm text-white/75">Minimum age 5 / minimum grade white belt</p>
                  <p className="mt-2 text-sm text-white/75">£20 for one session / £30 for one session for two family members</p>
                  <p className="mt-2 text-xs leading-relaxed text-white/55">Free training may be available to eligible SRKFE members, including qualifying WKF medal winners and SRKFE gold medalists at the 2026 European or World Shito Ryu Karate Championships. Contact Shito Ryu England to check eligibility.</p>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                <p className="mb-2 font-display text-xs font-bold uppercase tracking-widest text-sky-200">Who can attend?</p>
                <p className="text-sm leading-relaxed text-white/65">Open to SRKFE members and members of EKNGB clubs and associations with their instructor’s permission. Selection for SRKFE England teams is available to full SRKFE club members only.</p>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/55">
                <a href="mailto:shitoryuengland@gmail.com" className="inline-flex items-center gap-2 hover:text-white"><Mail size={14} />shitoryuengland@gmail.com</a>
                <a href="tel:+447438052254" className="inline-flex items-center gap-2 hover:text-white"><Phone size={14} />07438 052 254</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f2f3f5] py-16 text-dark-primary md:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-50" style={{ backgroundImage: "radial-gradient(circle at 3% 100%, rgba(215,25,32,0.1), transparent 26rem), radial-gradient(circle at 98% 0%, rgba(14,50,96,0.12), transparent 26rem)" }} />
        <div className="section-container section-px relative z-10">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-red-primary">13 years of Elite Karate Club London</p>
              <h2 className="font-display text-4xl font-bold uppercase leading-tight md:text-5xl">11th Inter-Club<br />Championships</h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-100 px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-amber-900"><Trophy size={15} />Registrations open</span>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
            <div>
              <div className="relative mx-auto aspect-[2/3] max-w-[480px] overflow-hidden rounded-lg border border-black/10 bg-black shadow-[0_24px_60px_rgba(10,14,20,0.18)]">
                <Image src={interClubEvent.image} alt="11th Elite Inter-Club Karate Championships poster, Sunday 6 December 2026" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-contain" />
              </div>
              <a href={interClubEvent.registrationUrl} target="_blank" rel="noopener noreferrer" className="mt-4 flex min-h-14 items-center justify-center gap-2 rounded-full bg-red-primary px-6 py-4 font-display text-sm font-bold uppercase tracking-wider text-white shadow-[0_10px_25px_rgba(215,25,32,0.2)] transition hover:bg-red-accent">
                Register for the championships <ArrowRight size={17} />
              </a>
            </div>

            <div className="space-y-6">
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-red-primary">Sunday 6 December 2026 / 14:30 start</p>
                <h3 className="mt-2 font-display text-3xl font-bold uppercase leading-tight md:text-4xl">{interClubEvent.name}</h3>
                <p className="mt-3 flex items-center gap-2 text-sm text-black/60"><MapPin size={16} className="text-red-primary" />YMCA Walthamstow, London E17 3EF</p>
                <p className="mt-4 text-sm leading-relaxed text-black/70">All Elite Karate Club London members are invited, from beginners to experienced national and international competitors. Main categories are for ages 4+; the Running Circuit is for ages 3-11. We’re also celebrating the club’s 13th anniversary, founded 2 November 2013.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border border-black/10 bg-white p-5">
                  <p className="mb-3 font-display text-xs font-bold uppercase tracking-widest text-red-primary">Competition categories</p>
                  <ul className="space-y-2 text-sm text-black/75">
                    {interClubEvent.categories.map((category) => <li key={category} className="flex items-center gap-2"><Check size={14} className="shrink-0 text-red-primary" />{category}{category === "Running Circuit" ? " / ages 3-11" : ""}</li>)}
                  </ul>
                  <p className="mt-3 text-xs leading-relaxed text-black/50">Kumite Star and Running Circuit run in groups of four. Every participant receives a medal; each group winner also receives a trophy.</p>
                </div>
                <div className="border border-black/10 bg-white p-5">
                  <p className="mb-3 font-display text-xs font-bold uppercase tracking-widest text-red-primary">Awards / standard categories</p>
                  <p className="text-sm leading-relaxed text-black/70">1st: trophy and gold medal<br />2nd: silver medal<br />Joint 3rd: bronze medals</p>
                  <p className="mt-3 text-xs leading-relaxed text-black/50">Beginner categories can be arranged for a friendly, supportive first competition.</p>
                </div>
              </div>

              <details className="group border border-black/10 bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display text-sm font-bold uppercase tracking-wider text-dark-primary">
                  Equipment requirements <span className="text-red-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="grid gap-4 border-t border-black/10 p-5 text-sm leading-relaxed text-black/70 sm:grid-cols-2">
                  <p><strong>Kata:</strong> Karate gi.</p>
                  <p><strong>Running Circuit:</strong> Karate gi.</p>
                  <p><strong>Kumite:</strong> Karate gi; red and blue hand pads, shin and foot pads; body protector and headguard; gumshield; groin guard for male competitors; chest guard for girls aged 14+.</p>
                  <p><strong>Kickmaster:</strong> Karate gi, hand pads, foot pads and any colour belt. Pad colours do not matter; red and blue kickbags will be provided.</p>
                  <p className="sm:col-span-2">One competitor wears red equipment and the other blue. Bring a complete set where possible. A limited number of body protectors, headguards and red/blue belts may be available to borrow.</p>
                </div>
              </details>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border-l-2 border-red-primary bg-white p-5">
                  <p className="font-display text-xs font-bold uppercase tracking-widest text-red-primary">Spectator admission</p>
                  <p className="mt-2 text-lg font-bold">£10 cash at the entrance</p>
                  <p className="mt-1 text-xs text-black/55">Pay at the sports hall entrance on the day.</p>
                </div>
                <div className="border-l-2 border-amber-500 bg-white p-5">
                  <p className="font-display text-xs font-bold uppercase tracking-widest text-amber-800">A fair, positive event</p>
                  <p className="mt-2 text-sm leading-relaxed text-black/65">One, two or three competition areas will be used depending on entries, supported by qualified judges and referees.</p>
                </div>
              </div>

              <details className="group border border-black/10 bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display text-sm font-bold uppercase tracking-wider text-dark-primary">
                  Sponsorship opportunities <span className="text-red-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="border-t border-black/10 p-5 text-sm leading-relaxed text-black/70">
                  <p>Support helps provide high-quality prizes and a better competitor experience. Opportunities include company banners at the venue, flyers for attendees, promotion through club WhatsApp groups, club advertising and other options by agreement. Financial contributions, prizes, products and other support are welcome.</p>
                  <p className="mt-3">Past Inter-Club Championships have been a starting point for athletes who later won international medals. This could be the beginning of another competitor’s journey.</p>
                  <a href="mailto:info@elitekarateclub.net" className="mt-4 inline-flex items-center gap-2 font-semibold text-red-primary"><Mail size={15} />Contact Elite Karate Club</a>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
