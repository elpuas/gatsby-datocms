import * as React from 'react'
import * as cardStyles from '../../styles/molecules/card.module.css'
import Heading from '../atoms/heading';
import ImageBlock from '../blocks/content-image';

export default function Card( { title, image, categories } ) {
    return (
        <div className={cardStyles.card}>
            <div className={cardStyles.cardInner}>
                <div className={cardStyles.cardFront}>
                    <ImageBlock image={image} alt={image} />
                </div>
                <div className={cardStyles.cardBack}>
                    <ul>
                        {categories.map( ( cat, index ) => <li key={index}>{ cat.categoryTitle }</li> ) }
                    </ul>
                    <Heading content={title} level="4" />
                </div>
            </div>
        </div>
    )
};
