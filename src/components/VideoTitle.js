const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black pt-[20%] pl-24 px-12 absolute text-white">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-justify"> {overview}</p>
      <div>
        <button className="bg-white px-12 text-black text-md p-3 rounded-lg hover:bg-opacity-50">
          {" "}
          ▶︎ Play{" "}
        </button>
        <button className="bg-gray-500 px-12 text-white text-md bg-opacity-40 p-3 rounded-lg mx-2">
          {" "}
          More Info{" "}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
