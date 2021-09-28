import * as layoutStyles from '../../styles/layout.module.css'
import * as React from 'react'
import Footer from './footer';
import Header from './header';
import PropTypes from 'prop-types';
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
