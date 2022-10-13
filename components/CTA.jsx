import Image from "next/image";
import { useState } from "react";

export default function CTA() {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center">
            <div className="relative overflow-hidden bg-gray-300 border-8 border-white rounded-full w-28 h-28">
              <Image
                className="object-cover w-full h-full"
                src="/images/avatar.png"
                alt=""
                width="100"
                height="100"
              />
            </div>
          </div>

          <h2 className="mt-8 text-3xl font-bold leading-tight text-black lg:mt-12 sm:text-4xl lg:text-5xl">
            Welcome! I am{" "}
            <span className="border-b-8 border-orange-300">Simon</span>.
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-xl text-gray-600 md:mt-10">
            I'm on a mission to build things that make a difference. I've
            started with my own site! You'll need to create an account to access
            it.
          </p>
          <div className="flex flex-col items-center justify-center mt-10 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            {!showForm ? (
              <button
                type="button"
                className="inline-flex items-center justify-center px-6 py-4 text-base font-semibold leading-5 transition-all duration-200 bg-orange-300 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 hover:bg-red-500 text-black"
                onClick={handleClick}
              >
                Access now
              </button>
            ) : (
              <form action="#" method="POST">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-4 text-base font-semibold leading-5 transition-all duration-200 bg-orange-300 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 hover:bg-red-500 text-black"
                >
                  Access now
                </button>
                <div className="w-96">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required="true"
                    placeholder="Email address"
                    className="block w-full py-4 pl-4 mt-4 text-base text-gray-900 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
