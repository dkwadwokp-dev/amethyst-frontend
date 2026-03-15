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

export const useGetBookingsQuery = (type?: string, status?: string) => {
  return useQuery<Booking[]>({
    queryKey: ["bookings", type, status],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (type && type !== "ALL") {
        const queryType = type.toLowerCase().replace(/s$/, ""); // e.g., ROOMS -> room
        params.append("type", queryType);
      }
      if (status && status !== "ALL") {
        params.append("status", status);
      }

      const queryString = params.toString();
      const endpoint = queryString ? `/bookings?${queryString}` : "/bookings";

      return api<Booking[]>(endpoint, { requireAuth: true });
    },
  });
};
