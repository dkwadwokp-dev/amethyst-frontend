import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../shared/actions/api";

export const useDeleteEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      // Assuming DELETE /events/:id endpoint
      return api<void>(`/events/${id}`, { method: "DELETE" });
    },
    onSuccess: (_data, id) => {
      // Invalidate both the list and the specific event queries
      queryClient.invalidateQueries({ queryKey: ["events"] });
      queryClient.invalidateQueries({ queryKey: ["event", id] });
    },
  });
};
