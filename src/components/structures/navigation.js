import { Link } from 'gatsby';
import * as styles from '../../styles/structures/navigation.module.css'
import * as React from "react";
/**
 * Render the navigation component
 *
 * @return {Element} The navigation component
 */
export default function Navigation() {
    return (
        <nav>
            <ul className={ styles.nav }>
                <li><Link to={`/`}>Home.</Link></li>
                <li><Link to={`/about`}>About.</Link></li>
                <li><Link to={`/blog/1`}>Blog.</Link></li>
                <li><Link to={`/`}>Contact.</Link></li>
            </ul>
        </nav>
    )
};

