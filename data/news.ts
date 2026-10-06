export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Events" | "Results" | "Athletes" | "Championships" | "Announcements";
  image: string;
  author?: string;
  date: string;
  featured: boolean;
}

export const news: NewsArticle[] = [
  {
    id: "1",
    slug: "elite-karate-championship-london-2026-results",
    title: "Elite Karate Championship London 2026 - Complete Results",
    excerpt: "Historic results from the inaugural Elite Karate Championship London featuring 234 competitors from 18 countries competing across all disciplines.",
    content: `The Elite Karate Championship London 2026 concluded successfully with outstanding performances from athletes across all age categories and disciplines.

Key Highlights:
- 234 competitors from 18 countries
- 4 disciplines: Kata, Kumite, Team Kata, Team Kumite
- 12 age categories
- Live streaming reached over 50,000 viewers globally

Champions and standout performances were recognized across all categories, with Yuki Tanaka taking gold in the Women's Kata Senior category and Marco Rossi claiming silver in Men's Kumite.

The championship showcased the highest level of technical excellence and competitive spirit. Athletes demonstrated exceptional discipline, precision, and respect throughout the three-day event.`,
    category: "Results",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop",
    author: "Elite Karate Events",
    date: "2026-03-17",
    featured: true,
  },
  {
    id: "2",
    slug: "registration-open-elite-karate-championship-london-2027",
    title: "Registration Opens for Elite Karate Championship London 2027",
    excerpt: "Early bird registration now open for the second annual Elite Karate Championship London. Expected to attract 300+ competitors from around the world.",
    content: `Registration has opened for the Elite Karate Championship London 2027, building on the success of the inaugural championship.

Event Details:
- Date: March 15-17, 2027
- Venue: The Copper Box Arena, London
- Registration Deadline: February 28, 2027
- Early Bird Discount: Available until January 31, 2027

Expected to attract over 300 international competitors, the 2027 championship will feature expanded competition formats and enhanced broadcasting capabilities. 

Categories available:
- Kata (Individual and Team)
- Kumite (Individual and Team)
- Age groups from U12 to 50+

Register now to secure your place at this premier international karate event.`,
    category: "Events",
    image: "https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=800&h=400&fit=crop",
    author: "Elite Karate Events",
    date: "2026-11-15",
    featured: true,
  },
  {
    id: "3",
    slug: "yuki-tanaka-interview-kata-excellence",
    title: "Yuki Tanaka Interview: The Art of Kata Excellence",
    excerpt: "An exclusive interview with world champion Yuki Tanaka discussing her approach to kata competition, training philosophy, and what drives her pursuit of perfection.",
    content: `We sat down with kata champion Yuki Tanaka to discuss her path to international success and her philosophy on the art of karate.

Elite Karate Events: What drew you to karate?
Yuki: I started karate at age 5, inspired by my grandfather who was also a karate master. For me, karate has always been more than a sport—it's a lifelong journey of self-improvement.

EKE: How do you prepare for major competitions?
Yuki: Training is comprehensive—physical conditioning, technical refinement, mental preparation, and spiritual focus. Kata requires perfection of every movement, so practice must be meticulous.

EKE: What does winning at Elite Karate Championship London mean to you?
Yuki: Competing on an international stage against the world's best athletes is the highest honor. It validates all the dedication and discipline. But more importantly, it's a celebration of karate itself.

Yuki's advice to aspiring kata athletes: "Don't focus only on winning. Focus on mastering the art. Excellence will follow."`,
    category: "Athletes",
    image: "https://images.unsplash.com/photo-1584735175097-24340077477d?w=800&h=400&fit=crop",
    author: "Elite Karate Events",
    date: "2026-03-25",
    featured: false,
  },
  {
    id: "4",
    slug: "new-international-partnerships-announced",
    title: "Elite Karate Events Announces International Partnerships",
    excerpt: "Strategic partnerships with leading karate federations and organizations expand Elite Karate Events' global reach and event offerings.",
    content: `Elite Karate Events is proud to announce strategic partnerships with several leading international karate organizations.

These partnerships strengthen our commitment to:
- Creating world-class competition experiences
- Expanding access to elite-level events
- Supporting athletes at all levels
- Growing the global karate community
- Promoting fair play and excellence

Through these collaborations, we will continue to host premier international competitions while maintaining the highest standards of organization and athlete welfare.`,
    category: "Announcements",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    author: "Elite Karate Events",
    date: "2026-10-01",
    featured: false,
  },
];
