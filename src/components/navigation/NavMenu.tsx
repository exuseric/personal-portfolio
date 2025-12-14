import data from "@/data/navigation.json"
import { Link } from "react-aria-components"
const { nav } = data
import SocialButtons from "./SocialButtons.tsx"

export default function NavMenu() {
    return (
        <nav className="nav__menu flex items-center justify-end gap-x-2 w-full" aria-label="Main Navigation">
            {nav.links.map((link) => (
                <Link
                    key={link.url}
                    href={link.url}
                    className={`${({ isPressed }) => (isPressed ? "button button--primary" : "button button--neutral")} button button--ghost`}
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    )
}
