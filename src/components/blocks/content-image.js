import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function ImageBlock( { image } ) {
    return(
        <GatsbyImage image={ image.gatsbyImageData } alt={ image.alt }  />
    )
}