import SocialButtons from "@/components/shared/SocialButtons.tsx"
import { CodeFolderIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Link } from "react-aria-components"
import { usePress } from "react-aria"
import { useState } from "react"

export default function Hero() {
    return (
        <header className="w-full h-fit py-container-block layout-grid">
            <article className="flex flex-col items-start justify-start gap-y-1">
                <h1 className="text-5xl font-semibold text-brand max-w-prose">Hey! I'm Eric Gathoni</h1>
                <p>
                    <em className="text-brand">A web developer based in Nairobi, Kenya.</em> My focus is on bridging
                    modern frontend development (e.g., React, TypeScript, Next.js) with robust, scalable backend
                    services.
                </p>
                <p>
                    I am dedicated to building inclusive, high-performance web platforms that prioritize accessibility
                    and exceptional user experience.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-start gap-x-2 gap-y-2 mt-8 w-full">
                    <Link
                        href="/#projects"
                        className={({ isPressed }) =>
                            isPressed ? "button button--primary scale-[0.95]" : "button button--neutral scale-[1]"
                        }
                    >
                        Let's build something
                        <span>
                            <HugeiconsIcon icon={CodeFolderIcon} />
                        </span>
                    </Link>
                    <SocialButtons />
                </div>
            </article>
        </header>
    )
}
