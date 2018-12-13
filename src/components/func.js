import React from 'react';
import VideoListItem from './video_list_items';

const Func = function(){
    return (props.videos.map(video => <VideoListItem 
        key={video.etag}
        onVideoSelect={props.onVideoSelect}
        video = {video} /> ));
}

export default Func;