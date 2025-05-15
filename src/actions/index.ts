import { defineAction } from "astro:actions"
import { z } from "astro:schema"
import receiveFeedback from "@/actions/utils/receive-feedback"
import sendTransaction from "./utils/send-transaction"

export const server = {
    sendFeedback: defineAction({
        accept: 'form',
        input: z.object({
            name: z.string(),
            email: z.string().email(),
            message: z.string()
        }),
        handler: async ({ name, email, message }) => {
            const res = await receiveFeedback({ name, email, message })
            const data = await res.json();

            if (data.success) {
                const send = await sendTransaction({ name, email })

                if (send.ok) {
                    return { success: true }
                }
            }
        }
    })
}