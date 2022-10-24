export default function PostCard({
  key,
  title,
  snippet,
  category,
  date,
  image,
}) {
  return (
    <div
      className="overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1"
      key={key}
    >
      <div className="flex flex-col sm:flex-row">
        <a href="#" title="" className="flex overflow-hidden shrink-0">
          <img
            className="object-cover w-full h-56 transition-all duration-200 transform group-hover:scale-110 sm:h-auto sm:w-56"
            src={image}
            alt=""
          />
        </a>

        <div className="flex flex-col px-4 py-5 sm:p-6">
          <div className="flex-1">
            <p className="text-xl font-bold text-gray-900">
              <a href="#" title="" className="">
                {title}
              </a>
            </p>
            <p className="mt-4 text-sm font-normal leading-6 text-gray-500">
              {snippet}
            </p>
          </div>

          <div className="pt-6 mt-auto border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium text-gray-900">
                  <a href="#" title="" className="">
                    {category}
                  </a>
                </p>
                <span className="text-sm font-medium text-gray-900">•</span>
                <p className="text-sm font-medium text-gray-900">{date}</p>
              </div>

              <a href="#" title="" className="" role="button">
                <svg
                  className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="17" y1="7" x2="7" y2="17"></line>
                  <polyline points="8 7 17 7 17 16"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
