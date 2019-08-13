import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div></div>
    }
    const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div className="video-details">  
            <div className="ui embed">
                <iframe title="Video player" width="460" height="315" src={videoSrc} />
            </div>
            <div className="ui segment"> 
                    <h4 className="ui header">{video.snippet.title} </h4>
                    <p> {video.snippet.description} </p>
            </div>
        </div>
    );
}
export default VideoDetail;
