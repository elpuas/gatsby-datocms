import * as React from 'react'
import PropTypes from 'prop-types';

/**
 * Render the heading component
 *
 * @param  {object}   props          The props object.
 * @param  {string}   props.content  The heading content.
 * @param  {string}   props.level    Heading level from 1 to 4.
 * @return {Element}  The heading component
 */
export default function Heading( { content, level } ) {
    switch( level ) {
        case '1':
        return <h1>{ content }</h1>

        case '2':
        return <h2>{ content }</h2>

        case '3':
        return <h3>{ content }</h3>

        case '4':
        return <h4>{ content }</h4>

        default:
        return <h1>{ content }</h1>
    }
}

Heading.propTypes = {
    content: PropTypes.string,
    level: PropTypes.string,
}

Heading.defaultProps = {
    content: 'I\'m gonna make him an offer he can\'t refuse.',
    level: '1',
}