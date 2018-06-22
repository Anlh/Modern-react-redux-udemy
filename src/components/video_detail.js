import React from 'react';

const VideoDetail = ({videos}) => {
    if (!videos) {
        return <div>Loading...</div>;
    }

    const videoTitle = videos.snippet.title;
    const videoDescription = videos.snippet.description;
    const videoId = videos.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`; // In old ES5 syntax 'https://www.youtube.com/embed/' + videoId;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} className="embed-responsive-item"></iframe>
            </div>
            <div className="details">
                <div>{videoTitle}</div>
                <div>{videoDescription}</div>
            </div>
        </div>
    );
};

export default VideoDetail;