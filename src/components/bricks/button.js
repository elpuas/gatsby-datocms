import { Arrow } from '../../functions/icons';
import { Link } from 'gatsby'
import * as buttonStyles from '../../styles/bricks/button.module.css'
import * as React from 'react'
import cx from 'classnames';
import PropTypes from 'prop-types';

/**
 * Render the button block component.
 *
 * @param  {object}   props        The props object.
 * @param  {string}   props.link   The button link.
 * @param  {string}   props.label  Button Label.
 * @param  {string}   props.format Whether the button is primary or secondary.
 * @return {Element} The button component
 */
export default function Button(props) {
    const {
        link,
        label,
        format
    } = props

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
