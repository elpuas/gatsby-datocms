import * as styles from '../../styles/structures/header.module.css'
import cx from 'classnames'
import Logo from '../bricks/logo'
import Navigation from './navigation'
import React, { useRef, useEffect, useState } from "react";
/**
 * Render the header component
 *
 * @return {Element}
 */
export default function Header() {
    const prevScrollY = useRef(0);
    const [goingUp, setGoingUp] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if ( prevScrollY.current < currentScrollY && goingUp ) {
            if( currentScrollY >= 100 ) {
                setGoingUp(false)
            };
        }
        if ( prevScrollY.current > currentScrollY && !goingUp ) {
            if( currentScrollY <= 100 ) {
                setGoingUp(true);
            }
        }
        prevScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);

    }, [goingUp]);

    return (
        <header className={ cx( styles.header, !goingUp && styles.scroll ) }>
            <Logo />
            <Navigation />
        </header>
    )
};
