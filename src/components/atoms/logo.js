import * as React from 'react'
import { LogoICO } from '../../functions/icons';
import * as logoStyles from '../../styles/atoms/logo.module.css'

export default function Logo() {
    return (
        <div className={ logoStyles.container }>
            <LogoICO />
        </div>
    )
};
