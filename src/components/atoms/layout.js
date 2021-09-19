import * as React from 'react'
import * as layoutStyles from '../../styles/layout.module.css'

export default function Layout({children}) {
    return (
        <main className={layoutStyles.container}>{children}</main>
    )
};
