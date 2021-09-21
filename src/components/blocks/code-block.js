import * as React from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneSea } from 'react-syntax-highlighter/dist/esm/styles/prism';
/**
 * Renders the code block component
 *
 * @param  {object}   props    The props object.
 * @param {object} props.value The block data object.
 * @return {Element}
 */
export default function CodeBlock({ value }) {
    const { code, language } = value
    return(
        <div className={``}>
            <SyntaxHighlighter language={language} style={duotoneSea}>
                {code}
            </SyntaxHighlighter>
        </div>
    )
};

CodeBlock.propTypes = {
    value: PropTypes.shape({
        code: PropTypes.string,
        language: PropTypes.string
    }),
}

CodeBlock.defaultProps = {
    code: 'const print = () => console.log("Hello World"); \nprint();',
    language: 'javascript'
}

