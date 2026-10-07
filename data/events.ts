export interface Event {
  id: string;
  slug: string;
  name: string;
  date: string;
  endDate: string;
  location: string;
  venue: string;
  country: string;
  image: string;
  type: "Championship" | "Open Competition" | "International Competition" | "Seminar" | "Training Camp" | "Special Event";
  description: string;
  registrationStatus: "Open" | "Closed" | "Coming Soon";
  categories: string[];
  ageGroups: string[];
  registrationDeadline: string;
  organizerName: string;
  organizerEmail: string;
  organizerPhone: string;
  address: string;
  featured: boolean;
  overview: string;
  rules: string;
  playerRegistrationUrl?: string;
  clubRegistrationUrl?: string;
  registrationUrl?: string;
  bulletinUrl?: string;
}

export const events: Event[] = [
  {
    id: "elite-open-2026",
    slug: "elite-open-10th-international-karate-grand-prix-2026",
    name: "Elite Open 10th International Karate Grand Prix",
    date: "2026-10-24",
    endDate: "2026-10-24",
    location: "Crawley",
    venue: "K2 Crawley",
    country: "England",
    image: "/championship-2026.jpg",
    type: "International Competition",
    description: "The 10th International Karate Grand Prix at K2 Crawley, England, with money prizes across five categories.",
    registrationStatus: "Open",
    categories: ["Para Kata", "Kata", "Team Kata", "Kumite", "Team Kumite"],
    ageGroups: [],
    registrationDeadline: "",
    organizerName: "Elite Karate Club",
    organizerEmail: "info@elitekarateclub.net",
    organizerPhone: "+44 7438052254",
    address: "K2 Crawley, RH11 9BQ, England",
    featured: false,
    overview: "Join the 10th International Karate Grand Prix on Saturday 24 October 2026. The tournament features Para Kata, Kata, Team Kata, Kumite and Team Kumite, with money prizes.",
    rules: "",
    playerRegistrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfK-Vb6ubNiOm-A_G2Yr_dvA5Gi37fZYSlpzYNusmHABSZCQQ/viewform",
    clubRegistrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfK-Vb6ubNiOm-A_G2Yr_dvA5Gi37fZYSlpzYNusmHABSZCQQ/viewform",
    bulletinUrl: "/10th%20ELITE%20OPEN%20International%20Karate%20Grand%20Prix%20Bulletin.pdf",
  },
  {
    id: "shito-ryu-england-squad-2026",
    slug: "shito-ryu-england-squad-training-selections-2026",
    name: "Shito Ryu England Open Kata & Kumite Squad Training & Selections",
    date: "2026-10-10",
    endDate: "2026-10-10",
    location: "London",
    venue: "YMCA Walthamstow",
    country: "England",
    image: "/Sqad.jpeg",
    type: "Training Camp",
    description: "Open Kata and Kumite squad training and selections for upcoming national and international competitions.",
    registrationStatus: "Open",
    categories: ["Kata", "Kumite"],
    ageGroups: ["5 years and over"],
    registrationDeadline: "2026-10-09",
    organizerName: "Shito Ryu England",
    organizerEmail: "shitoryuengland@gmail.com",
    organizerPhone: "07438 052 254",
    address: "YMCA Walthamstow, London E17 3EF",
    featured: true,
    overview: `A new competition season is underway. Shito Ryu England members have represented England at international competitions in Romania and Austria. Join intensive Kata and Kumite training and selections for upcoming national and international competitions.\n\nTrain alongside international athletes Maya Harjan and Nada Wegrzyn, who will represent England at the World Karate Championships in Poland, Adam Choudhury, who will represent Bangladesh, the youth squad and the Shito Ryu England Team.\n\nSchedule\nKata: 13:30 registration and licence check; 13:45-15:45 training and selections.\nKumite: 15:45 registration and licence check; 16:00-18:00 training and selections.\n\nUpcoming selection events\nCentral England International Open: 1 November 2026 at University of Worcester Arena, Worcester WR2 5JN.\nScotland Commonwealth Karate Club Championships: 7-8 November 2026 at Glasgow International Arena, Glasgow.`,
    rules: `Eligibility: minimum age 5 years and minimum grade white belt.\n\nTraining fees: £20 for one session; £30 for one session for two family members. Free training may be available to eligible SRKFE members, including qualifying WKF medal winners and SRKFE gold medalists at the 2026 European or World Shito Ryu Karate Championships. Contact Shito Ryu England to check eligibility.\n\nOpen to SRKFE members and members of EKNGB clubs and associations with their instructor's permission. Selection for SRKFE England teams is available to full SRKFE club members only.\n\nRegistration deadline: Friday 9 October 2026.\nContact: shitoryuengland@gmail.com, 07438 052 254.`,
    registrationUrl: "https://pci.jotform.com/form/262742837029059",
  },
  {
    id: "elite-inter-club-championships-2026",
    slug: "11th-elite-inter-club-karate-championships-2026",
    name: "11th Elite Inter-Club Karate Championships",
    date: "2026-12-06",
    endDate: "2026-12-06",
    location: "London",
    venue: "YMCA Walthamstow",
    country: "England",
    image: "/Inter.jpeg",
    type: "Championship",
    description: "Elite Karate Club London's 11th Inter-Club Championships, celebrating 13 years of the club. Open to members from beginners to experienced competitors.",
    registrationStatus: "Open",
    categories: ["Kata", "Kumite", "Kickmaster", "Kumite Star", "Running Circuit"],
    ageGroups: ["4 years and over", "Running Circuit: ages 3-11"],
    registrationDeadline: "",
    organizerName: "Elite Karate Club London",
    organizerEmail: "info@elitekarateclub.net",
    organizerPhone: "+44 7438052254",
    address: "YMCA Walthamstow, London E17 3EF",
    featured: false,
    overview: `Join Elite Karate Club London's 11th Inter-Club Championships on Sunday 6 December 2026 at 14:30. This year also celebrates 13 years of Elite Karate Club London, founded on 2 November 2013.\n\nThe competition welcomes club members from beginners to experienced national and international competitors. Main categories are open to children aged 4 and over; the Running Circuit is for ages 3-11. Beginner categories can be arranged for a friendly introduction to competition.\n\nCompetition categories: Kata, Kumite, Kickmaster, Kumite Star and Running Circuit. Kumite Star and Running Circuit run in groups of four; every participant receives a medal and each group winner receives a trophy. In standard categories, first place receives a trophy and gold medal, second place a silver medal, and joint third place bronze medals.\n\nDepending on entries, the competition will use one, two or three areas, with qualified judges and referees supporting a fair, professional and positive event.`,
    rules: `Equipment requirements\nKata: karate gi.\nKumite: karate gi, red and blue hand pads, red and blue shin and foot pads, body protector and headguard, gumshield, groin guard for male competitors, and chest guard for girls aged 14+. One competitor wears red and the other blue. Competitors should bring a complete set where possible; limited body protectors, headguards and red/blue belts may be available to borrow.\nKickmaster: karate gi, hand pads, foot pads and any colour belt. Pad colour does not matter; red and blue kickbags will be provided.\nRunning Circuit: karate gi.\n\nSpectator admission: £10, payable in cash at the sports hall entrance on the day.\n\nSponsorship is welcome. Opportunities include venue banners, flyers distributed to attendees, WhatsApp group promotion, club advertising and other options by agreement. Financial contributions, prizes, products and other support are appreciated.\n\nFor registration help, equipment advice, sponsorship or other enquiries, contact info@elitekarateclub.net or +44 7438052254. OSS!`,
    registrationUrl: "https://forms.gle/dYkntdWsi2YXPqYi8",
  },
  {
    id: "1",
    slug: "elite-karate-championship-london-2027",
    name: "Elite Karate Championship London",
    date: "2027-03-15",
    endDate: "2027-03-17",
    location: "London",
    venue: "The Copper Box Arena",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1200&h=900&fit=crop",
    type: "Championship",
    description: "The premier international karate championship hosted in London. Featuring elite athletes from across Europe.",
    registrationStatus: "Open",
    categories: ["Kata", "Kumite", "Team Kata", "Team Kumite"],
    ageGroups: ["U12", "U16", "U21", "U30", "U40", "50+"],
    registrationDeadline: "2027-02-28",
    organizerName: "Elite Karate Events",
    organizerEmail: "info@elitekarateclub.net",
    organizerPhone: "+44 7438052254",
    address: "Copper Box Arena, Stratford, London E20 3ZA",
    featured: true,
    overview: "Join the most prestigious karate championship in the United Kingdom. This international event brings together elite athletes, experienced coaches, and passionate officials for three days of world-class competition.",
    rules: "All competitors must be registered with a recognized karate federation. Detailed competition rules available upon registration.",
  },
  {
    id: "2",
    slug: "elite-international-open-2027",
    name: "Elite International Open",
    date: "2027-05-10",
    endDate: "2027-05-12",
    location: "Manchester",
    venue: "Manchester Central Convention Complex",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&h=900&fit=crop",
    type: "International Competition",
    description: "An open international karate competition welcoming athletes of all federation affiliations.",
    registrationStatus: "Open",
    categories: ["Kata", "Kumite"],
    ageGroups: ["U12", "U16", "U21", "U30", "U40", "50+"],
    registrationDeadline: "2027-04-30",
    organizerName: "Elite Karate Events",
    organizerEmail: "info@elitekarateclub.net",
    organizerPhone: "+44 7438052254",
    address: "[Venue address - to be confirmed]",
    featured: false,
    overview: "A celebration of international karate featuring competitors from across Europe and beyond.",
    rules: "Participants from all recognized karate organizations welcome.",
  },
  {
    id: "3",
    slug: "elite-youth-championship-2027",
    name: "Elite Youth Championship",
    date: "2027-06-20",
    endDate: "2027-06-22",
    location: "Brighton",
    venue: "[Venue to be confirmed]",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1200&h=900&fit=crop",
    type: "Championship",
    description: "Specialized championship for young karate athletes aged 12-18.",
    registrationStatus: "Coming Soon",
    categories: ["Kata", "Kumite", "Team Kata"],
    ageGroups: ["U12", "U16"],
    registrationDeadline: "2027-05-31",
    organizerName: "Elite Karate Events",
    organizerEmail: "info@elitekarateclub.net",
    organizerPhone: "+44 7438052254",
    address: "[Address to be confirmed]",
    featured: false,
    overview: "Dedicated championship for developing young karate talent.",
    rules: "Age groups strictly enforced. Parents/guardians required for U12.",
  },
  {
    id: "4",
    slug: "elite-karate-cup-2027",
    name: "Elite Karate Cup",
    date: "2027-07-14",
    endDate: "2027-07-16",
    location: "Birmingham",
    venue: "[Venue to be confirmed]",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=900&fit=crop",
    type: "Open Competition",
    description: "Open karate competition for developing athletes and new competitors.",
    registrationStatus: "Coming Soon",
    categories: ["Kata", "Kumite"],
    ageGroups: ["U12", "U16", "U21", "U30"],
    registrationDeadline: "2027-06-30",
    organizerName: "Elite Karate Events",
    organizerEmail: "info@elitekarateclub.net",
    organizerPhone: "+44 7438052254",
    address: "[Address to be confirmed]",
    featured: false,
    overview: "Perfect entry point for newer competitors to experience elite-level competition.",
    rules: "Open to all levels of experience.",
  },
];

export function getFeaturedEvent(): Event | undefined {
  return events.find(e => e.featured);
}

export function getUpcomingEvents(): Event[] {
  const today = new Date();
  return events
    .filter(e => new Date(e.date) > today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}
