// ---
// // import style from "./navigation.module.css";
// import Button from "@/components/Button/Button.astro"
// ---
import data from "@/data/navigation.json"
import { Link } from "react-aria-components"
const { nav } = data
import SocialButtons from "./SocialButtons.tsx"

export default function NavMenu() {
    return (
        <nav className="nav__menu flex items-center justify-end gap-x-2 w-full" aria-label="Main Navigation">
            {nav.links.map((link) => (
                <Link
                    href={link.url}
                    className={`${({ isPressed }) => (isPressed ? "text-brand-default" : "text-current")} flex items-center justify-start gap-1 hover:text-brand-default py-2 px-3 focus-visible:bg-surface-brand-default focus-visible:text-on-brand-default`}
                >
                    {link.label}
                </Link>
            ))}
            <div className="social-wrapper w-fit border-l-2 border-l-surface-neutral-hover pl-4">
                <SocialButtons />
            </div>
        </nav>
    )
}

// <style></style>

// <script>
//     // import { gsap } from "gsap"
//     window.addEventListener("ToggleMenu", (event) => {
//         const menu = document.querySelector("[data-menu]") as HTMLElement
//         if (!menu) return
//         const { detail } = event as CustomEvent

//         menu.dataset.isMenuOpen = String(detail.state)

//         // let tl = gsap.timeline()

//         // tl.from(".nav__link", {
//         //     xPercent: -50,
//         //     autoAlpha: 0,
//         //     ease: "back.out",
//         //     duration: 0.5,
//         //     stagger: {
//         //         amount: 0.2,
//         //         from: "center",
//         //     },
//         // })
//     })
// </script>
