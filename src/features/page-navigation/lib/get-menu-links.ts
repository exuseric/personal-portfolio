import { ICONS, SECTION_IDS } from "@/shared/lib/constants.ts"

export const links = [
    // {
    //     label: "Home",
    //     url: "/",
    //     type: "internal",
    //     icon: ICONS.home,
    // },
    {
        label: "Projects",
        url: `#${SECTION_IDS.projects}`,
        type: "internal",
        icon: ICONS.projects,
    },
    {
        label: "Contact",
        url: `#${SECTION_IDS.contact}`,
        type: "internal",
        icon: ICONS.contact,
    },
    {
        label: "Q&A",
        url: `#${SECTION_IDS.faq}`,
        type: "internal",
        icon: ICONS.faq,
    },
]