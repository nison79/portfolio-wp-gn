import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const FavIcon = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpFavicon {
        nodes {
          url{
            source_url
          }
        }
      }
    }
  `)
  return (
    <>
      <Helmet>
        <link rel="icon" href={data.allWordpressWpFavicon.nodes[0].url.source_url} />
      </Helmet>
    </>
  )
}

export default FavIcon