import React, { Fragment } from "react";
import { graphql } from "gatsby";
import Layout from "../components/molecules/layout";

// markup
const IndexPage = ( { data } ) => {
  return (
    <>
    <Layout>
      <pre>{JSON.stringify(data.home, null, 2)}</pre>
    </Layout>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
query {
    home: allDatoCmsHome {
    nodes {
      legend
      link {
        title
        slug
      }
      videoExcerpt
      videoUrl
      selectedPosts {
        slug
        title
      }
    }
  }
}
`;
