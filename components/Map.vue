<template>
  <section class="h-3/4">
    <div class="p-20 w-1/2 mt-20 absolute">
      <!-- TITLE -->
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="absolute">
          <h1 class="tashi-section-title text-tashi-white-100">TCE</h1>
          <div class="tashi-section-subtitle-container truncate">
            <h2 class="tashi-section-subtitle text-tashi-white-100">TASHI Consensus Engine</h2>
          </div>
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
    <div>
      <ClientOnly>
        <Earth />
      </ClientOnly>
    </div>
  </section>
</template>
