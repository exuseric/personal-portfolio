import { Link } from "react-aria-components"

export default function Projects() {
    return (
        <section className="layout-grid py-container-block rounded-t-[6rem] rounded-b-[6rem] md:rounded-t-[12rem] md:rounded-b-[12rem] squircle bg-surface-brand-subtle">
            <h2 className="mb-8 flex flex-row items-center justify-start gap-x-3">
                <span className="text-base text-neutral-subtle animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.29em" height="1.2em" viewBox="0 0 18 14">
                        <path
                            fill="currentColor"
                            d="m5.243 6.657l-4.95-4.95A1 1 0 1 1 1.707.293L7.364 5.95a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414zM9 11h8a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2"
                        />
                    </svg>
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
                                <h3 className="text-lg font-bold mb-0!">Restaurant Website</h3>
                                <div className="grid grid-cols-[1fr_auto] md:flex md:flex-row items-center gap-x-2 w-full">
                                    <Link href="https://example.com" className="button button--neutral" target="_blank">
                                        <span>Live Demo</span>
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1.2em"
                                                height="1.2em"
                                                viewBox="0 0 24 24"
                                                aria-hidden="false"
                                                focusable="false"
                                            >
                                                <path
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"
                                                />
                                            </svg>
                                        </span>
                                    </Link>
                                    <Link href="https://example.com" className="icon-button">
                                        <span className="text-lg">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1.2em"
                                                height="1.2em"
                                                viewBox="-2 -2 24 24"
                                                aria-hidden="false"
                                                focusable="false"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M18.88 1.099Q17.78-.001 16.233 0H3.746Q2.198 0 1.099 1.099Q-.001 2.199 0 3.746v12.487q0 1.548 1.099 2.647q1.1 1.1 2.647 1.099H6.66q.285 0 .429-.02a.5.5 0 0 0 .286-.169q.143-.15.143-.435l-.007-.885q-.006-.846-.006-1.34l-.3.052q-.285.052-.721.046a5.6 5.6 0 0 1-.904-.091a2 2 0 0 1-.872-.39a1.65 1.65 0 0 1-.572-.8l-.13-.3a3.3 3.3 0 0 0-.41-.663q-.28-.364-.566-.494l-.09-.065a1 1 0 0 1-.17-.156a.7.7 0 0 1-.117-.182q-.039-.092.065-.15q.104-.06.378-.059l.26.04q.26.051.643.311a2.1 2.1 0 0 1 .631.677q.3.532.722.813q.423.28.852.28t.742-.065a2.6 2.6 0 0 0 .585-.196q.117-.871.637-1.34a9 9 0 0 1-1.333-.234a5.3 5.3 0 0 1-1.223-.507a3.5 3.5 0 0 1-1.047-.872q-.416-.52-.683-1.365q-.266-.846-.266-1.952q0-1.573 1.027-2.68q-.48-1.183.091-2.652q.378-.118 1.119.175t1.086.5q.345.21.553.352a9.2 9.2 0 0 1 2.497-.338q1.288 0 2.498.338l.494-.312a7 7 0 0 1 1.197-.572q.689-.26 1.054-.143q.585 1.47.103 2.653q1.028 1.105 1.028 2.68q0 1.106-.267 1.957q-.266.852-.689 1.366a3.7 3.7 0 0 1-1.053.865q-.63.351-1.223.507a9 9 0 0 1-1.333.235q.675.585.676 1.846v3.11q0 .22.065.357a.36.36 0 0 0 .208.189q.143.052.254.064q.111.014.318.013h2.914q1.548 0 2.647-1.099t1.099-2.647V3.746q0-1.548-1.1-2.647z"
                                                />
                                            </svg>
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
