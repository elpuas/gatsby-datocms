import React, { Fragment } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Blocks from "../components/molecules/blocks";
import Heading from "../components/atoms/heading";
import Layout from "../components/atoms/layout";

// import { PageWrapper, PageInner, PageTitle } from '../components/Elements';
// import { blogPostTypes } from '../types/propTypes';
// import SEO from '../components/SEO';

const BlogPost = ( { data } ) => {
    const { title, slug, content, categories, featureImage } = data.article.nodes[0];

    return (
        <Fragment>
            {/* <SEO meta={seoMetaTags} /> */}
            <Layout>
                <article className={`article-${slug}`}>
                    <Heading content={ title } level="1" />
                    <GatsbyImage image={ featureImage.gatsbyImageData }  alt={ featureImage.alt}/>
                    <div className="cat-container">
                        {categories.map( ( cat, index ) => <p key={index}>{ cat.categoryTitle }</p> ) }
                    </div>
                    <section>
                        <Blocks blocks={ content } />
                        <Link to="/">
                            <button>Go Back</button>
                        </Link>
                    </section>
                </article>
            </Layout>
        </Fragment>
    );
};

export const articleQuery = graphql`
query {
    article: allDatoCmsArticle {
        nodes {
            slug
            title
            categories {
                categoryTitle
            }
            featureImage {
                alt
                gatsbyImageData(
                    width: 600,
                    placeholder: BLURRED,
                    forceBlurhash: false,
                )
            }
            content {
                ... on DatoCmsImageBlock {
                    id
                    model {
                    apiKey
                    }
                    image {
                        alt
                        gatsbyImageData(
                            width: 600
                            placeholder: BLURRED
                            forceBlurhash: true
                            imgixParams: {}
                        )
                    }
                }
                ... on DatoCmsContentBlock {
                    id
                    content
                    model {
                        apiKey
                    }
                }
            }
        }
    }
}
`;

// BlogPost.propTypes = blogPostTypes;

export default BlogPost;
