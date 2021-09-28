import { duotoneSea } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as React from 'react';
import * as styles from '../../styles/blocks/code-block.module.css'
import PropTypes from 'prop-types';
/**
 * Renders the code block component
 *
 * @param  {object}   props    The props object.
 * @param {object} props.value The block data object.
 * @return {Element}
 */
export default function CodeBlock(props) {
    const {
        flexibleContent: {
            value: {
                document,
            }
        }
    } = props

    return(
        <div className={styles.codeBlock}>
            <SyntaxHighlighter language={document?.children[0]?.language} style={duotoneSea}>
                {document?.children[0]?.code}
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

