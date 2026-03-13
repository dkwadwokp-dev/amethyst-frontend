import { z } from "zod";

export const loginSchema = z.object({
  passcode: z.string().min(4, "Passcode must be at least 4 characters"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
