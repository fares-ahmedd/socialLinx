import { z } from "zod";

export const SignupValidation = z.object({
  name: z.string().min(4, { message: "name must be 4 characters or longer" }),
  username: z
    .string()
    .min(2, { message: "username must be 3 characters or longer" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "password must be 8 characters or longer" }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "password must be 8 characters or longer" }),
});
export const PostValidation = z.object({
  caption: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2, { message: "Please select a country" }).max(100),
  tags: z.string(),
});
