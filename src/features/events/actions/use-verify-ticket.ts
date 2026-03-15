import { useQuery } from "@tanstack/react-query";
import api from "../../shared/actions/api";

const verifyTicket = async (reference: string) => {
  return api<any>(`/events/tickets/verify/${reference}`);
};

export const useVerifyTicket = (reference: string | null) => {
  return useQuery({
    queryKey: ["verify-ticket", reference],
    queryFn: () =>
      reference ? verifyTicket(reference) : Promise.reject("No reference"),
    enabled: !!reference,
    retry: false,
  });
};
