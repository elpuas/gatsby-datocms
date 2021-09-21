import * as React from 'react'
import PropTypes from 'prop-types';
import * as callToActionStyles from '../../styles/blocks/call-to-action-block.module.css'
import ContentBlock from "./content-block";
import ImageBlock from "./content-image";
import Heading from '../atoms/heading';
import Button from '../atoms/button';

/**
 * Render the Call To Action Block
 *
 * @param  {object}   props               The props object.
 * @param  {string}   props.blockId       Model apiKey.
 * @param  {string}   props.ctaContent    Block Content.
 * @param  {object}   props.ctaImage      The image object.
 * @param  {object}   props.callToAction  Button Object.
 * @param  {string}   props.eyebrow       The eyebrow text.
 * @return {Element} The Call to Action Block Component
 */
export default function CallToActionBlock( { blockId, ctaContent, ctaImage, callToAction, eyebrow } ) {
    const apiKey = callToAction.model.apiKey
    return (
        <div className={ callToActionStyles.container }>
            <ImageBlock image={ ctaImage } alt={ ctaImage }  />
            <div>
                <Heading content={ eyebrow } level="4"/>
                <ContentBlock id={blockId} content={ ctaContent} />
                <Button link={'article' === apiKey ? `/blog/${callToAction.slug}` : `/${callToAction.slug}`} label={callToAction.title} format="primary" />
            </div>
        </div>
    )
}

CallToActionBlock.propTypes = {
    blockId: PropTypes.string,
    ctaContent: PropTypes.string,
    ctaImage: PropTypes.object,
    callToAction: PropTypes.object,
    eyebrow: PropTypes.string
}

CallToActionBlock.defaultProps = {
    ctaContent: 'It\'s an old habit. I spent my whole life trying not to be careless.',
    eyebrow: 'Read More',
}