import * as React from 'react'
import * as videoStyles from '../../styles/blocks/video-block.module.css'
import PropTypes from 'prop-types';
/**
 * Render the video block component
 *
 * @param {string} videoSrcURL The video url (youTube, Vimeo, etc ).
 * @param {string} videoTitle The video title
 * @return {*}
 */
export default function Video( { videoSrcURL, videoTitle } ) {
    return (
        <div className={videoStyles.videoWrapper}>
            <iframe
                src={videoSrcURL}
                title={videoTitle}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
            />
        </div>
    )
}

Video.propTypes = {
    videoSrcURL: PropTypes.string,
    videoTitle: PropTypes.string
}

Video.defaultProps = {
    videoSrcURL: 'https://www.youtube.com/embed/Unqsu8aGy8Y',
    videoTitle: '30 Seconds with Reemo at The Berrics Plaza'
}