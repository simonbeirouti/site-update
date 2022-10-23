export default function Card({ imageSrc, imageAlt, date, snippet, url }) {
  return (
    <div className="flex flex-col py-10 sm:flex-row sm:items-center group">
      <a
        href="#"
        title=""
        className="flex overflow-hidden shrink-0 rounded-xl "
      >
        <img
          className="w-full transition-all duration-200 sm:w-auto sm:h-32 object-cvoer group-hover:scale-110"
          src={imageSrc}
          alt={imageAlt}
        />
      </a>

      <div className="flex-1 mt-6 sm:mt-0 sm:ml-6 lg:ml-8">
        <h3 className="max-w-xs text-xl font-semibold text-black ">
          <a href="#" title="" className="">
            {snippet}
          </a>
        </h3>
        <p className="mt-4 text-sm font-medium text-gray-400">{date}</p>
      </div>

      <div className="mt-6 sm:mt-0 sm:ml-6">
        <a
          href={url}
          className="inline-flex items-center justify-center px-6 py-4 text-base font-semibold leading-5 transition-all duration-200 bg-orange-300 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 hover:bg-red-400 text-black"
          role="button"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
