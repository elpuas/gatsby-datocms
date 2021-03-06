import { graphql } from "gatsby";
import Blocks from "../components/structures/blocks";
import Heading from "../components/bricks/heading";
import Layout from '../components/structures/layout';
import React, { Fragment } from "react";

export default function Page( { data } ) {
    const { title, content, slug } = data.datoCmsPage;
    return (
        <Fragment>
            <Layout>
                <article className={`page-${slug}`}>
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
query PageQuery($slug: String!) {
    datoCmsPage( slug: { eq: $slug } ) {
        title
        slug
        content {
            ... on DatoCmsContentBlock {
                id
                content
                model {
                    apiKey
                }
            }
            ... on DatoCmsTwoColumnBlock {
                id
                blockContent
                blockImage {
                    alt
                    gatsbyImageData(
                        placeholder: BLURRED,
                        forceBlurhash: false,
                        height: 500,
                    )
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
                    gatsbyImageData(
                        placeholder: BLURRED,
                        forceBlurhash: false,
                        height: 500
                    )
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
            ... on DatoCmsArticleContent {
                flexibleContent {
                    value
                }
                model {
                    apiKey
                }
            }
            ... on DatoCmsImageBlock {
                image {
                    alt
                    gatsbyImageData
                }
                model {
                    apiKey
                }
            }
            ... on DatoCmsContactBlock {
                model {
                apiKey
                }
                available
                heading
                link {
                    ... on DatoCmsPage {
                        slug
                        title
                    }
                    ... on DatoCmsArticle {
                        id
                        slug
                        title
                    }
                    ... on DatoCmsCategory {
                        categoryTitle
                        slug
                    }
                }
                subheading
            }
        }
    }
}
`;