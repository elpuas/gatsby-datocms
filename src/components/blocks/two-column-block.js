import * as React from 'react'
import PropTypes from 'prop-types';
import ContentBlock from "./content-block";
import ImageBlock from "./content-image";
import * as twoColumnStyles from '../../styles/blocks/two-column-block.module.css'

/**
 * Render the two column block component
 *
 * @param {object}   props                The props object.
 * @param {string}   props.blockId        The image model object
 * @param {string}   props.columnContent  The block content in markdown
 * @param {object}   props.columnImage    The block image object
 * @return {Element} The two column block
 */
export default function TwoColumnsBlock( props ) {
    const { blockId, blockContent, blockImage } = props
    return (
        <div className={ twoColumnStyles.container}>
            <ContentBlock id={blockId} content={ blockContent} />
            <ImageBlock image={ blockImage } alt={ blockImage }  />
        </div>
    )
}

TwoColumnsBlock.propTypes = {
    blockId: PropTypes.string,
    blockContent: PropTypes.string,
    blockImage: PropTypes.object,
}

TwoColumnsBlock.defaultProps = {
    blockId: 'two-column-block',
    blockContent: '##I know it was you, Fredo. You broke my heart. \nI spent my whole life trying not to be careless. \nWomen and children can afford to be careless, but not men.',
}