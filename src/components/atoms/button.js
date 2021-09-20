import * as React from 'react'
import cx from 'classnames';
import * as buttonStyles from '../../styles/atoms/button.module.css'
import { Link } from 'gatsby'
import { Arrow } from '../../functions/icons';

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
