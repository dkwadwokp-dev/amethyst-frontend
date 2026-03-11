export type BookingStatus = 'COMPLETED' | 'CONFIRMED' | 'PENDING' | 'CANCELLED';

export interface Booking {
  id: string;
  type: 'room' | 'dining';
  status: BookingStatus;
  title: string;
  subtitle: string;
  dateRange: string;
  guests: number;
  placedAt: string;
  amount: number;
}

export const mockBookings: Booking[] = [
  {
    id: 'A1B2C3D4',
    type: 'room',
    status: 'CONFIRMED',
    title: 'Room #301',
    subtitle: 'The Executive Suite',
    dateRange: 'Oct 15, 2024 - Oct 20, 2024',
    guests: 2,
    placedAt: 'Placed 2 days ago',
    amount: 1254.00
  },
  {
    id: 'X9Y8Z7W6',
    type: 'room',
    status: 'COMPLETED',
    title: 'Room #102',
    subtitle: 'The Standard Room',
    dateRange: 'Sep 10, 2024 - Sep 14, 2024',
    guests: 1,
    placedAt: 'Placed 1 month ago',
    amount: 550.00
  },
  {
    id: 'D4F5G6H7',
    type: 'dining',
    status: 'PENDING',
    title: 'Table M1 (Main Dining)',
    subtitle: 'Dinner Reservation',
    dateRange: 'Oct 25, 2024 - 7:00 PM',
    guests: 4,
    placedAt: 'Placed 5 hours ago',
    amount: 120.00
  },
  {
    id: 'K1L2M3N4',
    type: 'room',
    status: 'CANCELLED',
    title: 'Room #501',
    subtitle: 'The Honeymoon Suite',
    dateRange: 'Nov 01, 2024 - Nov 05, 2024',
    guests: 2,
    placedAt: 'Placed 1 week ago',
    amount: 2100.00
  }
];
