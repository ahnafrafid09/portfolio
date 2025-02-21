import * as z from "zod";

export const ContactSchema = z.object({
  firstname: z.string().min(1, { message: "Firstname is required" }),
  lastname: z.string().optional(),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email format" }),
  service: z.string(),
  message: z.string().min(1, { message: "Message is required" }),
  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .min(5, { message: "Phone number minimun 5 character" }),
});
