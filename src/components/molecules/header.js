import React, { useRef, useEffect, useState } from "react";
import Navigation from './navigation'
import Logo from '../atoms/logo'
import cx from 'classnames'
import * as headerStyles from '../../styles/molecules/header.module.css'

export default function Header() {

    const prevScrollY = useRef(0);
    const [goingUp, setGoingUp] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if ( prevScrollY.current < currentScrollY && goingUp ) {
            if( currentScrollY >= 100){ setGoingUp(false) };
        }
        if ( prevScrollY.current > currentScrollY && !goingUp ) {
            if( currentScrollY <= 100){ setGoingUp(true);}
        }

        prevScrollY.current = currentScrollY;
        console.log( goingUp, currentScrollY );
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp]);

    return (
        <header className={ cx( headerStyles.header, !goingUp && headerStyles.scroll ) }>
            <Logo />
            <Navigation />
        </header>
    )
};
