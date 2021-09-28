import { LogoICO } from '../../functions/icons';
import * as logoStyles from '../../styles/bricks/logo.module.css'
import * as React from 'react'
/**
 * Render the logo component
 *
 * @return {Element} The logo component
 */
export default function Logo() {
    return (
        <div className={ logoStyles.container }>
            <LogoICO />
        </div>
    )
};
