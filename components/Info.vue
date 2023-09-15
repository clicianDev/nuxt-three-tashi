<template>
  <section id="tashi-components" class="py-4 sm:py-8" aria-label="Components of the TASHI system.">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- TASHI LOGO -->
      <div class="flex items-center mx-auto max-w-2xl h-20 sm:h-32 lg:h-40">
        <img class="mx-auto h-16 sm:h-20 lg:h-24" src="/images/logos/logo.svg" type="image/svg+xml" alt="TASHI Logo" />
      </div>
      <!-- COMPONENTS LIST -->
      <ul
        role="list"
        class="list-none mx-auto mt-4 lg:mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-8 sm:grid-cols-1 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
      >
        <li class="ml-8 lg:ml-16 mr-8 pl-4 tashi-component-card">
          <h2 class="tashi-component-card-title">Tashi Network Transport (TNT)</h2>
          <p class="mt-2 tashi-component-card-text">
            Tashi Network Transport (TNT) integrates seamlessly with Unity’s
            <a
              class="underline"
              href="https://docs-multiplayer.unity3d.com/netcode/current/about/index.html"
              target="_blank"
              >Netcode for GameObjects</a
            >. There is almost nothing you need to change about your game other than import the plugin.
          </p>
        </li>
        <li class="ml-8 lg:ml-16 mr-8 pl-4 tashi-component-card">
          <h2 class="tashi-component-card-title">Tashi Consensus Engine (TCE)</h2>
          <p class="mt-2 tashi-component-card-text">
            Tashi Consensus Engine (TCE) lies at the heart of Tashi multiplayer sessions, and without you even noticing
            prevents all state edit cheats, and handles player ping compensation fairly and organically.
          </p>
        </li>
        <li class="ml-8 lg:ml-16 mr-8 pl-4 tashi-component-card">
          <h2 class="tashi-component-card-title">Tashi Developer Console (TDC)</h2>
          <p class="mt-2 tashi-component-card-text">
            Tashi Developer Console (TDC) is your one-stop-shop for game development, delivering Game PaaS starting with
            Tashi Multiplayer sessions during Closed Beta.
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
