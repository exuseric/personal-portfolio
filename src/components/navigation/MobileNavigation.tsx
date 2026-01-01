import links from "@/components/navigation/menu-links"
import { HugeiconsIcon } from "@hugeicons/react"
import { useEffect, useState } from "react"
import { Link } from "react-aria-components"

export default function MobileNavigation() {
    const [hash, setHash] = useState<string>("")

    useEffect(() => {
        const updateHash = () => {
            setHash(window.location.hash || "/")
        }

        updateHash()
        window.addEventListener("hashchange", updateHash)
        return () => window.removeEventListener("hashchange", updateHash)
    }, [])

    return (
        <header className="md:hidden fixed z-50 h-20 inset-x-0 bottom-0 w-full border-t border-t-gray-300/50 overflow-hidden">
            <nav
                id="mobile-nav"
                className="flex flex-row items-center justify-between gap-4 glass px-4 pt-4 pb-safe-bottom h-full w-full"
            >
                {links.map((link) => (
                    <Link
                        key={link.url}
                        href={link.url}
                        className={({ isPressed }) =>
                            [
                                isPressed ? "scale-[0.9]" : "scale-[1]",
                                "flex flex-col items-center justify-center text-sm data-active:text-brand data-active:font-medium group",
                            ].join(" ")
                        }
                        // className="flex flex-col items-center justify-center text-sm data-active:text-brand data-active:font-medium group"
                        data-active={link.url === hash ? "" : undefined}
                    >
                        <span className="group-data-active:bg-surface-brand-subtle group-data-active:border group-data-active:border-brand/50 group-data-active:text-brand py-1 px-3 flex place-content-center w-full squircle rounded-full">
                            <HugeiconsIcon icon={link.icon} className="w-6 h-6" />
                        </span>
                        {link.label}
                    </Link>
                ))}
            </nav>
        </header>
    )
}
