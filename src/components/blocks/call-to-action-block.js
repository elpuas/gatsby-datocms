import * as React from 'react'
import * as styles from '../../styles/blocks/call-to-action-block.module.css'
import Button from '../bricks/button';
import ContentBlock from "./content-block";
import Heading from '../bricks/heading';
import ImageBlock from "./content-image";
import PropTypes from 'prop-types';

/**
 * Render the Call To Action Block
 *
 * @param  {object}   props               The props object.
 * @param  {string}   props.id            Model apiKey.
 * @param  {string}   props.content       Block Content.
 * @param  {object}   props.image         The image object.
 * @param  {object}   props.callToAction  Button Object.
 * @param  {string}   props.eyebrow       The eyebrow text.
 * @return {Element} The Call to Action Block Component
 */
export default function CallToActionBlock(props) {
    const {
        callToAction,
        id,
        content,
        image,
        eyebrow
    } = props

    const apiKey = callToAction.model.apiKey
    return (
        <div className={ styles.container }>
            <ImageBlock image={ image } alt={ image }  />
            <div>
                <Heading content={ eyebrow } level="4"/>
                <ContentBlock id={id} content={ content} />
                <Button link={'article' === apiKey ? `/blog/${callToAction.slug}` : `/${callToAction.slug}`} label={callToAction.title} format="primary" />
            </div>
        </div>
    )
}

CallToActionBlock.propTypes = {
    id: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.object,
    callToAction: PropTypes.object,
    eyebrow: PropTypes.string
}

CallToActionBlock.defaultProps = {
    content: 'It\'s an old habit. I spent my whole life trying not to be careless.',
    eyebrow: 'Read More',
}