import { contactFormValidation } from "@/utils/zod-validation-objects";
import { defineAction } from "astro:actions";
const options = {
  method: "POST",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    "api-key": import.meta.env.EMAIL_API_KEY,
    // "X-Sib-Sandbox": "drop", // Enables Sandbox mode
  },
};

export const contact = {
  sendToMe: defineAction({
    accept: "form",
    input: contactFormValidation,
    handler: async (input) => {
      const res = await fetch(import.meta.env.EMAIL_BASE_URL, {
        ...options,
        body: JSON.stringify({
          to: [
            {
              name: import.meta.env.DEFAULT_NAME,
              email: import.meta.env.DEFAULT_EMAIL,
            },
          ],
          subject: "Feedback from your website",
          templateId: 2,
          params: {
            name: input.name,
            email: input.email,
            message: input.message,
            inquiry: input.inquiry
          },
        }),
      })
        .then((res) => res.json())
        .then((res) => ({ success: true, error: null }))
        .catch((err) => ({ success: false, error: err }));

      return res;
    },
  }),

  sendAutoReply: defineAction({
    accept: "form",
    input: contactFormValidation,
    handler: async (input) => {
      const res = await fetch(import.meta.env.EMAIL_BASE_URL, {
        ...options,
        body: JSON.stringify({
          to: [
            {
              name: input.name,
              email: input.email,
            },
          ],
          subject: "Feedback from your website",
          templateId: 1,
        }),
      })
        .then((res) => res.json())
        .then((res) => ({ success: true, error: null }))
        .catch((err) => ({ success: false, error: err }));

      return res;
    },
  }),
};
