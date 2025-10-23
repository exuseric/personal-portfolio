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
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

        const res = await fetch(import.meta.env.EMAIL_BASE_URL, {
          ...options,
          signal: controller.signal,
          body: JSON.stringify({
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
              inquiry: input.inquiry
            },
          }),
        });

        clearTimeout(timeoutId);

        if (!res.ok) {
          const errorData = await res.json().catch(() => ({ message: res.statusText }));
          return { success: false, error: errorData };
        }

        await res.json();
        return { success: true, error: null };
      } catch (err) {
        return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
      }
    },
  }),

  sendAutoReply: defineAction({
    accept: "form",
    input: contactFormValidation,
    handler: async (input) => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

        const res = await fetch(import.meta.env.EMAIL_BASE_URL, {
          ...options,
          signal: controller.signal,
          body: JSON.stringify({
            to: [
              {
                name: input.name,
                email: input.email,
              },
            ],
            templateId: 1,
          }),
        });

        clearTimeout(timeoutId);

        if (!res.ok) {
          const errorData = await res.json().catch(() => ({ message: res.statusText }));
          return { success: false, error: errorData };
        }

        await res.json();
        return { success: true, error: null };
      } catch (err) {
        return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
      }
    },
  }),
};
