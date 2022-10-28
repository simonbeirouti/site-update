export default function ExperienceCard({ key, status, summary, date, name }) {
  return (
    <>
      {status === "High" && (
        <div
          className="relative mt-12 flex flex-col overflow-hidden bg-green-100 rounded-xl group"
          key={key}
        >
          <div className="flex-shrink-0 overflow-hidden aspect-w-1 aspect-h-1">
            <img
              className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-1.png"
              alt=""
            />
          </div>
          <div className="flex flex-col flex-1 px-4 py-5 sm:px-5 sm:py-6">
            <p className="text-xs font-bold tracking-wide text-gray-400 uppercase">
              {name}
            </p>
            <h3 className="text-sm sm:text-base font-bold text-gray-900 flex-1 mt-2.5">
              <a href="#" title="">
                {summary}
                <span className="absolute inset-0" aria-hidden="true"></span>
              </a>
            </h3>
            <p className="text-sm sm:text-base text-gray-400 font-bold mt-2.5">
              {date}
            </p>
          </div>
        </div>
      )}
      {status === "Medium" && (
        <div
          className="relative mt-12 flex flex-col overflow-hidden bg-orange-100 rounded-xl group"
          key={key}
        >
          <div className="flex-shrink-0 overflow-hidden aspect-w-1 aspect-h-1">
            <img
              className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-1.png"
              alt=""
            />
          </div>
          <div className="flex flex-col flex-1 px-4 py-5 sm:px-5 sm:py-6">
            <p className="text-xs font-bold tracking-wide text-gray-400 uppercase">
              {name}
            </p>
            <h3 className="text-sm sm:text-base font-bold text-gray-900 flex-1 mt-2.5">
              <a href="#" title="">
                {summary}
                <span className="absolute inset-0" aria-hidden="true"></span>
              </a>
            </h3>
            <p className="text-sm sm:text-base text-gray-400 font-bold mt-2.5">
              {date}
            </p>
          </div>
        </div>
      )}
      {status === "Low" && (
        <div
          className="relative mt-12 flex flex-col overflow-hidden bg-red-100 rounded-xl group"
          key={key}
        >
          <div className="flex-shrink-0 overflow-hidden aspect-w-1 aspect-h-1">
            <img
              className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-1.png"
              alt=""
            />
          </div>
          <div className="flex flex-col flex-1 px-4 py-5 sm:px-5 sm:py-6">
            <p className="text-xs font-bold tracking-wide text-gray-400 uppercase">
              {name}
            </p>
            <h3 className="text-sm sm:text-base font-bold text-gray-900 flex-1 mt-2.5">
              <a href="#" title="">
                {summary}
                <span className="absolute inset-0" aria-hidden="true"></span>
              </a>
            </h3>
            <p className="text-sm sm:text-base text-gray-400 font-bold mt-2.5">
              {date}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
