import * as React from 'react'
import * as styles from '../../styles/structures/blog-card.module.css'
import Button from '../bricks/button';
import ContentBlock from "../blocks/content-block";
import Heading from '../bricks/heading';
import ImageBlock from "../blocks/content-image";

export default function BlockCards(props) {
    const {
        categories,
        excerpt,
        featureImage,
        postDate,
        slug,
        title,
    } = props;
    const date = new Date(postDate);
    const createdOn = date.toLocaleDateString('en-US');

    return (
        <div className={styles.blogCard}>
            <div className={styles.cardContent}>
                <ul>
                    {categories.map( (cat, index) => <li key={index}>{cat.categoryTitle}</li>)}
                </ul>
                <Heading content={title} level="2" />
                <time>{`Published on: ${createdOn}`}</time>
                <ContentBlock content={excerpt} />
                <Button link={`/blog/${slug}`} label="Read More" format="secondary" />
            </div>
            <ImageBlock image={featureImage} alt={featureImage} />
        </div>
    )
};
