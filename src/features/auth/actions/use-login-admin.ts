import { useMutation } from "@tanstack/react-query";
import api from "../../shared/actions/api";

interface LoginResponse {
  token: string;
  admin: {
    id: string;
    name: string;
  };
}

const loginAdminRequest = async (passcode: string): Promise<LoginResponse> => {
  // Artificial delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 800));

  return api<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ passcode }),
  });
};

export const useLoginAdmin = () => {
  return useMutation({
    mutationFn: loginAdminRequest,
    onSuccess: (data) => {
      // Automatically save the token when login succeeds
      localStorage.setItem("admin_token", data.token);
    },
  });
};
