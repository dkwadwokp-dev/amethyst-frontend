export interface EventTicket {
  type: string;
  price: number;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  desc: string;
  longDesc?: string;
  leadImage: string;
  tickets: EventTicket[];
}

export const events: Event[] = [
  {
    id: "ev_01",
    title: "SUMMER JAZZ NIGHT",
    date: "Aug 24, 2026",
    time: "7:00 PM - 11:00 PM",
    location: "Rooftop Lounge",
    desc: "An enchanting evening of live jazz under the stars, featuring acclaimed local and international artists.",
    longDesc: `Join us for the most anticipated musical event of the season – the AH Hotel Summer Jazz Night. Set against the breathtaking backdrop of the city skyline on our exclusive Rooftop Lounge, this evening promises a sensory journey through the timeless sounds of jazz.

We have curated a world-class lineup featuring the legendary Marcus 'Red' Thornton on saxophone, accompanied by the sultry vocals of jazz sensation Elena Rodriguez. The night will transition from smooth, traditional standards to energetic modern improvisations that will keep the spirit of the city alive.

Guests will be greeted with a signature "Crimson Velvet" cocktail upon arrival. Our culinary team has prepared a specialized tapas menu designed to complement the musical selections, featuring artisanal cheeses, hand-pulled sliders, and delicate seafood small plates. Whether you are a jazz aficionado or simply looking for the city's most elegant night out, this is an experience you cannot miss.`,
    leadImage: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2600&auto=format&fit=crop",
    tickets: [
      { type: "General Admission", price: 50 },
      { type: "VIP Table", price: 150 }
    ]
  },
  {
    id: "ev_02",
    title: "CULINARY MASTERCLASS",
    date: "Sep 15, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Main Kitchen",
    desc: "Learn from our head chef as he guides you through the creation of our signature dishes in a hands-on session.",
    longDesc: `Step behind the curtain of a Michelin-standard kitchen and master the art of fine dining. Our Culinary Masterclass, led by Executive Chef David Osei, is an intensive, three-hour hands-on experience designed for passionate food lovers and aspiring chefs alike.

During this session, you will learn the secrets of "modern-fusion" cooking, focusing on three of AH Hotel's most famous signature dishes. Chef David will demonstrate essential techniques including precision knife work, the science of emulsion sauces, and the delicate art of architectural plating. 

The class is kept small to ensure personalized instruction. All professional-grade tools and ingredients are provided. The afternoon concludes with a communal tasting where you will enjoy your own creations paired with premium wines, and you'll leave with a personalized AH Hotel apron and a comprehensive recipe booklet to recreate the magic at home.`,
    leadImage: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2600&auto=format&fit=crop",
    tickets: [
      { type: "Participant", price: 120 }
    ]
  },
  {
    id: "ev_03",
    title: "WINE TASTING GALA",
    date: "Oct 05, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "The Cellar",
    desc: "A premium wine tasting event featuring exclusive selections curated by our expert sommelier in an intimate setting.",
    longDesc: `Enter the subterranean sanctuary of AH Hotel for an evening of viticultural discovery. The Wine Tasting Gala is an exclusive invitation to explore the world's most prestigious vineyards, all within the intimate, candle-lit atmosphere of "The Cellar."

Our Chief Sommelier, Sarah Jenkins, has hand-poured a selection of twelve wines, ranging from crisp, rare old-world whites to powerful, velvet-textured new-world reds. Each flight is accompanied by an educational narrative on the terroir, vintage, and aging processes that make these bottles truly exceptional.

To elevate the experience, our kitchen has designed a "Terroir Pairing" menu, featuring imported Iberico ham, rare aged cheeses, and dark chocolate truffles infused with sea salt. Attendees will also have the first opportunity to purchase limited-release bottles from our private reserves at special gala pricing. It is a night designed for the true connoisseur.`,
    leadImage: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2600&auto=format&fit=crop",
    tickets: [
      { type: "Standard Entry", price: 80 },
      { type: "Premium Tasting", price: 140 }
    ]
  }
];
