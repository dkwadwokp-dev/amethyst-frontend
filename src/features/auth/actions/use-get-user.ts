import { useQuery } from "@tanstack/react-query";
import api from "../../shared/actions/api";

interface UserResponse {
  admin: {
    id: string;
    name: string;
  };
}

const getLoggedInUser = async () => {
  return api<UserResponse>("/auth/me", {
    requireAuth: true,
  });
};

export const useGetLoggedInUser = () => {
  const token = localStorage.getItem("admin_token");
  return useQuery({
    queryKey: ["auth", "me"],
    queryFn: getLoggedInUser,
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: !!token,
  });
};
