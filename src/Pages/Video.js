import React, { useState } from "react";
import videoplay from '../assets/videoplayback.mp4'
const Video = () => {
  // Example data: array of video objects
  const [videos] = useState([
    { id: 1, title: "Introduction Video", url: videoplay },
    { id: 2, title: "Chapter 1: Basics", url: "https://www.youtube.com/watch?v=Do7T8LDKy0Q" },
    { id: 3, title: "Chapter 2: Advanced Topics", url: "https://www.youtube.com/watch?v=lEflo_sc82g" },
    // Add more videos as needed
  ]);

  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="course-details">
      <h2>Course Details</h2>
      <div className="video-list">
        {videos.map((video) => (
          <div key={video.id} className="video-item" onClick={() => handleVideoClick(video)}>
            <p>{video.title}</p>
          </div>
        ))}
      </div>
      <div className="video-player">
        {selectedVideo ? (
          <video controls  className="video-player">
            <source src={selectedVideo.url} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Please select a video from the list</p>
        )}
      </div>
    </div>
  );
};

export default Video;
