import { z } from "astro:schema"

export const contactFormValidation = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must be at least 2 characters long.")
        .max(100, "Name must be under 100 characters."),

    email: z.string().trim().email("Please enter a valid email address (e.g., mail@example.com)."),

    inquiry: z.string().optional(),

    message: z
        .string()
        .trim()
        .min(10, "Your message must be at least 10 characters long.")
        .max(1000, "Message is too long — please keep it under 1000 characters."),
})

export type ContactForm = z.infer<typeof contactFormValidation>
