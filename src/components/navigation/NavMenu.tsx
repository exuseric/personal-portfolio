import links from "@/components/navigation/menu-links"
import { useEffect, useState } from "react"
import { Link } from "react-aria-components"

export default function NavMenu() {
    const [hash, setHash] = useState<string>("")

    useEffect(() => {
        const updateHash = () => setHash(window.location.hash)
        updateHash()
        window.addEventListener("hashchange", updateHash)

        return () => window.removeEventListener("hashchange", updateHash)
    }, [])

    return (
        <nav id="desktop-nav" className="nav__menu flex items-center justify-end gap-x-2 w-full">
            {links.map((link) => (
                <Link
                    key={link.url}
                    href={link.url}
                    data-active={link.url === hash ? "" : undefined}
                    className={({ isPressed }) =>
                        [
                            isPressed ? "button button--primary scale-[0.95]" : "button button--ghost scale-[1]",
                            "data-active:button--active",
                        ].join(" ")
                    }
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    )
}
