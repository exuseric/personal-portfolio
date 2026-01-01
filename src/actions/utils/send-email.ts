type EmailBody = {
    to: {
        name: string
        email: string
    }[]
    templateId: number
    params?: {
        name: string
        email: string
        message: string
        inquiry?: string
    }
}

const sendEmail = async (body: EmailBody) => {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000)

    try {
        const res = await fetch(import.meta.env.EMAIL_BASE_URL, {
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
                "api-key": import.meta.env.EMAIL_API_KEY,
                // "X-Sib-Sandbox": "drop", // Enables Sandbox mode
            },
            signal: controller.signal,
            body: JSON.stringify(body),
        })

        clearTimeout(timeoutId)

        if (!res.ok || res.status !== 201) {
            const errorData = await res.json().catch(() => ({
                message: res.statusText,
            }))
            return { success: false, error: errorData }
        }
        return { success: true, error: null }
    } catch (err) {
        clearTimeout(timeoutId)
        const isTimeout = err.name === "AbortError"
        return {
            success: false,
            error: {
                message: isTimeout ? "Request timeout" : err.message || "Unknown error",
            },
        }
    }
}

export default sendEmail
