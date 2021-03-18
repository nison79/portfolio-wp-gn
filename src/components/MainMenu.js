import React from 'react'
import Logo from '../components/Logo'
import { graphql , StaticQuery , Link } from 'gatsby'
import styled from 'styled-components'

const MainMenuWrapper = styled.div`
  display:flex;
  background-color: #eeeeee;
  
`

const MainMenuInner = styled.div`
  max-width: 100%;
  margin:0 auto;
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
  height:100%;
`

const MainMenuInner2 = styled.div`
  max-width: 100%;
  display:flex;
  flex-flow:right;
  align-items:center;
`

const MenuItem = styled(Link)`
  color:black;
  display:block;
  padding: 8px 16px;
  text-decoration:none;
  transition: 0.2s ease-in-out ;
  &:hover {
    transform:scale(1.2);
    border-left:1px solid black;
  }
`


const MainMenu = () => {
  return (
    <StaticQuery query={graphql`
      {
        allWordpressWpApiMenusMenusItems(filter:{
          name: {
            eq:"Main Menu"
          }
            }) {
              edges {
                node {
                  name
                  items {
                    title
                    object_slug
                  }
                }
              }
        }
      }
    
    `} render={props => (
      <MainMenuWrapper>
        <MainMenuInner>
          <Logo/>
          {/* <SiteInfo /> */}
          <MainMenuInner2>
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
              <MenuItem to = {`/${item.object_slug}`} key={item.title}>
                {item.title}
              </MenuItem>
              
            ))}
            </MainMenuInner2>
        </MainMenuInner>
      </MainMenuWrapper>  
    )} />
  )
}

export default MainMenu
