import * as React from 'react';
import displayBlock from '../../functions/display-block';
import PropTypes from 'prop-types';
/**
 * Render the Blocks component.
 *
 * @param  {object}  props        The component attributes as props.
 * @param  {Array}   props.blocks The array of blocks.
 * @return {Element} The Blocks component.
 */
export default function Blocks( { blocks } ) {
return (
    <>
        {
            !!blocks?.length &&
            blocks.map( ( block, index ) => {
                return displayBlock( block, index )
            })
        }
    </>
    )
}

Blocks.propTypes = {
    blocks: PropTypes.array.isRequired
}

Blocks.defaultProps = {
    blocks: []
}