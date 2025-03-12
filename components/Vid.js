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
  {
    url: "https://res.cloudinary.com/db87pggzn/video/upload/v1741780652/uiphmuq7kodcbvwbdxat.mp4",
    title: "Video 6",
  },
  {
    url: "https://res.cloudinary.com/db87pggzn/video/upload/v1741780622/dr2hwgqsjguj7b1fet9l.mp4",
    title: "Video 7",
  },
  {
    url: "https://res.cloudinary.com/db87pggzn/video/upload/v1741780574/ncr7sxyea3gh64hyddqa.mp4",
    title: "Video 8",
  },
  {
    url: "https://res.cloudinary.com/db87pggzn/video/upload/v1741780569/tqrevqeu6t9mbggnzlh9.mp4",
    title: "Video 9",
  },
  {
    url: "https://res.cloudinary.com/db87pggzn/video/upload/v1741780531/uytaj7rckgzgsimkcobn.mp4",
    title: "Video 10",
  },
];

const VideoGrid = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-10 myHead">Our Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
    </div>
  );
};

export default VideoGrid;
