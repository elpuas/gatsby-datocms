import React from 'react'
import CallToActionBlock from '../components/blocks/call-to-action-block';
import ContentBlock from '../components/blocks/content-block';
import ImageBlock from '../components/blocks/content-image';
import TwoColumnsBlock from '../components/blocks/two-column-block';

export default function displayBlock( block, index ) {
    const { id, model, content, image, blockContent, blockImage, eyebrow, callToAction } = block

    switch ( model.apiKey ) {
        case 'content_block':
        return <ContentBlock id={id} content={content} key={index} />

        case 'image_block':
        return <ImageBlock image={image} alt={image} key={index} />

        case 'two_column_block':
        return <TwoColumnsBlock blockId={id} columnContent={ blockContent } columnImage={ blockImage } key={index} />

        case 'call_to_action_block':
        return <CallToActionBlock blockId={id} ctaContent={ content } ctaImage={ image} key={index} callToAction={callToAction} eyebrow={eyebrow} />

        default:
        return <pre key={index}>{JSON.stringify(block, null, 2)}</pre>
    }
}