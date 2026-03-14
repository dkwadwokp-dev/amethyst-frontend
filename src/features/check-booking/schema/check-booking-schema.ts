import { z } from "zod";

export const checkBookingSchema = z.object({
  reference: z.string().min(4, "Booking reference is required"),
  email: z.string().email("Please enter a valid email address"),
});

export type CheckBookingFormData = z.infer<typeof checkBookingSchema>;
