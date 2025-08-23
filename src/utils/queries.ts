export const heroQuery = `query Page {
  homePage(where: {id: "cmeiatztyw3u307mokyk6cej7"}) {
    hero {
      heading
      subheading
      description
      cta {
        title
        link
        type
      }
    }
  }
}`;

export const faqQuery = `query Page {
  homePage(where: {id: "cmeiatztyw3u307mokyk6cej7"}) {
    faq {
      heading
      question {
        question
        answer {
          html
        }
      }
    }
  }
}`

export const aboutQuery = `query Page {
  homePage(where: {id: "cmeiatztyw3u307mokyk6cej7"}) {
    about {
      body {
        html
      }
      heading
      id
      cta {
        link
        title
        id
      }
    }
  }
}`

export const projectsQuery = `query Page {
  homePage(where: {id: "cmeiatztyw3u307mokyk6cej7"}) {
    projects {
      heading
      id
      project {
        body {
          html
        }
        cover {
          height
          width
          url
        }
        heading
        cta {
          link
          title
        }
      }
    }
  }
}`

export const contactQuery = `query Page {
  homePage(where: {id: "cmeiatztyw3u307mokyk6cej7"}) {
    contact {
      body {
        html
      }
      heading
      id
    }
  }
}`