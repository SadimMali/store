import { loginSchema } from "@/schemas/loginSchema";
import {z} from "zod";

//type
export type LoginSchema = z.infer<typeof loginSchema>;