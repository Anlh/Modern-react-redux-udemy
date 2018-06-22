import React from 'react';

// EcmaScript 6 syntax: This tell to the function that the properties passed by contain
// video property, and declare a new variable inside the function scope, equal to var video = props.video ES5 syntax
const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;


    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
            </div>

            <div className="media-body">
                <div className="media-heading">
                    {videoTitle}
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;