import { z } from "zod";

export const addOfficerSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
    email: z.string().email("Invalid email address"),
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    profile: z.object({
        role: z.string().min(1, "Role is required"),
        location: z.string().min(1, "Location is required"),
        zone: z.string().min(1, "Zone is required"),
        state: z.string().min(1, "State is required"),
        area: z.string().min(1, "Area is required"),
        unit: z.string().min(1, "Unit is required"),
    }),
});

export type AddOfficerFormData = z.infer<typeof addOfficerSchema>;