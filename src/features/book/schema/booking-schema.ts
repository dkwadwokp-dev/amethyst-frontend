import { z } from "zod";

const baseSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  guests: z.union([z.number(), z.string()]),
});

export const roomBookingSchema = baseSchema
  .extend({
    type: z.literal("room"),
    itemType: z.string(),
    item: z.string(),
    checkIn: z.string({ message: "Please select a check-in date" }),
    checkOut: z.string({ message: "Please select a check-out date" }),
  })
  .refine((data) => new Date(data.checkOut) > new Date(data.checkIn), {
    message: "Check-out date must be after check-in date",
    path: ["checkOut"],
  });

export const diningBookingSchema = baseSchema
  .extend({
    type: z.literal("dining"),
    itemType: z.string(),
    item: z.string(),
    diningDate: z.string({ message: "Please select a date" }),
    arrivalHour: z
      .number({ message: "Please select an arrival time" })
      .min(8)
      .max(23),
    departureHour: z
      .number({ message: "Please select a departure time" })
      .min(8)
      .max(23),
  })
  .refine((data) => data.departureHour > data.arrivalHour, {
    message: "Departure must be after arrival",
    path: ["departureHour"],
  })
  .refine((data) => data.departureHour - data.arrivalHour <= 3, {
    message: "Maximum duration is 3 hours",
    path: ["departureHour"],
  });

export const bookingSchema = z.discriminatedUnion("type", [
  roomBookingSchema,
  diningBookingSchema,
]);

export type BookingFormData = z.infer<typeof bookingSchema>;
