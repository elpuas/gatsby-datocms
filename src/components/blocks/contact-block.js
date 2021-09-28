import * as React from 'react'
import * as styles from '../../styles/blocks/contact-block.module.css'
import Button from '../bricks/button'
import cx from 'classnames'
import PropTypes from 'prop-types';
/**
 * Render the Contact Block component
 *
 * @param {object} props        The props object.
 * @param {boolean} props.available The availability state
 * @param {string} props.subheading The subheading
 * @param {string} props.heading The heading
 * @param {string} props.url The button link
 * @return {Element}  The contact block component
 */
export default function ContactBlock(props) {
    const { available, subheading, heading, url } = props
    return (
        <div className={styles.contactBlock}>
            <p className={styles.subheading}>
                <span className={cx( styles.available, available ? styles.isAvailable : '' )}></span>
                { subheading }
            </p>
            <h2 className={styles.heading}>{heading}</h2>
            <Button link={url} format="primary" />
        </div>
    )
};

ContactBlock.propTypes = {
    available: PropTypes.bool,
    subheading: PropTypes.string,
    heading: PropTypes.string,
    url: PropTypes.string,
}

ContactBlock.defaultProps = {
    available: false,
    subheading: 'Available for Contract Work',
    heading: 'Do you have website project? Let\'s talk.',
    url: '/',
}
