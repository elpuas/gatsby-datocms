import React from "react";
import PropTypes from 'prop-types';
import { GatsbyImage } from "gatsby-plugin-image";
/**
 * Render the image block component
 *
 * @param  {object}   props        The props object.
 * @param {object}   props.image   The image model object
 * @return {Element} The image block component
 */
export default function ImageBlock( { image } ) {
    return(
        <GatsbyImage image={ image.gatsbyImageData } alt={ image.alt }  />
    )
}

ImageBlock.propTypes = {
    image: PropTypes.object,
}

