import * as React from 'react'
import * as styles from '../../styles/structures/blog-card.module.css'
import Button from '../bricks/button';
import ContentBlock from "../blocks/content-block";
import Heading from '../bricks/heading';
import ImageBlock from "../blocks/content-image";

export default function BlockCards(props) {
    const {
        title,
        slug,
        excerpt,
        postDate,
        featureImage,
        categories
    } = props;
    const date = new Date(postDate);
    const createdOn = date.toLocaleDateString('en-US');

    return (
        <div className={styles.blogCard}>
            <div className={styles.cardContent}>
                <ul>
                    {categories.map( (cat, index) => <li key={index}>{cat.categoryTitle}</li>)}
                </ul>
                <Heading content={title} level="3" />
                <time>{`Published on: ${createdOn}`}</time>
                <ContentBlock content={excerpt} />
                <Button link={slug} label="Read More" format="secondary" />
            </div>
            <ImageBlock image={featureImage} alt={featureImage} />
        </div>
    )
};
