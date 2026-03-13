import { useMutation } from "@tanstack/react-query";
import  api  from "../../shared/actions/api";

interface LoginResponse {
  token: string;
  admin: {
    id: string;
    name: string;
  };
}

const loginAdminRequest = async (passcode: string): Promise<LoginResponse> => {
  return api<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ passcode }),
  });
};

export const useLoginAdmin = () => {
  return useMutation({
    mutationFn: loginAdminRequest,
  });
};
