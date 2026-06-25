import { z } from "zod";

/** Shared by the client form and the API route so validation stays in sync. */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.email("Please enter a valid email address."),
  company: z.string().trim().max(120).optional(),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more — at least 10 characters.")
    .max(4000, "That's a bit long — please keep it under 4000 characters."),
  // Honeypot: real users never fill this; bots often do. Kept permissive
  // here so a tripped bot passes validation and can be silently accepted
  // by the route (rather than getting a revealing error).
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type FieldErrors = Partial<Record<keyof ContactInput, string>>;

/** Version-robust mapping of zod issues to a flat field -> message map. */
export function toFieldErrors(error: z.ZodError): FieldErrors {
  const out: FieldErrors = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !(key in out)) {
      out[key as keyof ContactInput] = issue.message;
    }
  }
  return out;
}
