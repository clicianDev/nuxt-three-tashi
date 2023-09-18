<template>
  <section id="tashi-tce" class="mt-16 mb-16" aria-label="TASHI Consensus Engine.">
    <div>
      <!-- TITLE -->
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="absolute">
          <h1 class="tashi-section-title text-tashi-white-100">TCE</h1>
          <div class="tashi-section-subtitle-container truncate">
            <h2 class="tashi-section-subtitle text-tashi-white-100">TASHI Consensus Engine</h2>
          </div>
        </div>
        <!-- CONTENT -->
        <div class="xs:absolute overflow-hidden xs:mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 xs:grid-cols-12 lg:gap-x-2 lg:gap-y-2">
            <!-- TEXT -->
            <div
              class="relative mt-1 sm:mt-2 md:mt-4 lg:mt-40 flex flex-col xs:col-span-8 row-span-2 items-center xs:items-start"
            >
              <p
                class="text-tashi-white-100 mt-20 sm:mt-28 md:mt-36 lg:mt-12 mx-4 sm:mx-6 md:mx-10 lg:mx-12 px-1 font-poppins text-xs sm:text-base tracking-normal text-justify"
              >
                Tashi Consensus Engine (TCE) lies at the heart of Tashi multiplayer sessions, and without you even
                noticing prevents all state edit cheats, and handles ping differences fairly and organically.
              </p>
              <a
                href="https://discord.gg/fPNdgUCGnk"
                id="join-discord"
                target="_blank"
                class="text-center w-4/5 xs:w-1/2 lg:w-1/2 mt-6 lg:mt-12 mx-4 sm:mx-6 md:mx-10 lg:mx-12 px-4 py-2 sm:px-8 sm:py-3 rounded-md bg-tashi-primary shadow-2xl font-poppins font-extrabold text-base lg:text-lg tracking-wider text-tashi-white-100 transition hover:bg-tashi-black"
              >
                Join our Community
              </a>
            </div>
            <!-- GRAPH -->
            <div
              class="flex flex-col items-center xs:overflow-visible xs:relative -mt-8 xs:-mt-20 md:mt-16 lg:mt-20 md:flex-row lg:flex-col xs:col-span-4 xs:row-span-2 lg:items-baseline xs:gap-3 md:gap-6"
            >
              <img
                class="scale-100 h-64 xs:h-full rotate-90 xs:rotate-0 xs:scale-50 md:scale-75 lg:scale-90 xl:scale-100"
                src="/images/tce/tce-graph.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- TOP SVG -->
      <div class="flex items-center justify-center mx-auto max-w-7xl">
        <img class="-mb-[1px] -mt-48 xs:-mt-0 mask" src="/images/tce/tce-top.svg" />
      </div>
      <!-- SPEED INFO -->
      <div class="flex flex-col items-center justify-center bg-tashi-purple">
        <div class="font-poppins font-light text-tashi-primary text-lg md:text-xl lg:text-2xl text-center">
          Interactive
        </div>
        <div
          class="mt-6 font-poppins font-semibold text-tashi-contrast-100 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center"
        >
          Make a Difference: Test and Choose Locations
        </div>
        <div class="mt-12 flex flex-row justify-center gap-12 lg:gap-36">
          <div class="flex flex-col justify-center items-center gap-4">
            <p
              class="font-poppins font-semibold text-tashi-contrast-100 text-xl md:text-2xl lg:text-3xl text-center"
              id="gamevents"
            >
              -
            </p>
            <p class="font-poppins font-extralight text-tashi-contrast-100 text-base text-center">
              Game events per second
            </p>
          </div>
          <div class="flex flex-col justify-center items-center gap-4">
            <p
              class="font-poppins font-semibold text-tashi-contrast-100 text-xl md:text-2xl lg:text-3xl text-center"
              id="latency"
            >
              -
            </p>
            <p class="font-poppins font-extralight text-tashi-contrast-100 text-base text-center">Latency</p>
          </div>
          <div class="flex flex-col justify-center items-center gap-4">
            <p
              class="font-poppins font-semibold text-tashi-contrast-100 text-xl md:text-2xl lg:text-3xl text-center"
              id="numofplayers"
            >
              0
            </p>
            <p class="font-poppins font-extralight text-tashi-contrast-100 text-base text-center">Number of players</p>
          </div>
        </div>

        <div class="w-full mx-auto max-w-7xl">
          <div class="bg-tashi-purple flex items-center justify-center">
            <div class="w-full h-full mx-12 -mt-4 sm:-mt-8 md:-mt-12 lg:-mt-16">
              <ClientOnly>
                <Earth />
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>

      <!-- BOTTOM SVG -->
      <div class="flex items-center justify-center mx-auto max-w-7xl">
        <img class="-mt-[1px] mask" src="/images/tce/tce-bottom.svg" />
      </div>
    </div>
  </section>
</template>
