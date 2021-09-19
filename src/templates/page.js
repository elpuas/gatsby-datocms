import React, { Fragment } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Blocks from "../components/molecules/blocks";
import Heading from "../components/atoms/heading";
import Layout from '../components/atoms/layout';

export default function Page( { data } ) {
    const { pageTitle, pageContent, slug } = data.page.nodes[0];

    return (
        <Fragment>
            <Layout>
                <article className={`section-${slug}`}>
                    <Heading content={ pageTitle } level="1" />
                    <section className={``}>
                        <Blocks blocks={ pageContent } />
                    </section>
                </article>
            </Layout>
        </Fragment>
    )
}

export const pageQuery = graphql`
query {
    page: allDatoCmsPage {
        nodes {
            slug
            pageTitle
            pageContent {
                ... on DatoCmsTwoColumnBlock {
                    id
                    blockContent
                    blockImage {
                        alt
                        gatsbyImageData
                    }
                    model {
                        apiKey
                    }
                }
                ... on DatoCmsCallToActionBlock {
                    id
                    model {
                        apiKey
                    }
                    content
                    eyebrow
                    image {
                        alt
                        gatsbyImageData(height: 500)
                    }
                    callToAction {
                        ... on DatoCmsPage {
                            slug
                            pageTitle
                        }
                        ... on DatoCmsArticle {
                            id
                            title
                            slug
                        }
                    }
                }
            }
        }
    }
}
`;