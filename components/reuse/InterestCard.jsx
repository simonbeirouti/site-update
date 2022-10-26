export default function InterestCard({ status, summary, date, name }) {
  return (
    <div className="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
      <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
        {status === "High" && (
          <span className="text-xs font-medium text-green-900 bg-green-100 rounded-full inline-flex items-center px-2.5 py-1">
            <svg
              className="-ml-1 mr-1.5 h-2.5 w-2.5 text-green-500"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx="4" cy="4" r="3" />
            </svg>
            {status}
          </span>
        )}
        {status === "Medium" && (
          <span className="text-xs font-medium text-yellow-900 bg-yellow-100 rounded-full inline-flex items-center px-2.5 py-1">
            <svg
              className="-ml-1 mr-1.5 h-2.5 w-2.5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx="4" cy="4" r="3" />
            </svg>
            {status}
          </span>
        )}
        {status === "Low" && (
          <span className="text-xs font-medium text-red-900 bg-red-100 rounded-full inline-flex items-center px-2.5 py-1">
            <svg
              className="-ml-1 mr-1.5 h-2.5 w-2.5 text-red-500"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx="4" cy="4" r="3" />
            </svg>
            {status}
          </span>
        )}
      </div>

      <div className="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
        <button
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </button>
      </div>

      <div className="px-4 lg:py-4 sm:px-6 lg:col-span-2">
        <p className="text-sm font-bold text-gray-900">{summary}</p>
      </div>

      <div className="px-4 lg:py-4 sm:px-6">
        <p className="mt-1 text-sm font-medium text-gray-500">{date}</p>
      </div>

      <div className="px-4 lg:py-4 sm:px-6">
        <p className="mt-1 text-sm font-medium text-gray-500">{name}</p>
      </div>
    </div>
  );
}
