import * as React from 'react'
import PropTypes from 'prop-types';
import CallToActionBlock from '../components/blocks/call-to-action-block';
import ContentBlock from '../components/blocks/content-block';
import ContactBlock from '../components/blocks/contact-block';
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
    const { model } = block

    switch ( model.apiKey ) {
        case 'content_block':
        return <ContentBlock {...block} key={index} />

        case 'image_block':
        return <ImageBlock {...block} key={index} />

        case 'two_column_block':
        return <TwoColumnsBlock {...block} key={index} />

        case 'call_to_action_block':
        return <CallToActionBlock {...block} key={index} />

        case 'article_content':
        return <CodeBlock {...block} key={index} />

        case 'contact_block':
        return <ContactBlock {...block} key={index} />

        default:
        return <pre key={index}>{JSON.stringify(block, null, 2)}</pre>
    }
}

displayBlock.propTypes = {
    block: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}