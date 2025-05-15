export default async function sendTransaction({ name, email }) {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
            "api-key": import.meta.env.BREVO_API_KEY,
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-Sib-Sandbox": "drop", // Enables Sandbox mode
        },
        body: JSON.stringify({
            to: [{ name, email }],
            templateId: 1,
        }),
    });

    if(!res.ok) return new Response(JSON.stringify({ success: false }), { status: 500 })

    return new Response(JSON.stringify({ success: true }), { status: 200 });
}