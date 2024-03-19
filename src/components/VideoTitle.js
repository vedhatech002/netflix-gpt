const VideoTitle = ({ title, overview }) => {
  return (
    <div className="lg:pt-[10rem] sm:pt-[9rem] pt-[6rem] space-y-4 md:px-16 px-8  font-Poppins text-white absolute bg-gradient-to-r from-black aspect-video w-full">
      <h1 className="xl:text-4xl md:text-3xl sm:text-2xl text-lg font-bold ">
        {title}
      </h1>
      <p className="font-Inter lg:w-1/3 md:w-2/3 w-1/2 xl:text-[0.9rem] lg:text-[0.8rem] md:text-[0.7rem] text-[0.65rem] text-left md:block hidden">
        {overview}
      </p>
      <div className="flex items-center' gap-3">
        <button className="lg:px-6  px-4  lg:py-1.5 sm:py-1 py-0.5  bg-white bg-opacity-80 text-black font-Inter font-semibold rounded-sm flex items-center gap-1 hover:bg-opacity-50 sm:text-sm text-xs">
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
        <button className="px-6 py-1.5 bg-gray-500 rounded-sm sm:text-sm text-xs text-white font-Inter bg-opacity-40 font-semibold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
