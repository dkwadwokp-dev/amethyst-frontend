import { useQuery } from "@tanstack/react-query";
import api from "../../shared/actions/api";

export const useGetSingleBookingQuery = (reference: string, enabled = true) => {
  return useQuery({
    queryKey: ["booking", reference],
    queryFn: () => api<any>(`/bookings/${reference}`, { requireAuth: true }),
    enabled: enabled && !!reference,
  });
};
