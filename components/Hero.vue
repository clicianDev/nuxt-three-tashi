<script>
// function updateCameraPos() {
//   return alert('tt')
// }
</script>
<template>
  <div class="fixed h-full z-30">
    <ClientOnly>
      <TheExperience />
    </ClientOnly>
  </div>
  <div class="overflow-hidden py-4 sm:py-12 lg:py-24 pb-8 sm:pb-16 lg:pb-32 xl:pb-40">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-4">
        <!-- TEXT -->
        <div class="relative z-10 mx-auto lg:col-span-6 max-w-2xl lg:max-w-none lg:pt-7 text-center lg:text-left">
          <p class="mb-12 font-poppins text-xl sm:text-2xl lg:text-3xl tracking-tight text-tashi-primary">
            Faster. Cheaper. Fairer.
          </p>
          <h1
            class="font-poppins font-bold text-center lg:text-left text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-tashi-white-100"
          >
            Introducing Mesh Multiplayer Gaming
          </h1>
        </div>
        <!-- IMAGE -->
        <div class="relative lg:col-span-6 lg:row-span-2 mt-5 sm:mt-10 lg:mt-0 lg:-m-24"></div>
        <!-- CALL-TO-ACTION -->
        <div class="relative -mt-4 flex flex-col lg:col-span-6 lg:mt-0">
          <!-- <div class="flex flex-row items-center justify-center align-middle lg:justify-start">
                  <p class="mt-6 text-center font-poppins font-semibold text-lg lg:text-xl text-tashi-contrast-100 lg:text-left">
                    Sign up for our beta
                  </p>
                  <img class="mt-12" src="images/icons/arrow-rb.svg" />
                </div> -->
          <a
            href="https://tashi.dev"
            id="get-started"
            target="_blank"
            class="text-center lg:w-2/3 mt-4 px-2 py-3 lg:py-4 rounded-md bg-tashi-primary shadow-lg lg:shadow-2xl font-poppins font-extrabold text-lg lg:text-xl tracking-wider text-tashi-white-100 transition hover:bg-tashi-black"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
