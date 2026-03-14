import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../../shared/actions/api";

export interface VerifyBookingInput {
  reference: string;
  email: string;
}

const verifyBookingFn = (data: VerifyBookingInput) => {
  const searchParams = new URLSearchParams();
  searchParams.append("reference", data.reference);
  searchParams.append("email", data.email);

  return api<any>(`/bookings/verify?${searchParams.toString()}`, {
    method: "GET",
  });
};

export const useVerifyBookingMutation = () => {
  return useMutation({
    mutationFn: verifyBookingFn,
  });
};

export const useVerifyBookingQuery = (
  data: VerifyBookingInput,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["booking", data.reference, data.email],
    queryFn: () => verifyBookingFn(data),
    enabled: enabled && !!data.reference && !!data.email,
  });
};
