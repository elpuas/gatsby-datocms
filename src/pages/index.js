import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react";
import * as styles from '../styles/pages/index.module.css'
import Button from '../components/bricks/button';
import Card from "../components/structures/card";
import ContactBlock from "../components/blocks/contact-block";
import ContentBlock from "../components/blocks/content-block";
import cx from 'classnames';
import Heading from '../components/bricks/heading';
import Layout from "../components/structures/layout";
import Video from "../components/blocks/video-block";

// markup
const IndexPage = ( { data } ) => {
  const {
    contactBlock,
    legend,
    link,
    selectedPosts,
    videoExcerpt,
    videoUrl,
  } = data.datoCmsHome;

  return (
    <>
    <Layout>
      <article className={styles.homeArticle}>
        <section className={ cx(styles.hero, styles.section) }>
          <div>
            <Heading content={ legend } level="1" />
            <Button link={`/${link.slug}`} />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.videoSection}>
            <Heading content="I Talk About Code." level="2" />
            <div className={styles.videoHero}>
              <ContentBlock content={videoExcerpt} />
              <Video videoSrcURL={videoUrl}>
                <StaticImage src="https://placekitten.com/800/600" alt="A Static Placeholder" />
              </Video>
            </div>
          </div>
        </section>
        <section className={ cx(styles.recentPosts, styles.section) }>
          <Heading content="From the Blog." level="2" />
          <div className={ styles.cardGrid }>
            {selectedPosts.map( ( post, index ) => <Card key={index} label="Go to article." imageClass={ styles.card } {...post} /> )}
          </div>
        </section>
        <ContactBlock {...contactBlock} />
      </article>
    </Layout>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
query HomeQuery {
  datoCmsHome {
    legend
    link {
      title
      slug
    }
    videoExcerpt
    videoUrl
    selectedPosts {
      categories {
        categoryTitle
      }
      featureImage {
        gatsbyImageData(imgixParams: {duotone: "000,FFF"})
        alt
      }
      slug
      title
    }
    contactBlock {
      heading
      subheading
      available
      model {
        apiKey
      }
      link {
        ... on DatoCmsPage {
          slug
          title
        }
        ... on DatoCmsArticle {
          slug
          title
          excerpt
        }
        ... on DatoCmsCategory {
          slug
          categoryTitle
        }
      }
    }
  }
}
`;
