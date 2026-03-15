import { useMutation } from "@tanstack/react-query";
import api from "../../shared/actions/api";

export interface PurchaseTicketInput {
  eventId: string;
  ticketId: string;
  quantity: number;
  fullName: string;
  email: string;
}

interface PurchaseTicketResponse {
  purchase: {
    reference: string;
    amount: number;
  };
  payment: {
    status: boolean;
    message: string;
    data: {
      authorization_url: string;
      access_code: string;
      reference: string;
    };
  };
}

const purchaseTicket = async (data: PurchaseTicketInput) => {
  return api<PurchaseTicketResponse>("/events/tickets/purchase", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const usePurchaseTicket = () => {
  return useMutation({
    mutationFn: purchaseTicket,
  });
};
