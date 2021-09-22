import * as React from 'react'
import * as cardStyles from '../../styles/molecules/card.module.css'
import Button from '../atoms/button';
import Heading from '../atoms/heading';
import ImageBlock from '../blocks/content-image';
/**
 * Render a card block component
 *
 * @param  {object}   props        The props object.
 * @param  {string}   props.title   The card title.
 * @param  {object}   props.image   The card image.
 * @param  {Array}   props.categories   The post categories title.
 * @return {Element} The card component
 */
export default function Card( { title, image, categories, slug, label } ) {
    return (
        <div className={cardStyles.card}>
            <div className={cardStyles.cardInner}>
                <div className={cardStyles.cardFront}>
                    <ImageBlock image={image} alt={image} />
                    <div className={``}>
                    <ul>
                        {categories.map( ( cat, index ) => <li key={index}>{ cat.categoryTitle }</li> ) }
                    </ul>
                    <Heading content={title} level="4" />
                    </div>
                </div>
                <div className={cardStyles.cardBack}>
                    <div>Excerpt</div>
                    <Button link={`/blog/${slug}`} label={label} format="secondary" />
                </div>
            </div>
        </div>
    )
};
