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
  leadImage: string;
  tickets: EventTicket[];
}

export const events: Event[] = [
  {
    id: "ev_01",
    title: "Summer Jazz Night",
    date: "Aug 24, 2026",
    time: "7:00 PM - 11:00 PM",
    location: "Rooftop Lounge",
    desc: "An enchanting evening of live jazz under the stars, featuring acclaimed local and international artists. Enjoy crafted cocktails and a vibrant atmosphere.",
    leadImage: "https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=800",
    tickets: [
      { type: "General Admission", price: 50 },
      { type: "VIP Table", price: 150 }
    ]
  },
  {
    id: "ev_02",
    title: "Culinary Masterclass",
    date: "Sep 15, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Main Kitchen",
    desc: "Learn from our head chef as he guides you through the creation of our signature dishes. A hands-on experience ending with a delightful tasting session.",
    leadImage: "https://images.pexels.com/photos/4252136/pexels-photo-4252136.jpeg?auto=compress&cs=tinysrgb&w=800",
    tickets: [
      { type: "Participant", price: 120 }
    ]
  },
  {
    id: "ev_03",
    title: "Wine Tasting Gala",
    date: "Oct 05, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "The Cellar",
    desc: "A premium wine tasting event featuring exclusive selections curated by our expert sommelier, accompanied by artisanal cheeses and charcuterie.",
    leadImage: "https://images.pexels.com/photos/2908225/pexels-photo-2908225.jpeg?auto=compress&cs=tinysrgb&w=800",
    tickets: [
      { type: "Standard Entry", price: 80 },
      { type: "Premium Tasting", price: 140 }
    ]
  }
];
