import React from 'react'
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown'
/**
 * Render the content block component
 *
 * @param  {object}   props          The props object.
 * @param  {string}   props.id       The model apikey.
 * @param  {string}   props.content  The block content in markdown.
 * @return {Element} The content component.
 */
export default function ContentBlock( props ) {
    const { id, content } = props;

    return (
        <div id={ id } >
            <ReactMarkdown>{ content }</ReactMarkdown>
        </div>
    )
}

ContentBlock.propTypes = {
    id: PropTypes.string,
    content: PropTypes.string,
}

ContentBlock.defaultProps = {
    id: 'content-block',
    content: '## I know it was you, Fredo. You broke my heart. \nI spent my whole life trying not to be careless. \nWomen and children can afford to be careless, but not men.',
}