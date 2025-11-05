import { contactFormValidation } from "@/utils/zod-validation-objects"
import { defineAction } from "astro:actions"
import sendEmail from "./utils/send-email"

export const contact = {
    sendMessage: defineAction({
        accept: "form",
        input: contactFormValidation,
        handler: async (input) => {
            try {
                // Send message to me (critical)
                const adminResult = await sendEmail({
                    to: [
                        {
                            name: import.meta.env.DEFAULT_NAME,
                            email: import.meta.env.DEFAULT_EMAIL,
                        },
                    ],
                    templateId: 2,
                    params: {
                        name: input.name,
                        email: input.email,
                        message: input.message,
                        inquiry: input.inquiry,
                    },
                })
                if (!adminResult.success) {
                    throw new Error(adminResult.error?.message || "Failed to send admin email")
                }

                // Send user confirmation (non-critical)
                const userResult = await sendEmail({
                    to: [
                        {
                            name: input.name,
                            email: input.email,
                        },
                    ],
                    templateId: 1,
                })
                if (!userResult.success) {
                    console.warn("User confirmation failed:", userResult.error?.message)
                }

                return { success: true }
            } catch (err) {
                return { success: false, error: err.message }
            }
        },
    }),
}
