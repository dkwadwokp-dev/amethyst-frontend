import { useMutation } from "@tanstack/react-query";
import api from "../../shared/actions/api";

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  privacy?: boolean;
}

const submitContactForm = async (data: ContactPayload) => {
  const { privacy, ...payload } = data;
  return api("/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

export const useSubmitContact = () => {
  return useMutation({
    mutationFn: submitContactForm,
  });
};
