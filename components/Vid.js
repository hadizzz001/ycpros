import React from "react";

const videos = [
  {
    url: "https://res.cloudinary.com/db87pggzn/video/upload/v1741375858/jsnblkitpcbl5jzvgoc6.mp4",
    title: "Video 1",
  },
  {
    url: "https://res.cloudinary.com/db87pggzn/video/upload/v1741375856/fsfjx8moeqwcsagqeuft.mp4",
    title: "Video 2",
  },
  {
    url: "https://res.cloudinary.com/db87pggzn/video/upload/v1741375856/o7mku9bampoumsps1e6b.mp4",
    title: "Video 3",
  },
  {
    url: "https://res.cloudinary.com/db87pggzn/video/upload/v1741375848/ygdiuhmitrfzeicyaoyv.mp4",
    title: "Video 4",
  },
  {
    url: "https://res.cloudinary.com/db87pggzn/video/upload/v1741375842/fc9ewsvkqpkacvbehcgl.mp4",
    title: "Video 5",
  },
];

const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {videos.map((video, index) => (
        <div key={index} className="relative w-full aspect-square rounded-2xl overflow-hidden">
          <video
            src={video.url}
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
          /> 
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
