import * as React from 'react'
import ContentBlock from "./content-block";
import ImageBlock from "./content-image";
import * as twoColumnStyles from '../../styles/blocks/two-column-block.module.css'


export default function TwoColumnsBlock( { blockId, columnContent, columnImage } ) {
    return (
        <div className={ twoColumnStyles.container}>
            <ContentBlock id={blockId} content={ columnContent} />
            <ImageBlock image={ columnImage } alt={ columnImage }  />
        </div>
    )
}