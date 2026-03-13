import { z } from "zod";

const baseSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  guests: z.union([z.number(), z.string()]),
});

export const roomBookingSchema = baseSchema.extend({
  type: z.literal("room"),
  selectedRoom: z.string(),
  selectedInstance: z.string(),
  checkIn: z.number({ message: "Please select a check-in date" }),
  checkOut: z.number({ message: "Please select a check-out date" }),
}).refine((data) => data.checkOut > data.checkIn, {
  message: "Check-out date must be after check-in date",
  path: ["checkOut"],
});

export const diningBookingSchema = baseSchema.extend({
  type: z.literal("dining"),
  selectedDiningArea: z.string(),
  selectedTable: z.string(),
  diningDate: z.number({ message: "Please select a date" }),
  diningTime: z.number({ message: "Please select a time" }),
});

export const bookingSchema = z.discriminatedUnion("type", [
  roomBookingSchema,
  diningBookingSchema,
]);

export type BookingFormData = z.infer<typeof bookingSchema>;
