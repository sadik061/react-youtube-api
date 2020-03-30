import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div class="video-item item" onClick={(e) => {onVideoSelect(video)}}>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="content">
                <a className="header">{video.snippet.title}</a>
                
            </div>
            
        </div>
    );
}

export default VideoItem;