/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import MainMenu from "../components/MainMenu"
import styled , { createGlobalStyle } from 'styled-components'
import Favicon from '../components/Favicon'


const GlobalStyles = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

  body {
    font-family: 'Poppins' , sans-serif;
    margin:0 !important;
    padding:0 !important;
  }

`

const LayoutWrapper = styled.div`
  max-width:960px;
  margin: 0 auto;
`




const Layout = ({ children }) => {

  return (
    <div>
      <Favicon />
      <GlobalStyles />
      <MainMenu />
      <LayoutWrapper>
        {children}
      </LayoutWrapper>
    </div>
  )
}


export default Layout
