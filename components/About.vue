<template>
  <section id="tashi-benefits" aria-label="Benefits of the TASHI system.">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- TITLE -->
      <div class="absolute">
        <h1 class="tashi-section-title">About Us</h1>
        <div class="tashi-section-subtitle-container">
          <h2 class="tashi-section-subtitle">Benefits That We Deliver</h2>
        </div>
      </div>
      <!-- CONTENT -->
      <div class="overflow-hidden mt-16 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-2 lg:gap-y-2">
          <!-- TEXT -->
          <div
            class="relative mt-1 sm:mt-2 md:mt-4 lg:mt-40 flex flex-col lg:col-span-5 lg:row-span-2 items-center lg:items-start"
          >
            <p
              class="mt-3 lg:mt-6 mx-4 sm:mx-6 md:mx-10 lg:mx-12 px-1 font-poppins text-xs sm:text-base tracking-normal text-justify text-tashi-white-100"
            >
              Tashi delivers a fully-integrated, next-generation game development experience.<br /><br />
              Our proprietary, consensus-based, serverless, distributed game session can help you cut costs, reduce
              cheating, and simplify game architecture.<br /><br />
              We offer the security of a dedicated game server, the cost and infrastructure simplicity of a P2P server,
              and fairness neither offers.
            </p>
            <a
              href=" https://github.com/tashigg/tashi-network-transport/releases/tag/v0.3.0 "
              id="download-tashi-1"
              target="_blank"
              class="text-center w-1/2 mt-6 mx-4 sm:mx-6 md:mx-10 lg:mx-12 px-4 py-2 sm:px-8 sm:py-3 rounded-md bg-tashi-primary shadow-2xl font-poppins font-extrabold text-base lg:text-lg tracking-wider text-tashi-white-100 transition hover:bg-tashi-black"
            >
              Download Tashi
            </a>
          </div>
          <!-- ICONS -->
          <div
            class="overflow-visible relative mt-20 sm:mt-36 md:mt-36 lg:mt-20 flex flex-col md:flex-row lg:flex-col lg:col-span-7 lg:row-span-2 row-start-1 items-center lg:items-baseline gap-3 md:gap-6"
          >
            <!-- RADIAL BG BLUR -->
            <div
              class="max-lg:hidden lg:absolute top-12 h-full w-full bg-gradient-radial from-tashi-secondary via-transparent to-transparent"
            ></div>
            <!-- Lower Cost -->
            <div
              class="lg:absolute flex flex-col h-32 w-48 sm:h-40 sm:w-56 items-center justify-center rounded-2xl lg:mt-4 lg:ml-2 shadow-xl lg:shadow-2xl card-yellow"
            >
              <div
                class="hidden lg:block lg:absolute bottom-12 right-12 rounded-full opacity-60 h-64 w-64 bg-gradient-radial from-[#FFB4137A] via-transparent to-transparent"
              ></div>
              <img class="scale-50 sm:scale-75" src="/images/icons/lower-cost.svg" alt="Lower Cost" />
              <h4 class="sm:mt-4 font-poppins font-medium text-sm sm:text-base text-tashi-white-100 text-center">
                Lower Cost
              </h4>
            </div>
            <!-- Reduce Cheating -->
            <div
              class="lg:absolute flex flex-col h-32 w-48 sm:h-40 sm:w-56 items-center justify-center rounded-2xl lg:mt-48 lg:ml-16 shadow-xl lg:shadow-2xl card-blue"
            >
              <div
                class="hidden lg:block lg:absolute bottom-12 right-12 rounded-full opacity-60 h-64 w-64 bg-gradient-radial from-[#44c1ff87] via-transparent to-transparent"
              ></div>
              <img class="scale-50 sm:scale-75" src="/images/icons/reduced-cheating.svg" alt="Reduce Cheating" />
              <h4 class="sm:mt-4 font-poppins font-medium text-sm sm:text-base text-tashi-white-100 text-center">
                Reduce Cheating
              </h4>
            </div>
            <!-- Simple Game Architecture -->
            <div
              class="lg:absolute flex flex-col h-32 w-48 sm:h-40 sm:w-56 items-center justify-center rounded-2xl lg:mt-12 lg:ml-64 shadow-xl lg:shadow-2xl card-orange"
            >
              <div
                class="hidden lg:block lg:absolute bottom-12 left-12 rounded-full opacity-60 h-64 w-64 bg-gradient-radial from-[#f03f277a] via-transparent to-transparent"
              ></div>
              <img
                class="scale-50 sm:scale-75"
                src="/images/icons/simple-game-architecture.svg"
                alt="Simple Game Architecture"
              />
              <h4 class="sm:mt-4 font-poppins font-medium text-sm sm:text-base text-tashi-white-100 text-center">
                Simple Game Architecture
              </h4>
            </div>
            <!-- Fast & Secure -->
            <div
              class="lg:absolute flex flex-col h-32 w-48 sm:h-40 sm:w-56 items-center justify-center rounded-2xl lg:mt-56 lg:ml-80 shadow-xl lg:shadow-2xl card-green"
            >
              <div
                class="hidden lg:block lg:absolute bottom-12 left-12 rounded-full opacity-60 h-64 w-64 bg-gradient-radial from-[#31f5997a] via-transparent to-transparent"
              ></div>
              <img class="scale-50 sm:scale-75" src="/images/icons/fast-and-secure.svg" alt="Fast & Secure" />
              <h4 class="sm:mt-4 font-poppins font-medium text-sm sm:text-base text-tashi-white-100 text-center">
                Fast & Secure
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
