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
  categories: ("Kata" | "Kumite" | "Team Kata" | "Team Kumite")[];
  ageGroups: string[];
  registrationDeadline: string;
  organizerName: string;
  organizerEmail: string;
  organizerPhone: string;
  address: string;
  featured: boolean;
  overview: string;
  rules: string;
}

export const events: Event[] = [
  {
    id: "1",
    slug: "elite-karate-championship-london-2027",
    name: "Elite Karate Championship London",
    date: "2027-03-15",
    endDate: "2027-03-17",
    location: "London",
    venue: "The Copper Box Arena",
    country: "United Kingdom",
    image: "/placeholder-event-1.jpg",
    type: "Championship",
    description: "The premier international karate championship hosted in London. Featuring elite athletes from across Europe.",
    registrationStatus: "Open",
    categories: ["Kata", "Kumite", "Team Kata", "Team Kumite"],
    ageGroups: ["U12", "U16", "U21", "U30", "U40", "50+"],
    registrationDeadline: "2027-02-28",
    organizerName: "Elite Karate Events",
    organizerEmail: "[contact@elitekarateevents.com - placeholder]",
    organizerPhone: "[+44 XXXX XXXXXX - placeholder]",
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
    image: "/placeholder-event-2.jpg",
    type: "International Competition",
    description: "An open international karate competition welcoming athletes of all federation affiliations.",
    registrationStatus: "Open",
    categories: ["Kata", "Kumite"],
    ageGroups: ["U12", "U16", "U21", "U30", "U40", "50+"],
    registrationDeadline: "2027-04-30",
    organizerName: "Elite Karate Events",
    organizerEmail: "[contact@elitekarateevents.com - placeholder]",
    organizerPhone: "[+44 XXXX XXXXXX - placeholder]",
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
    image: "/placeholder-event-3.jpg",
    type: "Championship",
    description: "Specialized championship for young karate athletes aged 12-18.",
    registrationStatus: "Coming Soon",
    categories: ["Kata", "Kumite", "Team Kata"],
    ageGroups: ["U12", "U16"],
    registrationDeadline: "2027-05-31",
    organizerName: "Elite Karate Events",
    organizerEmail: "[contact@elitekarateevents.com - placeholder]",
    organizerPhone: "[+44 XXXX XXXXXX - placeholder]",
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
    image: "/placeholder-event-4.jpg",
    type: "Open Competition",
    description: "Open karate competition for developing athletes and new competitors.",
    registrationStatus: "Coming Soon",
    categories: ["Kata", "Kumite"],
    ageGroups: ["U12", "U16", "U21", "U30"],
    registrationDeadline: "2027-06-30",
    organizerName: "Elite Karate Events",
    organizerEmail: "[contact@elitekarateevents.com - placeholder]",
    organizerPhone: "[+44 XXXX XXXXXX - placeholder]",
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
