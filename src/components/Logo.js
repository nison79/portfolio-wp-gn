import React from 'react'
import { graphql , StaticQuery } from 'gatsby'
import styled from 'styled-components'

const LogoStyle = styled.img`
  width:50px;
  margin:8px;
  margin-right:16px
`

const Logo = () => {
  return (
    <StaticQuery query={graphql`
    {
      allWordpressWpLogo {
        edges {
          node {
            url {
              source_url
              slug
            }
          }
        }
      }
    }

    
    
    
    `} render={props => (
      
      <LogoStyle src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt="logo" />
    )}>
      
    </StaticQuery>
  )
}

export default Logo
