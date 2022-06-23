import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMenu() {
  const data = useStaticQuery(graphql`
    query getMenu {
      site {
        siteMetadata {
          title
          description
          repoUrl
          infoData {
            contact {
              email
              github_handle
              twitter_handle
            }
            cta
            description
            background_color
          }
        }
      }
    }
  `)
  return data.site.siteMetadata
}
