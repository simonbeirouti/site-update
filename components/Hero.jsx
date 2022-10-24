export default function Hero({ intro, text }) {
  return (
    <div className="overflow-x-hidden ">
      <section className="pt-6 sm:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
              {intro}
            </p>
            <p className="mt-8 text-base text-gray-500 font-inter">{text}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
