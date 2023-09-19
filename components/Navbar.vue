<template>
  <header>
    <!-- NAVBAR -->
    <nav>
      <div class="relative max-w-7xl z-50 mx-auto flex justify-between px-4 py-8 sm:px-6 lg:px-8">
        <!-- LOGO -->
        <div class="relative z-10">
          <a aria-label="Home" href="/">
            <img class="mx-auto h-12" src="images/logos/logo.svg" type="image/svg+xml" alt="Logo" />
          </a>
        </div>
        <div class="flex items-center gap-16">
          <!-- NAVIGATION LINKS -->
          <div class="hidden items-center lg:flex lg:gap-6">
            <!-- <a class="p-2 tashi-nav-link" href="#tashi-our-team">
                  <span class="relative z-10">Our Team</span>
                </a> -->
            <a class="p-2 tashi-nav-link" href="https://medium.com/tashi-gg">
              <span class="relative z-10">Blog</span>
            </a>
            <a class="p-2 tashi-nav-link" href="/careers.html">
              <span class="relative z-10">Careers</span>
            </a>
            <a class="p-2 tashi-nav-link" href="https://tashi.dev">
              <span class="relative z-10">Documentation</span>
            </a>
          </div>
          <div class="flex items-center gap-4">
            <!-- MOBILE MENU -->
            <div class="lg:hidden">
              <!-- NAVBAR TOGGLE -->
              <button
                id="navbar-toggle"
                type="button"
                class="relative z-10 -m-2 p-2 inline-flex items-center rounded-lg opacity-70 transition-opacity active:opacity-100 hover:bg-gray-200/50 [&:not(:focus-visible)]:focus:outline-none"
                aria-label="Toggle site navigation"
                aria-expanded="false"
              >
                <img
                  id="navbar-toggle-expand"
                  class="h-8 w-8"
                  src="images/icons/menu-expand.svg"
                  type="image/svg+xml"
                  alt="Show Menu"
                />
                <img
                  id="navbar-toggle-collapse"
                  class="hidden h-8 w-8"
                  src="images/icons/menu-collapse.svg"
                  type="image/svg+xml"
                  alt="Hide Menu"
                />
              </button>
              <div
                id="navbar-popover-overlay"
                class="hidden fixed inset-0 z-0 bg-gray-300/30 backdrop-blur"
                style="opacity: 1"
                aria-hidden="true"
              ></div>
              <div
                id="navbar-popover-panel"
                class="hidden absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                style="opacity: 1; transform: none"
                tabindex="-1"
              >
                <!-- NAVIGATION LINKS - MOBILE -->
                <div class="space-y-4">
                  <!-- <a class="block tashi-nav-link-mobile" href="#tashi-our-team">Our Team</a> -->
                  <!-- <a class="block tashi-nav-link-mobile" href="#tashi-our-team">Our Team</a> -->
                  <a class="block tashi-nav-link-mobile" href="https://medium.com/tashi-gg">Blog</a>
                  <a class="block tashi-nav-link-mobile" href="/careers.html">Careers</a>
                  <a class="block tashi-nav-link-mobile" href="https://tashi.dev">Documentation</a>
                </div>
                <!-- SOCIAL MEDIA BUTTONS - MOBILE -->
                <div class="mt-8 flex flex-row gap-4">
                  <a
                    class="lg:block tashi-nav-social-media"
                    href="https://www.linkedin.com/company/tashigg"
                    target="_blank"
                  >
                    <img src="images/logos/social/linkedin.svg" alt="LinkedIn" />
                  </a>
                  <a class="lg:block tashi-nav-social-media" href="https://discord.gg/fPNdgUCGnk" target="_blank">
                    <img src="images/logos/social/discord.svg" alt="Discord" />
                  </a>
                  <a class="lg:block tashi-nav-social-media" href="https://www.reddit.com/user/tashigg" target="_blank">
                    <img src="images/logos/social/reddit.svg" alt="Reddit" />
                  </a>
                  <a class="lg:block tashi-nav-social-media" href="https://twitter.com/tashiggofficial" target="_blank">
                    <img src="images/logos/social/twitter.svg" alt="Twitter" />
                  </a>
                  <a class="lg:block tashi-nav-social-media" href="https://medium.com/tashi-gg" target="_blank">
                    <img src="images/logos/social/medium.svg" alt="Medium" />
                  </a>
                  <!-- <a class="lg:block tashi-nav-social-media" href="https://dev.to/tashigg" target="_blank">
                          <img src="images/logos/social/dev.svg" alt="Dev.to" />
                        </a> -->
                </div>
              </div>
            </div>
            <!-- SOCIAL MEDIA BUTTONS -->
            <a
              class="hidden lg:block tashi-nav-social-media"
              href="https://www.linkedin.com/company/tashigg"
              target="_blank"
            >
              <img src="images/logos/social/linkedin.svg" alt="LinkedIn" />
            </a>
            <a class="hidden lg:block tashi-nav-social-media" href="https://discord.gg/fPNdgUCGnk" target="_blank">
              <img src="images/logos/social/discord.svg" alt="Discord" />
            </a>
            <a
              class="hidden lg:block tashi-nav-social-media"
              href="https://www.reddit.com/user/tashigg"
              target="_blank"
            >
              <img src="images/logos/social/reddit.svg" alt="Reddit" />
            </a>
            <a
              class="hidden lg:block tashi-nav-social-media"
              href="https://twitter.com/tashiggofficial"
              target="_blank"
            >
              <img src="images/logos/social/twitter.svg" alt="Twitter" />
            </a>
            <a class="hidden lg:block tashi-nav-social-media" href="https://medium.com/tashi-gg" target="_blank">
              <img src="images/logos/social/medium.svg" alt="Medium" />
            </a>
            <!-- <a class="hidden lg:block tashi-nav-social-media" href="https://dev.to/tashigg" target="_blank">
                  <img src="images/logos/social/dev.svg" alt="Dev" />
                </a> -->
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
