import React, { useState } from 'react'
import * as styles from '../../styles/blocks/video-block.module.css'
import PropTypes from 'prop-types';
/**
 * Render the video block component
 *
 * @param {object} props        The props object.
 * @param {string} props.videoSrcURL The video url (youTube, Vimeo, etc ).
 * @param {string} props.videoTitle The video title
 * @param {string} props.children The thumbnail image URL
 * @return {Element}
 */
export default function Video( { videoSrcURL, videoTitle, children } ) {
    const [hideThumbnail, setHideThumbnail] = useState(false);

    const onClick = (e) => {
        e.preventDefault();
        setHideThumbnail(!hideThumbnail);
    }

    return (
        <div className={styles.videoWrapper}>
            <button onClick={ onClick } className={styles.thumbnail} style={{display: hideThumbnail ? 'none' : 'block'}}>
                {children}
            </button>
            <iframe
                src={ hideThumbnail ? `${videoSrcURL}?autoplay=1` : undefined }
                title={videoTitle}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
                style={{display: hideThumbnail ? 'block' : 'none'}}
            />
        </div>
    )
}

Video.propTypes = {
    videoSrcURL: PropTypes.string,
    videoTitle: PropTypes.string,
    children: PropTypes.object,
}

Video.defaultProps = {
    videoSrcURL: 'https://www.youtube.com/embed/Unqsu8aGy8Y',
    videoTitle: '30 Seconds with Reemo at The Berrics Plaza',
    children: React.createElement('img', { src: 'https://placekitten.com/800/600', alt: 'placeholder' }),
}