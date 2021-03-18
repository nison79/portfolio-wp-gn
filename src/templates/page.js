import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'

const PageWrapper = styled.div`
  display:flex;
  align-items:center;
  height:100vh;
`

const Title = styled.h1`
  font-size:3rem;
  font-weight:500;
  letter-spacing:-3px;
`

const TextSpan = styled.span`
  color:violet;
  font-weight:bold;
  letter-spacing:0px;
`

export default ({ pageContext }) => (
  <Layout>
    <PageWrapper>
      <Title>Design <TextSpan>&</TextSpan> Development in the   <TextSpan>Web</TextSpan>.
      </Title>
      
      <div dangerouslySetInnerHTML={{__html: pageContext.content}}  />
    </PageWrapper>
  </Layout>
);