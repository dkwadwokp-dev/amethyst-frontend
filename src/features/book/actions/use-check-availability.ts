import { useQuery } from "@tanstack/react-query";
import api from "../../shared/actions/api";

interface AvailabilityParams {
  type: "room" | "dining";
  item: string;
}

export const useCheckAvailability = (params: AvailabilityParams) => {
  const isEnabled = !!(params.type && params.item);

  return useQuery({
    queryKey: ["availability", params],
    queryFn: () => {
      const searchParams = new URLSearchParams();

      searchParams.append("type", params.type);
      searchParams.append("item", params.item);

      return api<any>(
        `/bookings/check-availability?${searchParams.toString()}`,
      );
    },
    enabled: isEnabled,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
