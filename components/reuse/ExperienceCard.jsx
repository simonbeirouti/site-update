export default function ExperienceCard({ status, summary, date, name }) {
  return (
    <div className="flex flex-col py-10 sm:flex-row sm:items-center group">
      <a
        href="#"
        title=""
        className="flex overflow-hidden shrink-0 rounded-xl "
      >
        <img
          className="w-full transition-all duration-200 sm:w-auto sm:h-32 object-cvoer group-hover:scale-110"
          src="https://landingfoliocom.imgix.net/store/collection/saasui/images/blog/2/blog-thumbnail-1.png"
          alt=""
        />
      </a>

      <div className="flex-1 mt-6 sm:mt-0 sm:ml-6 lg:ml-8">
        <h3 className="max-w-xs text-xl font-semibold text-black">
          <a href="#" title="">
            {summary}
          </a>
        </h3>
        <p className="mt-2 text-sm font-medium text-gray-400">{name}</p>
      </div>

      <div className="mt-2 sm:mt-0 sm:ml-6">
        <p className="inline-flex items-center justify-center text-sm font-medium text-gray-400">
          {date}
        </p>
      </div>

      <div className="mt-2 sm:mt-0 sm:ml-6">
        {status === "High" && (
          <div className="mt-6 sm:mt-0 sm:ml-6">
            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-green-900 bg-green-200 transition-all duration-200 rounded-full hover:bg-green-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
              role="button"
            >
              Read more
            </a>
          </div>
        )}
        {status === "Medium" && (
          <div className="mt-6 sm:mt-0 sm:ml-6">
            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-yellow-900 bg-yellow-200 transition-all duration-200 rounded-full hover:bg-yellow-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
              role="button"
            >
              Read more
            </a>
          </div>
        )}
        {status === "Low" && (
          <div className="mt-6 sm:mt-0 sm:ml-6">
            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-red-900 bg-red-200 transition-all duration-200 rounded-full hover:bg-red-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
              role="button"
            >
              Read more
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
