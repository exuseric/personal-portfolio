export const prerender = false; // Not needed in 'server' mode
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    const formData = await request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Validate the data
    if (!name || !email || !message) {
        return new Response(
            JSON.stringify({
                message: "Missing required fields",
            }),
            { status: 400 }
        );
    }

    const data = JSON.stringify({
        sender: { name: "Eric Gathoni", email: "info@ericmaina.me" },
        to: [{ name: "Eric Gathoni", email: "ericmaina.gathoni@gmail.com" }],
        subject: "Feedback from your website",
        htmlContent: `<table cellpadding="0" cellspacing="0" border="0" style="width:100%; font-family:Arial, sans-serif; font-size:14px; color:#000;">
                            <tr>
                                <td style="padding:8px 0;"><strong>From Name:</strong> ${name}</td>
                            </tr>
                            <tr>
                                <td style="padding:8px 0;"><strong>From Email:</strong> <span style="color:purple;">${email}</span></td>
                            </tr>
                            <tr>
                                <td style="padding:8px 0;"><strong>Message:</strong><br>
                                ${message}
                                </td>
                            </tr>
                        </table>`,
    });

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
            "api-key": import.meta.env.BREVO_API_KEY,
            "Content-Type": "application/json",
            "Accept": "application/json",
            //"X-Sib-Sandbox": "drop", // Enables Sandbox mode
        },
        body: data
    });

    if (!res.ok) {
        const error = await res.json();
        console.error("Brevo error:", error);
        return new Response(JSON.stringify({ success: false, error }), { status: 500 });
    }

    // Do something with the data, then return a success response
    return new Response(JSON.stringify({ success: true }), { status: 200 });
};