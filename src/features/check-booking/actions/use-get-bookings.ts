import { useQuery } from "@tanstack/react-query";
import api from "../../shared/actions/api";

interface Booking {
  _id: string;
  reference: string;
  type: "room" | "dining";
  itemType: string;
  item: string;
  firstName: string;
  lastName: string;
  email: string;
  guests: number;
  amount: number;
  checkIn: string;
  checkOut: string;
  status: "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED" | "PROCESSED";
  createdAt: string;
  updatedAt: string;
}

export const useGetBookingsQuery = (type?: string) => {
  return useQuery<Booking[]>({
    queryKey: ["bookings", type],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (type && type !== "ALL") {
        const queryType = type.toLowerCase().replace(/s$/, ""); // e.g., ROOMS -> room
        params.append("type", queryType);
      }

      const endpoint = params.toString()
        ? `/bookings?${params.toString()}`
        : "/bookings";

      return api<Booking[]>(endpoint, { requireAuth: true });
    },
  });
};
