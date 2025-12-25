import { CodeFolderIcon, Github01FreeIcons, LinkSquare01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Link } from "react-aria-components"

export default function Projects() {
    return (
        <section
            id="projects"
            className="layout-grid py-container-block rounded-t-[6rem] rounded-b-[6rem] md:rounded-t-[12rem] md:rounded-b-[12rem] squircle bg-surface-brand-subtle"
        >
            <h2 className="mb-8 flex flex-row items-center justify-start gap-x-3">
                <span className="text-base text-neutral-subtle animate-pulse">
                    <HugeiconsIcon icon={CodeFolderIcon} />
                </span>
                Projects
            </h2>
            <ul className="flex flex-col gap-y-4 items-start my-8">
                <li className="w-full">
                    <div className="w-full min-h-96 grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 items-center auto-rows-min gap-8">
                        <div className="w-full h-96 rounded-2xl bg-surface-subtle"></div>
                        <article className="flex flex-col gap-y-4 h-max">
                            <header className="flex flex-col gap-y-3 items-start justify-start">
                                <p className="status-badge bg-surface-brand/20 text-brand px-4 rounded-full text-sm!">
                                    In Progress
                                </p>
                                <h3 className="text-lg font-bold mb-0!">Fullstack Restaurant Website</h3>
                                <div className="grid grid-cols-[1fr_auto] md:flex md:flex-row items-center gap-x-2 w-full">
                                    <Link href="https://example.com" className="button button--neutral" target="_blank">
                                        <span>Live Demo</span>
                                        <span>
                                            <HugeiconsIcon icon={LinkSquare01Icon} />
                                        </span>
                                    </Link>
                                    <Link href="https://example.com" className="icon-button">
                                        <span className="text-lg">
                                            <HugeiconsIcon icon={Github01FreeIcons} />
                                        </span>
                                    </Link>
                                </div>
                            </header>
                            <p className="text-base">
                                This Next.js/TypeScript restaurant website prioritizes performance and scalability,
                                utilizing PostgreSQL for data management.
                            </p>
                            <p>
                                It employs a Fluent Repository Pattern for clean data access and integrates PostgreSQL's
                                native tsvector for delivering high-speed, efficient full-text search functionality.
                            </p>
                            <ul
                                aria-label="Project Technologies"
                                className="flex flex-row items-center justify-start flex-wrap gap-2 text-sm"
                            >
                                <li className="py-1 px-4 bg-surface-brand-subtle border-border-default border rounded-full">
                                    React
                                </li>
                                <li className="py-1 px-4 bg-surface-brand-subtle border-border-default border rounded-full">
                                    Typescript
                                </li>
                                <li className="py-1 px-4 bg-surface-brand-subtle border-border-default border rounded-full">
                                    Next.js
                                </li>
                                <li className="py-1 px-4 bg-surface-brand-subtle border-border-default border rounded-full">
                                    PostgreSQL
                                </li>
                            </ul>
                        </article>
                    </div>
                </li>
            </ul>
        </section>
    )
}
