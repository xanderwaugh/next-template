import { z } from "zod";

export const formSchema = z.object({
  first: z
    .string()
    .min(2, { message: "First name is too short" })
    .max(50, { message: "First name is too long" }),
  last: z
    .string()
    .min(1, { message: "Last name is too short" })
    .max(50, { message: "Last name is too long" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number is too short" })
    .max(15, { message: "Phone number is too long" }),
  message: z.string().max(1000, { message: "Message is too long" }).optional(),
});

export type ContactFormData = z.infer<typeof formSchema>;

export const validateForm = (data: unknown) => {
  const parsed = formSchema.safeParse(data);
  if (!parsed.success) {
    return parsed.error.issues;
  }
  return parsed.success;
};
