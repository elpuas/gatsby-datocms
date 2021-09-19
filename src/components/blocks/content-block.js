import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function ContentBlock( { id, content } ) {
    return (
        <div id={ id } >
            <ReactMarkdown>{ content }</ReactMarkdown>
        </div>
    )
}