import Image from "next/image";

export default function CTA() {
  return (
    <section className="pt-10 bg-white">
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
        </div>
      </div>
    </section>
  );
}
