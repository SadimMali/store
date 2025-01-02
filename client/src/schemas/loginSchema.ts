import { z } from "zod";

const usernameSchema = z.string().min(3, "Username must be at least 3 characters long");
const emailSchema = z.string().email("Invalid email address");

export const loginSchema = z.object({
  identifier: z.union([usernameSchema, emailSchema]),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});
