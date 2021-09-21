import React, { Fragment } from "react";
import { graphql } from "gatsby";
import Blocks from "../components/molecules/blocks";
import Heading from "../components/atoms/heading";
import Layout from '../components/molecules/layout';

export default function Page( { data } ) {
    const { title, content } = data.datoCmsPage;
    return (
        <Fragment>
            <Layout>
                <article className={``}>
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
        }
    }
}
`;