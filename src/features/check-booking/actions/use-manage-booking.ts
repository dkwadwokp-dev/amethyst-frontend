import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../shared/actions/api";

export const useManageBooking = () => {
  const queryClient = useQueryClient();

  const cancelBooking = useMutation({
    mutationFn: async (reference: string) => {
      return api(`/bookings/${reference}/cancel`, { method: "POST" });
    },
    onSuccess: (_data, reference) => {
      queryClient.invalidateQueries({ queryKey: ["booking", reference] });
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });

  const completeBooking = useMutation({
    mutationFn: async (reference: string) => {
      return api(`/bookings/${reference}/complete`, { method: "POST" });
    },
    onSuccess: (_data, reference) => {
      queryClient.invalidateQueries({ queryKey: ["booking", reference] });
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });

  return {
    cancelBooking,
    completeBooking,
  };
};
