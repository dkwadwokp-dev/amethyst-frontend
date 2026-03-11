export type BookedRange = {
  start: number;
  end: number;
};

export type RoomInstance = {
  id: string;
  roomId: string; // references the room type id (e.g. rm_01)
  roomNumber: string;
  bookedDates: BookedRange[]; // ranges of unavailable dates in October 2026
};

export const roomInstances: RoomInstance[] = [
  // THE STANDARD ROOM (rm_01)
  {
    id: "inst_01",
    roomId: "rm_01",
    roomNumber: "101",
    bookedDates: [
      { start: 3, end: 4 },
      { start: 12, end: 14 },
    ],
  },
  {
    id: "inst_02",
    roomId: "rm_01",
    roomNumber: "102",
    bookedDates: [
      { start: 10, end: 14 },
      { start: 25, end: 27 },
    ],
  },
  {
    id: "inst_03",
    roomId: "rm_01",
    roomNumber: "103",
    bookedDates: [
      { start: 1, end: 3 },
      { start: 8, end: 10 },
      { start: 20, end: 22 },
    ],
  },
  {
    id: "inst_04",
    roomId: "rm_01",
    roomNumber: "104",
    bookedDates: [
      { start: 15, end: 18 },
      { start: 28, end: 30 },
    ],
  },

  // THE DELUXE ROOM (rm_02)
  {
    id: "inst_05",
    roomId: "rm_02",
    roomNumber: "201",
    bookedDates: [
      { start: 5, end: 7 },
      { start: 19, end: 23 },
    ],
  },
  {
    id: "inst_06",
    roomId: "rm_02",
    roomNumber: "202",
    bookedDates: [
      { start: 2, end: 5 },
      { start: 15, end: 17 },
    ],
  },
  {
    id: "inst_07",
    roomId: "rm_02",
    roomNumber: "203",
    bookedDates: [
      { start: 10, end: 12 },
      { start: 24, end: 27 },
    ],
  },
  {
    id: "inst_08",
    roomId: "rm_02",
    roomNumber: "204",
    bookedDates: [
      { start: 7, end: 10 },
      { start: 28, end: 31 },
    ],
  },
  {
    id: "inst_09",
    roomId: "rm_02",
    roomNumber: "205",
    bookedDates: [
      { start: 1, end: 2 },
      { start: 14, end: 18 },
    ],
  },

  // THE EXECUTIVE SUITE (rm_03)
  {
    id: "inst_10",
    roomId: "rm_03",
    roomNumber: "301",
    bookedDates: [
      { start: 8, end: 9 },
      { start: 22, end: 24 },
    ],
  },
  {
    id: "inst_11",
    roomId: "rm_03",
    roomNumber: "302",
    bookedDates: [
      { start: 4, end: 6 },
      { start: 18, end: 21 },
    ],
  },
  {
    id: "inst_12",
    roomId: "rm_03",
    roomNumber: "303",
    bookedDates: [
      { start: 12, end: 15 },
      { start: 26, end: 29 },
    ],
  },

  // THE FAMILY CONNECT ROOM (rm_04)
  {
    id: "inst_13",
    roomId: "rm_04",
    roomNumber: "401",
    bookedDates: [
      { start: 2, end: 6 },
      { start: 20, end: 22 },
    ],
  },
  {
    id: "inst_14",
    roomId: "rm_04",
    roomNumber: "402",
    bookedDates: [
      { start: 9, end: 12 },
      { start: 25, end: 28 },
    ],
  },
  {
    id: "inst_15",
    roomId: "rm_04",
    roomNumber: "403",
    bookedDates: [
      { start: 15, end: 19 },
      { start: 29, end: 31 },
    ],
  },
  {
    id: "inst_16",
    roomId: "rm_04",
    roomNumber: "404",
    bookedDates: [
      { start: 6, end: 8 },
      { start: 22, end: 25 },
    ],
  },

  // THE PRESIDENTIAL SUITE (rm_05)
  {
    id: "inst_17",
    roomId: "rm_05",
    roomNumber: "PH-1",
    bookedDates: [
      { start: 1, end: 3 },
      { start: 10, end: 13 },
    ],
  },
  {
    id: "inst_18",
    roomId: "rm_05",
    roomNumber: "PH-2",
    bookedDates: [
      { start: 5, end: 8 },
      { start: 20, end: 23 },
    ],
  },
  {
    id: "inst_19",
    roomId: "rm_05",
    roomNumber: "PH-3",
    bookedDates: [
      { start: 15, end: 17 },
      { start: 28, end: 31 },
    ],
  },

  // THE HONEYMOON SUITE (rm_06)
  {
    id: "inst_20",
    roomId: "rm_06",
    roomNumber: "501",
    bookedDates: [
      { start: 12, end: 15 },
      { start: 25, end: 27 },
    ],
  },
  {
    id: "inst_21",
    roomId: "rm_06",
    roomNumber: "502",
    bookedDates: [
      { start: 3, end: 6 },
      { start: 18, end: 20 },
    ],
  },
  {
    id: "inst_22",
    roomId: "rm_06",
    roomNumber: "503",
    bookedDates: [
      { start: 8, end: 11 },
      { start: 22, end: 24 },
    ],
  },
  {
    id: "inst_23",
    roomId: "rm_06",
    roomNumber: "504",
    bookedDates: [
      { start: 1, end: 3 },
      { start: 15, end: 17 },
      { start: 30, end: 31 },
    ],
  },
  {
    id: "inst_24",
    roomId: "rm_06",
    roomNumber: "505",
    bookedDates: [
      { start: 6, end: 8 },
      { start: 20, end: 22 },
      { start: 28, end: 29 },
    ],
  },
];
