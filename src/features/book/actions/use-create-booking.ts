import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { BookingFormData } from "../schema/booking-schema";
import api from "../../shared/actions/api";

export const useCreateBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: BookingFormData) => {
      return api<any>("/bookings", {
        method: "POST",
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      // Invalidate availability queries to reflect the new booking immediately
      queryClient.invalidateQueries({ queryKey: ["availability"] ,exact: false});
    },
  });
};
