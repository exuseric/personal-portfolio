export default async function receiveFeedback({name, email, message}) {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "api-key": import.meta.env.BREVO_API_KEY,
            "Accept": "application/json",
            "X-Sib-Sandbox": "drop", // Enables Sandbox mode
        },
        body: JSON.stringify({
            sender: { name: import.meta.env.SENDER_NAME, email: import.meta.env.SENDER_EMAIL },
            to: [{ name: import.meta.env.RECEIVER_NAME, email: import.meta.env.RECEIVER_EMAIL }],
            subject: "Feedback from your website",
            htmlContent: `<table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-family: Arial, sans-serif; font-size: 14px; color: #333333; border-collapse: collapse;">
                <tr>
                    <td style="padding: 10px 0; vertical-align: top; width: 120px;">
                        <span style="font-weight: 600; color: #555555;">From Name:</span>
                    </td>
                    <td style="padding: 10px 0; vertical-align: top;">
                        ${name}
                    </td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; vertical-align: top; border-top: 1px solid #f0f0f0; width: 120px;">
                        <span style="font-weight: 600; color: #555555;">From Email:</span>
                    </td>
                    <td style="padding: 10px 0; vertical-align: top; border-top: 1px solid #f0f0f0;">
                        <a href="mailto:${email}" style="color: #4a6ee0; text-decoration: none;">${email}</a>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="padding: 10px 0; border-top: 1px solid #f0f0f0;">
                        <span style="font-weight: 600; color: #555555; display: block; margin-bottom: 8px;">Message:</span>
                        <div style="line-height: 1.5; background-color: #f9f9f9; padding: 12px; border-radius: 4px; margin-top: 5px;">
                            ${message}
                        </div>
                    </td>
                </tr>
            </table>`,
        })
    })

    if (!res.ok) {
        const error = await res.json();
        console.error("Brevo error:", error);
        return new Response(JSON.stringify({ success: false, error }), { status: 500 });
    }

    const data = await res.json();
    return new Response(JSON.stringify({ success: true }), { status: 200 });
}