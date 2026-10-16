import solar from "../../../assets/bg-solar.jpeg";

const HeroSection = () => {
  return (
    <section

      className="relative flex  w-full items-center overflow-hidden  min-h-screen"
    >
      {/* Background Image */}
      <img
        src={solar}
        alt="Solar Energy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

    
      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-28 sm:px-8 md:px-10 lg:px-12">

        <div className="inline-block rounded-3xl border border-green-800 bg-linear-to-r from-green-300 to-blue-300 px-3 py-2 text-sm font-semibold sm:text-base">
          India's Trusted Solar Energy
        </div>

        <h1 className="my-5 max-w-3xl font-serif text-3xl font-extrabold leading-tight text-blue-950 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Power Your Future With{" "}
          <span className="text-yellow-500">
            Solar Energy
          </span>
        </h1>

        <p className="mb-7 mt-4 max-w-2xl text-base font-medium leading-relaxed text-gray-800 sm:text-lg md:text-xl">
          Save Money. Save Energy. Save Our Planet. Switch to
          solar power for a brighter, cleaner, and more
          sustainable future.
        </p>

        {/* Responsive Buttons */}
        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:gap-5">

          <a
            href="#services"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-yellow-500 px-4 py-3 text-center text-base font-semibold text-white transition hover:bg-yellow-600 sm:w-auto sm:text-lg"
          >
            Explore Solar Solution →
          </a>

          <a
            href="#contact"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border-2 border-gray-500 bg-white/50 px-5 py-3 text-center text-base font-semibold text-gray-900 transition hover:bg-white sm:w-auto sm:text-lg"
          >
            Get a Quote
          </a>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;