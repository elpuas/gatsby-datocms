import * as React from 'react';
import * as styles from '../../styles/structures/footer.module.css'
import { WordPressICO, GithubICO, TwitterICO } from '../../functions/icons';

/**
 * Footer Component
 *
 * @export
 * @return {*}
 */
export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <p>{currentYear} &copy; ElPuas Digital Crafts, LLC</p>
            <ul className={styles.icons}>
                <li><a href="https://github.com/elpuas" aria-label="github"><GithubICO /></a></li>
                <li><a href="https://profiles.wordpress.org/elpuas/" aria-label="wordpress"><WordPressICO /></a></li>
                <li><a href="https://twitter.com/3LPU4S" aria-label="twitter"><TwitterICO /></a></li>
            </ul>
        </footer>
    )
};
