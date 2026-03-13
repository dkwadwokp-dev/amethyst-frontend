import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy terms",
  }),
});

export const homepageContactSchema = contactSchema.omit({ privacy: true });

export type ContactFormData = z.infer<typeof contactSchema>;
export type HomepageContactFormData = z.infer<typeof homepageContactSchema>;
