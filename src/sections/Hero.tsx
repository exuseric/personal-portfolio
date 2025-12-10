import SocialButtons from "@/components/navigation/SocialButtons"
import { Link } from "react-aria-components"

export default function Hero() {
    return (
        <header className="w-full h-fit py-32 container">
            <article className="flex flex-col items-start justify-start gap-y-1">
                <h1 className="text-5xl font-semibold text-brand max-w-prose">Hey! I'm Eric Gathoni</h1>
                <p>
                    <em className="text-brand">A Frontend Developer based in Nairobi, Kenya.</em> My focus is on
                    bridging modern frontend development (e.g., React, TypeScript, Next.js) with robust, scalable
                    backend services.
                </p>
                <p>
                    I am dedicated to building inclusive, high-performance web platforms that prioritize accessibility
                    and exceptional user experience.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-start gap-x-2 gap-y-2 mt-8 w-full">
                    <Link
                        href="/#projects"
                        className={`${({ isPressed }) => (isPressed ? "text-brand" : "text-current")} flex items-center justify-center gap-x-3 capitalize bg-surface-brand text-on-brand hover:bg-accent hover:text-on-accent py-3 pl-5 pr-4 focus-visible:bg-surface-brand focus-visible:text-on-brand w-full md:w-fit text-center`}
                    >
                        Let's build something
                        <span>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.29em"
                                height="1em"
                                viewBox="0 0 18 14"
                            >
                                <path
                                    fill="currentColor"
                                    d="m5.243 6.657l-4.95-4.95A1 1 0 1 1 1.707.293L7.364 5.95a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414zM9 11h8a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2"
                                />
                            </svg>
                        </span>
                    </Link>
                    <SocialButtons />
                </div>
            </article>
        </header>
    )
}
