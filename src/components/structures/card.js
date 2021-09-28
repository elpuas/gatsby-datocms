import * as cardStyles from '../../styles/structures/card.module.css'
import * as React from 'react'
import Button from '../bricks/button';
import cx from 'classnames';
import Heading from '../bricks/heading';
import ImageBlock from '../blocks/content-image';
import PropTypes from 'prop-types';
/**
 * Render a card block component
 *
 * @param  {object}   props              The props object.
 * @param  {Array}    props.categories   The post categories title.
 * @param  {string}   props.excerpt      The card excerpt.
 * @param  {object}   props.featureImage The card image.
 * @param  {string}   props.imageClass   The image class.
 * @param  {object}   props.label        The card label.
 * @param  {object}   props.slug         The slug for the link.
 * @param  {object}   props.title        The card title.
 * @return {Element} The card component.
 */
export default function Card(props) {
    const {
        categories,
        excerpt,
        featureImage,
        imageClass,
        label,
        slug,
        title,
    } = props

    return (
        <div className={ cardStyles.card }>
            <div className={cardStyles.cardInner}>
                <div className={cx(cardStyles.cardFront, imageClass && imageClass)}>
                    <ImageBlock image={featureImage} alt={featureImage} />
                    <div className={cardStyles.header}>
                    <ul>
                        {categories.map( ( cat, index ) => <li key={index}>{ cat.categoryTitle }</li> ) }
                    </ul>
                    <Heading content={title} level="4" />
                    </div>
                </div>
                <div className={cardStyles.cardBack}>
                    <div>
                        <p>{excerpt && excerpt}</p>
                    </div>
                    <Button link={`/blog/${slug}`} label={label} format="secondary" />
                </div>
            </div>
        </div>
    )
};

Card.propTypes = {
    categories: PropTypes.array,
    excerpt: PropTypes.string,
    featureImage: PropTypes.object,
    imageClass: PropTypes.string,
    label: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string,
}

Card.defaultProps = {
    categories: ['Code', 'WordPress'],
    title: 'You must understand why I had to do that.',
    excerpt: 'I run a small workshop of Web Design & Development, I specialize in custom WordPress Development & The JAMStack with GatsbyJS.'
}
