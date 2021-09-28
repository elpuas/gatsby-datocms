import * as React from 'react'
import PropTypes from 'prop-types';
import CallToActionBlock from '../components/blocks/call-to-action-block';
import ContentBlock from '../components/blocks/content-block';
import ImageBlock from '../components/blocks/content-image';
import TwoColumnsBlock from '../components/blocks/two-column-block';
import CodeBlock from '../components/blocks/code-block';

/**
 * Decide which block component to display.
 *
 * @param  {object}  block The block data.
 * @param  {number}  index A unique key required by React.
 * @return {Element} A block-based component.
 */
export default function displayBlock( block, index ) {
    const {
        id,
        model,
        content,
        image,
        blockContent,
        blockImage,
        eyebrow,
        callToAction,
        flexibleContent } = block

    switch ( model.apiKey ) {
        case 'content_block':
        return <ContentBlock id={id} content={content} key={index} />

        case 'image_block':
        return <ImageBlock image={image} alt={image} key={index} />

        case 'two_column_block':
        return <TwoColumnsBlock blockId={id} columnContent={ blockContent } columnImage={ blockImage } key={index} />

        case 'call_to_action_block':
        return <CallToActionBlock blockId={id} ctaContent={ content } ctaImage={image} key={index} callToAction={callToAction} eyebrow={eyebrow} />

        case 'article_content':
        return <CodeBlock value={ flexibleContent.value.document.children[0] } key={index} />

        case 'contact_block':
        // TODO: CHECK ON THE SCAFFOLDING PAGE.
        return <pre key={index}>{JSON.stringify(flexibleContent, null, 2)}</pre>

        default:
        return <pre key={index}>{JSON.stringify(block, null, 2)}</pre>
    }
}

displayBlock.propTypes = {
    block: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}