import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../shared/actions/api";
import { type EventFormData } from "../schema/event-schema";

const createEventRequest = async (data: EventFormData) => {
  // Artificial delay for UI feedback
  await new Promise((resolve) => setTimeout(resolve, 800));

  return api("/events", {
    method: "POST",
    body: JSON.stringify(data),
    requireAuth: true,
  });
};

export const useCreateEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createEventRequest,
    onSuccess: () => {
      // Invalidate events list when a new one is created
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  });
};
