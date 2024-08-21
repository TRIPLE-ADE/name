import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(2, "Username is required"),
  password: z.string().min(2, "Password is required"),
});

// Define the form data types based on the Zod schema
export type LoginFormData = z.infer<typeof loginSchema>;
