export interface Projects {
    title: string,
    subtitle: string,
    description: string,
    deploy: string,
    githubLink: string,
    projectImage: string,
    technologies: [
        {
            technology: string,
            image: string
        }
    ]
}