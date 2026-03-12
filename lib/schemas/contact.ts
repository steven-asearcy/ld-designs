import { z } from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be 100 characters or fewer"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .refine((val) => !val || isValidPhoneNumber(val), {
      message: "Please enter a valid phone number",
    })
    .or(z.literal(""))
    .optional(),
  message: z
    .string()
    .min(1, "Message is required")
    .max(5000, "Message must be 5,000 characters or fewer"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
