import * as React from 'react'
import * as layoutStyles from '../../styles/layout.module.css'
import Header from './header';
import Footer from './footer';

export default function Layout({children}) {
    return (
        <div>
        <Header />
        <main className={layoutStyles.container}>{children}</main>
        <Footer />
        </div>
    )
};
