import { z } from "zod";

export const checkBookingSchema = z.object({
  reference: z.string().min(4, "Booking reference must be at least 4 characters"),
  identifier: z.string().min(2, "Last name or email is required"),
});

export type CheckBookingFormData = z.infer<typeof checkBookingSchema>;
