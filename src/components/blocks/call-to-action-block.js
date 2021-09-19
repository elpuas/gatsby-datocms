import * as React from 'react'
import * as callToActionStyles from '../../styles/blocks/call-to-action-block.module.css'
import ContentBlock from "./content-block";
import ImageBlock from "./content-image";
import Heading from '../atoms/heading';
import { Link } from 'gatsby';


export default function CallToActionBlock( { blockId, ctaContent, ctaImage, callToAction, eyebrow } ) {
    return (
        <div className={ callToActionStyles.container }>
            <ImageBlock image={ ctaImage } alt={ ctaImage }  />
            <div>
                <Heading content={ eyebrow } level="4"/>
                <ContentBlock id={blockId} content={ ctaContent} />
                <Link to={`/${callToAction.slug}`}>{ callToAction.title }</Link>
            </div>
        </div>
    )
}