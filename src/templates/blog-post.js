import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import * as styles from "../styles/templates/blog-post.module.css"
import Blocks from "../components/structures/blocks";
import cx from "classnames"
import Heading from "../components/bricks/heading";
import Layout from "../components/structures/layout";
import React, { Fragment } from "react";

// import SEO from '../components/SEO';

const BlogPost = ( { data } ) => {
    const {
        title,
        content,
        categories,
        featureImage,
        slug,
        postDate
    } = data.datoCmsArticle;

    const date = new Date(postDate);
    const createdOn = date.toLocaleDateString('en-US');

    return (
        <Fragment>
            {/* <SEO meta={seoMetaTags} /> */}
            <Layout>
                <article className={cx( styles.post, `post-${slug}`)}>
                    <header className={styles.postHeader}>
                        <ul className={styles.catList}>
                            {categories.map( ( cat, index ) => <li key={index}>{ cat.categoryTitle }</li> ) }
                        </ul>
                        <p className={styles.dateCreated}>{`Published: ${createdOn}`}</p>
                        <Heading content={ title } level="1" />
                    </header>
                    <GatsbyImage image={ featureImage.gatsbyImageData }  alt={ featureImage.alt}/>
                    <section className={ styles.postContent }>
                        <Blocks blocks={ content } />
                    </section>
                </article>
            </Layout>
        </Fragment>
    );
};

export const articleQuery = graphql`
query PostQuery($slug: String!){
    datoCmsArticle( slug: { eq: $slug } ) {
        title
        slug
        postDate(fromNow: false)
        categories {
            categoryTitle
        }
        featureImage {
            alt
            gatsbyImageData(
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
                        placeholder: BLURRED,
                        forceBlurhash: false,
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
            ... on DatoCmsArticleContent {
                flexibleContent {
                    value
                }
                model {
                    apiKey
                }
            }
        }
    }
}
`;

// BlogPost.propTypes = blogPostTypes;

export default BlogPost;
