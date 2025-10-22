export const heroQuery = `query Page {
  homePage(where: {id: "${import.meta.env.ASTRO_HYGRAPH_HOMEPAGE_ID}"}) {
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

export const faqQuery = `query FAQ {
  faq(where: {id: "${import.meta.env.ASTRO_HYGRAPH_FAQ_ID}"}) {
    heading
    jsonLd
    faq {
      question
      answer {
        html
      }
    }
  }
}`

export const aboutQuery = `query Page {
  homePage(where: {id: "${import.meta.env.ASTRO_HYGRAPH_HOMEPAGE_ID}"}) {
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
  homePage(where: {id: "${import.meta.env.ASTRO_HYGRAPH_HOMEPAGE_ID}"}) {
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

export const contactQuery = `query Contact {
  contact(where: {id: "${import.meta.env.ASTRO_HYGRAPH_CONTACT_ID}"}) {
    heading
    content {
      html
    }
  }
}`