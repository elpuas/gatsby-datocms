import * as React from 'react'

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