export type BookedTimeRange = {
  startHour: number; // e.g., 18 for 6:00 PM
  endHour: number; // e.g., 20 for 8:00 PM
};

export type TableBookings = {
  date: number; // Date of the month
  bookedTimes: BookedTimeRange[];
};

export type TableInstance = {
  id: string;
  areaId: string; // references dining area id (e.g. dn_01)
  tableNumber: string;
  capacity: number;
  bookings: TableBookings[];
};

// Dining areas catalog equivalent to 'rooms'
export const diningAreas = [
  {
    id: "dn_01",
    title: "MAIN DINING ROOM",
    leadImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    desc: "Experience elegant fine dining in our grand hall, featuring classic architecture and a sophisticated atmosphere perfect for special occasions.",
  },
  {
    id: "dn_02",
    title: "OUTDOOR PATIO",
    leadImage:
      "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?auto=format&fit=crop&q=80&w=800",
    desc: "Al fresco dining area with ambient lighting and lush surroundings, ideal for a relaxed evening meal under the stars.",
  },
  {
    id: "dn_03",
    title: "PRIVATE CHEF'S TABLE",
    leadImage:
      "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?auto=format&fit=crop&q=80&w=800",
    desc: "An exclusive, intimate space within the heart of the kitchen where you can watch our master chefs at work.",
  },
  {
    id: "dn_04",
    title: "LOUNGE BAR",
    leadImage:
      "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=800",
    desc: "A vibrant space offering craft cocktails and a curated selection of small plates in a cozy, modern setting.",
  },
];

export const tableInstances: TableInstance[] = [
  // MAIN DINING ROOM (dn_01)
  {
    id: "tbl_01",
    areaId: "dn_01",
    tableNumber: "M1",
    capacity: 2,
    bookings: [
      { date: 15, bookedTimes: [{ startHour: 18, endHour: 20 }] },
      { date: 20, bookedTimes: [{ startHour: 19, endHour: 21 }] },
    ],
  },
  {
    id: "tbl_02",
    areaId: "dn_01",
    tableNumber: "M2",
    capacity: 4,
    bookings: [
      { date: 15, bookedTimes: [{ startHour: 20, endHour: 22 }] },
      { date: 16, bookedTimes: [{ startHour: 18, endHour: 20 }] },
    ],
  },
  {
    id: "tbl_03",
    areaId: "dn_01",
    tableNumber: "M3",
    capacity: 6,
    bookings: [{ date: 18, bookedTimes: [{ startHour: 17, endHour: 19 }] }],
  },
  {
    id: "tbl_04",
    areaId: "dn_01",
    tableNumber: "M4",
    capacity: 2,
    bookings: [],
  },
  {
    id: "tbl_05",
    areaId: "dn_01",
    tableNumber: "M5",
    capacity: 4,
    bookings: [{ date: 12, bookedTimes: [{ startHour: 19, endHour: 21 }] }],
  },
  {
    id: "tbl_06",
    areaId: "dn_01",
    tableNumber: "M6",
    capacity: 8,
    bookings: [{ date: 25, bookedTimes: [{ startHour: 18, endHour: 22 }] }],
  },
  {
    id: "tbl_07",
    areaId: "dn_01",
    tableNumber: "M7",
    capacity: 2,
    bookings: [],
  },

  // OUTDOOR PATIO (dn_02)
  {
    id: "tbl_08",
    areaId: "dn_02",
    tableNumber: "P1",
    capacity: 2,
    bookings: [
      {
        date: 14,
        bookedTimes: [
          { startHour: 17, endHour: 19 },
          { startHour: 20, endHour: 22 },
        ],
      },
    ],
  },
  {
    id: "tbl_09",
    areaId: "dn_02",
    tableNumber: "P2",
    capacity: 4,
    bookings: [],
  },
  {
    id: "tbl_10",
    areaId: "dn_02",
    tableNumber: "P3",
    capacity: 4,
    bookings: [{ date: 15, bookedTimes: [{ startHour: 18, endHour: 20 }] }],
  },
  {
    id: "tbl_11",
    areaId: "dn_02",
    tableNumber: "P4",
    capacity: 6,
    bookings: [{ date: 21, bookedTimes: [{ startHour: 19, endHour: 22 }] }],
  },
  {
    id: "tbl_12",
    areaId: "dn_02",
    tableNumber: "P5",
    capacity: 2,
    bookings: [],
  },
  {
    id: "tbl_13",
    areaId: "dn_02",
    tableNumber: "P6",
    capacity: 8,
    bookings: [{ date: 10, bookedTimes: [{ startHour: 17, endHour: 21 }] }],
  },

  // PRIVATE CHEF'S TABLE (dn_03)
  {
    id: "tbl_14",
    areaId: "dn_03",
    tableNumber: "C1",
    capacity: 8,
    bookings: [
      { date: 15, bookedTimes: [{ startHour: 19, endHour: 23 }] },
      { date: 22, bookedTimes: [{ startHour: 18, endHour: 22 }] },
    ],
  },
  {
    id: "tbl_15",
    areaId: "dn_03",
    tableNumber: "C2",
    capacity: 6,
    bookings: [{ date: 18, bookedTimes: [{ startHour: 19, endHour: 22 }] }],
  },
  {
    id: "tbl_16",
    areaId: "dn_03",
    tableNumber: "C3",
    capacity: 10,
    bookings: [{ date: 25, bookedTimes: [{ startHour: 18, endHour: 23 }] }],
  },
  {
    id: "tbl_17",
    areaId: "dn_03",
    tableNumber: "C4",
    capacity: 4,
    bookings: [],
  },
  {
    id: "tbl_18",
    areaId: "dn_03",
    tableNumber: "C5",
    capacity: 12,
    bookings: [{ date: 30, bookedTimes: [{ startHour: 19, endHour: 23 }] }],
  },

  // LOUNGE BAR (dn_04)
  {
    id: "tbl_19",
    areaId: "dn_04",
    tableNumber: "L1",
    capacity: 2,
    bookings: [],
  },
  {
    id: "tbl_20",
    areaId: "dn_04",
    tableNumber: "L2",
    capacity: 4,
    bookings: [{ date: 18, bookedTimes: [{ startHour: 21, endHour: 23 }] }],
  },
  {
    id: "tbl_21",
    areaId: "dn_04",
    tableNumber: "L3",
    capacity: 2,
    bookings: [{ date: 15, bookedTimes: [{ startHour: 20, endHour: 23 }] }],
  },
  {
    id: "tbl_22",
    areaId: "dn_04",
    tableNumber: "L4",
    capacity: 4,
    bookings: [{ date: 12, bookedTimes: [{ startHour: 18, endHour: 20 }] }],
  },
  {
    id: "tbl_23",
    areaId: "dn_04",
    tableNumber: "L5",
    capacity: 6,
    bookings: [],
  },
  {
    id: "tbl_24",
    areaId: "dn_04",
    tableNumber: "L6",
    capacity: 2,
    bookings: [{ date: 22, bookedTimes: [{ startHour: 21, endHour: 23 }] }],
  },
];
