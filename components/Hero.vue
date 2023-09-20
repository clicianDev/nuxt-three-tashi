<template>
  <section class="h-3/4">
    <div class="p-20 w-1/2 mt-20 absolute">
      <p class="text-tashi-primary text-3xl button">Faster. Cheaper. Fairer.</p>
      <h1 class="text-6xl text-white my-5">Introducing Mesh Multiplayer Gaming</h1>
      <div>
        <a
          href=" https://github.com/tashigg/tashi-network-transport/releases/tag/v0.3.0 "
          id="download-tashi-1"
          target="_blank"
          class="text-center w-1/2 mt-10 px-4 py-2 sm:px-8 sm:py-3 rounded-md bg-tashi-primary shadow-2xl font-poppins font-extrabold text-base lg:text-lg tracking-wider text-tashi-white-100 transition hover:bg-tashi-black"
        >
          Download Tashi
        </a>
      </div>
    </div>
    <div>
      <ClientOnly>
        <TheExperience />
      </ClientOnly>
    </div>
  </section>
</template>
