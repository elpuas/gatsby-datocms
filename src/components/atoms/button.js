import * as React from 'react'
import PropTypes from 'prop-types';
import cx from 'classnames';
import * as buttonStyles from '../../styles/atoms/button.module.css'
import { Link } from 'gatsby'
import { Arrow } from '../../functions/icons';
/**
 * Render the button block component.
 *
 * @param  {object}   props        The props object.
 * @param  {string}   props.link   The button link.
 * @param  {string}   props.label  Button Label.
 * @param  {string}   props.format Whether the button is primary or secondary.
 * @return {Element} The button component
 */
export default function Button( { link, label, format } ) {
    return (
        <div className={cx(
            buttonStyles.button,
            'primary' === format && buttonStyles.primary,
            'secondary' === format && buttonStyles.secondary,
            )}>
            <Link to={link}>
                {'primary' === format && 'Read More'}
                {'secondary' === format && label }
            </Link>
            <Arrow />
        </div>
    )
};

Button.propTypes = {
    link: PropTypes.string,
    label: PropTypes.string,
    format: PropTypes.string,
}

Button.defaultProps = {
    link: '#',
    label: 'Read More',
    format: 'primary',
}
