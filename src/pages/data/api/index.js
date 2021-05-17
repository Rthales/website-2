import React from 'react'
import { graphql } from 'gatsby'
import ChangeLog from '~components/pages/data/api/change-log'
import ContentfulContent from '~components/common/contentful-content'
import ApiExplorer from '~components/pages/data/api/explorer'
import LongContent from '~components/common/long-content'
import Layout from '~components/layout'

const DataApiPage = ({ data }) => {
  return (
    <Layout title="Data API" path="/data/api">
      <LongContent>
        <ChangeLog />
        <ContentfulContent
          content={
            data.contentfulSnippet.childContentfulSnippetContentTextNode
              .childMarkdownRemark.html
          }
          id={data.contentfulSnippet.contentful_id}
        />
      </LongContent>
    //Old key : ee6c325b-bd45-4c6e-a40f-8e0b53824e3e
      <h2>API domain name</h2>
      <p>
        All API requests should be made to:{' '}
        <strong>
          <code>https://api.covidtracking.com</code>
        </strong>
        with the key:{' '}
        <strong>
          <code>1ab1ada4-c9dc-4150-8304-35cef12aa733</code>
        </strong>
      </p>
      <ApiExplorer />
    </Layout>
  )
}

export default DataApiPage

export const query = graphql`
  query {
    contentfulSnippet(slug: { eq: "api-preamble" }) {
      contentful_id
      childContentfulSnippetContentTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
