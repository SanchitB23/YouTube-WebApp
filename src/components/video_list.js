import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Files from Project Imports here
import VideoListItem from './video_list_item';

const VideoList = (props) =>{
  const videoItems = props.videos.map((video) =>{    //not maps
    return (
      <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        key = {video.etag}
        video={video} />
      );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
