<template>
  <section id="tashi-features" aria-label="Features of the TASHI system.">
    <div class="flex flex-col items-center justify-center max-w-7xl mx-auto">
      <div class="flex flex-row text-center">
        <p
          class="px-4 font-poppins font-semibold tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-tashi-white-100"
        >
          FASTER. CHEAPER. FAIRER. =<span
            class="ml-4 font-poppins font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-tashi-cyan"
            >Free Cash Flow</span
          >
        </p>
      </div>
      <div class="flex flex-col lg:flex-row gap-1 md:gap-2 lg:gap-6 items-center lg:items-stretch">
        <div
          class="relative grid grid-cols-12 lg:flex lg:flex-col max-w-7xl items-center justify-center lg:items-start lg:justify-start w-4/5 lg:w-80 p-1 sm:p-2 md:p-4 lg:p-12 my-2 lg:my-12 rounded-xl transition-all duration-300 hover:shadow-2xl hover:border-2"
        >
          <div class="text-justify items-center lg:items-start justify-center flex flex-col col-span-3">
            <img class="scale-75 md:scale-90 lg:scale-100" src="/images/icons/objective.svg" />
            <div
              class="mt-1 sm:mt-3 md:mt-4 lg:mt-6 font-poppins font-extrabold text-base md:text-xl lg:text-2xl uppercase"
            >
              Faster
            </div>
          </div>
          <div
            class="lg:mt-6 ml-6 lg:ml-0 font-poppins font-normal text-xs md:text-sm lg:text-base text-tashi-black opacity-70 col-span-9"
          >
            Our multiplayer protocol adds as little as 4 ms to your game’s ping, and you don’t need to have
            infrastructure everywhere your players are. Let gamers game as fast as their uplink allows — from San
            Francisco to Shenzhen.
          </div>
        </div>

        <div
          class="relative grid grid-cols-12 lg:flex lg:flex-col max-w-7xl items-center justify-center lg:items-start lg:justify-start w-4/5 lg:w-80 p-1 sm:p-2 md:p-4 lg:p-12 my-2 lg:my-12 rounded-xl transition-all duration-300 hover:shadow-2xl hover:border-2"
        >
          <div class="text-justify items-center lg:items-start justify-center flex flex-col col-span-3">
            <img class="scale-75 md:scale-90 lg:scale-100" src="/images/icons/circuit.svg" />
            <div
              class="mt-1 sm:mt-3 md:mt-4 lg:mt-6 font-poppins font-extrabold text-base md:text-xl lg:text-2xl uppercase"
            >
              Cheaper
            </div>
          </div>
          <div
            class="lg:mt-6 ml-6 lg:ml-0 font-poppins font-normal text-xs md:text-sm lg:text-base text-tashi-black opacity-70 col-span-9"
          >
            Tashi sessions are truly serverless. If all you need is multiplayer sessions we’ll give them to you for
            free, forever. The only thing we will charge for is session monitoring if you need it.
          </div>
        </div>

        <div
          class="relative grid grid-cols-12 lg:flex lg:flex-col max-w-7xl items-center justify-center lg:items-start lg:justify-start w-4/5 lg:w-80 p-1 sm:p-2 md:p-4 lg:p-12 my-2 lg:my-12 rounded-xl transition-all duration-300 hover:shadow-2xl hover:border-2"
        >
          <div class="text-justify items-center lg:items-start justify-center flex flex-col col-span-3">
            <img class="scale-75 md:scale-90 lg:scale-100" src="/images/icons/smartphone.svg" />
            <div
              class="mt-1 sm:mt-3 md:mt-4 lg:mt-6 font-poppins font-extrabold text-base md:text-xl lg:text-2xl uppercase"
            >
              Fairer
            </div>
          </div>
          <div
            class="lg:mt-6 ml-6 lg:ml-0 font-poppins font-normal text-xs md:text-sm lg:text-base text-tashi-black opacity-70 col-span-9"
          >
            All Tashi session are cheat resistant, with results that cannot be falsified (even by the game developers),
            and are ordered fairly without lag compensation.
          </div>
        </div>
      </div>
      <a
        href=" https://github.com/tashigg/tashi-network-transport/releases/tag/v0.3.0 "
        id="download-tashi-2"
        target="_blank"
        class="mt-6 mx-4 sm:mx-6 md:mx-10 lg:mx-12 px-4 py-2 sm:px-8 sm:py-3 rounded-md bg-tashi-primary shadow-2xl font-poppins font-extrabold text-base lg:text-lg tracking-wider text-tashi-white-100 transition hover:bg-tashi-black"
      >
        Download Tashi
      </a>
    </div>
  </section>
</template>
