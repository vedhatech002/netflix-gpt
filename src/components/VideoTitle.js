const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[13rem] space-y-4 px-6  font-Poppins text-white absolute bg-gradient-to-r from-black h-screen">
      <h1 className="text-5xl font-bold ">{title}</h1>
      <p className="font-Inter w-1/3 text-[1rem] text-left">{overview}</p>
      <div className="flex items-center' gap-3">
        <button className="px-6 py-2 bg-white bg-opacity-80 text-black font-Inter font-semibold rounded-sm flex items-center gap-1 hover:bg-opacity-50 t">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82"
              ></path>
            </svg>
          </span>
          <span> Play</span>
        </button>
        <button className="px-6 py-2 bg-gray-500 rounded-sm text-white font-Inter bg-opacity-40 font-semibold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
