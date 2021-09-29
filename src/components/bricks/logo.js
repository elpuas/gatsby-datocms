import { LogoICO } from '../../functions/icons';
import * as styles from '../../styles/bricks/logo.module.css'
import * as React from 'react'
/**
 * Render the logo component
 *
 * @return {Element} The logo component
 */
export default function Logo() {
    return (
        <div className={ styles.container }>
            <LogoICO />
        </div>
    )
};
