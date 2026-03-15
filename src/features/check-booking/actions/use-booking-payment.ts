import { useMutation } from "@tanstack/react-query";
import api from "../../shared/actions/api";

export const useCreateBookingPayment = () => {
  return useMutation({
    mutationFn: (reference: string) => {
      return api<any>(`/bookings/${reference}/payment`, {
        method: "POST",
      });
    },
  });
};
