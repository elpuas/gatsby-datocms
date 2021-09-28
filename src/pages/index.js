import * as React from "react";
import * as styles from '../styles/pages/index.module.css'
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby";
import cx from 'classnames';
import Button from '../components/atoms/button';
import Card from "../components/molecules/card";
import ContentBlock from "../components/blocks/content-block";
import Heading from '../components/atoms/heading';
import Layout from "../components/molecules/layout";
import Video from "../components/blocks/video-block";
import ContactBlock from "../components/blocks/contact-block";

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
            {selectedPosts.map( ( post, index ) => {
              const { title, featureImage, categories, slug } = post;
              return(
                <>
                  <Card
                  title={title}
                  image={featureImage}
                  categories={ categories}
                  key={index}
                  slug={slug}
                  label="Go to article."
                  imageClass={ styles.card } />
                </>
              )
            })}
          </div>
        </section>
        <ContactBlock />
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
