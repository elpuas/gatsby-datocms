import * as React from "react";
import * as indexStyles from '../styles/pages/index.module.css'
import { graphql } from "gatsby";
import cx from 'classnames';
import Button from '../components/atoms/button';
import Card from "../components/molecules/card";
import ContentBlock from "../components/blocks/content-block";
import Heading from '../components/atoms/heading';
import Layout from "../components/molecules/layout";
import Video from "../components/blocks/video-block";

// markup
const IndexPage = ( { data } ) => {
  const { legend, link, videoExcerpt, videoUrl, selectedPosts } = data.datoCmsHome;
  return (
    <>
    <Layout>
      <section className={ cx(indexStyles.hero, indexStyles.section) }>
        <div>
          <Heading content={ legend } level="1" />
          <Button link={`/${link.slug}`} />
        </div>
      </section>
      <section className={indexStyles.section}>
        <div className={indexStyles.videoHero}>
          <ContentBlock content={videoExcerpt} />
          <Video videoSrcURL={videoUrl} />
        </div>
      </section>
      <section className={ cx(indexStyles.recentPosts, indexStyles.section) }>
        <div className={ indexStyles.cardGrid }>
          {selectedPosts.map( ( post, index ) => {
            const { title, featureImage, categories, slug } = post;
            return(
              <>
                <Card title={title} image={featureImage} categories={ categories} key={index} slug={slug} label="Go to article." />
              </>
            )
          })}
        </div>
      </section>
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
    }
}
`;
