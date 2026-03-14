import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../shared/actions/api";
import { type EventFormData } from "../schema/event-schema";

const updateEventRequest = async ({
  id,
  data,
}: {
  id: string;
  data: EventFormData;
}) => {
  // Artificial delay for UI feedback
  await new Promise((resolve) => setTimeout(resolve, 800));

  return api(`/events/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    requireAuth: true,
  });
};

export const useUpdateEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateEventRequest,
    onSuccess: (_, { id }) => {
      // Invalidate events list and specific event
      queryClient.invalidateQueries({ queryKey: ["events"] });
      queryClient.invalidateQueries({ queryKey: ["event", id] });
    },
  });
};
