import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                /*Pass the created property to the videoListItem child component*/
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video}
            />
        )
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems} {/* React will try to figure out if this array has a list of react components and will try to render them in the page */}
        </ul>
    );
};

export default VideoList;