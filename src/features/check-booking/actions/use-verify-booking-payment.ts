import { useQuery } from "@tanstack/react-query";
import api from "../../shared/actions/api";

export const useVerifyBookingPayment = (reference: string | null) => {
  return useQuery({
    queryKey: ["verify-booking-payment", reference],
    queryFn: () => {
      if (!reference) throw new Error("No reference provided");
      return api<any>(`/bookings/verify-payment/${reference}`, {
        method: "GET",
      });
    },
    enabled: !!reference,
    retry: false, // Don't retry payment verification endlessly
  });
};
