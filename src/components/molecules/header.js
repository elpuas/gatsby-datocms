import React, { useRef, useEffect, useState } from "react";
import Navigation from './navigation'
import Logo from '../atoms/logo'
import cx from 'classnames'
import * as headerStyles from '../../styles/molecules/header.module.css'

export default function Header() {

    const prevScrollY = useRef(0);
    const [goingUp, setGoingUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (prevScrollY.current < currentScrollY && goingUp) {
            setGoingUp(false);
        }
        if (prevScrollY.current > currentScrollY && !goingUp) {
            setGoingUp(true);
        }

        prevScrollY.current = currentScrollY;
        console.log(goingUp, currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp]);

    return (
        <header className={ cx( headerStyles.header, goingUp && `going-down`)}>
            <Logo />
            <Navigation />
        </header>
    )
};
