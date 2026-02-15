export type Project = {
    title: string
    description: string
    techStack: string[]
    status: "Work in Progress" | "Completed" | "Beta" | "Learning"
    highlights?: string[]
    githubLink?: string
    demoLink?: string
}