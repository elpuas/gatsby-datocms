import React, { Fragment } from "react";
import { graphql } from "gatsby";
// TODO: import { GatsbyImage } from "gatsby-plugin-image";
import Blocks from "../components/molecules/blocks";
import Heading from "../components/atoms/heading";
import Layout from '../components/molecules/layout';

export default function Page( { data } ) {
    const { title, content, slug } = data.page.nodes[0];
    return (
        <Fragment>
            <Layout>
                <article className={`section-${slug}`}>
                    <Heading content={ title } level="1" />
                    <section>
                        <Blocks blocks={ content } />
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
            title
            content {
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
                            title
                            model {
                                apiKey
                            }
                        }
                        ... on DatoCmsArticle {
                            title
                            slug
                            model {
                                apiKey
                            }
                        }
                    }
                }
            }
        }
    }
}
`;