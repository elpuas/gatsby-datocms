import * as React from "react";
import { Link } from 'gatsby';
import * as navigationStyles from '../../styles/molecules/navigation.module.css'
/**
 * Render the navigation component
 *
 * @return {Element} The navigation component
 */
export default function Navigation() {
    return (
        <nav>
            <ul className={ navigationStyles.nav }>
                <li><Link to={`/`}>Home.</Link></li>
                <li><Link to={`/`}>About.</Link></li>
                <li><Link to={`/`}>Blog.</Link></li>
                <li><Link to={`/`}>Contact.</Link></li>
            </ul>
        </nav>
    )
};

