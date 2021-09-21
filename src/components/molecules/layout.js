import * as React from 'react'
import PropTypes from 'prop-types';
import * as layoutStyles from '../../styles/layout.module.css'
import Header from './header';
import Footer from './footer';
/**
 * Layout Component
 *
 * @param  {object}  props.children React children.
 * @return {Element} The layout component
 */
export default function Layout({children}) {
    return (
        <div>
        <Header />
        <main className={layoutStyles.container}>{children}</main>
        <Footer />
        </div>
    )
};

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}
