<script>
import SocialLinks from './SocialLinks.vue'

export default {
  name: 'Navbar',
  methods: {
    changeContent(page) {
      this.$emit('change-page', page)
    },
  },
  components: { SocialLinks },
}
</script>

<template>
  <header
    class="py-4 px-6 flex justify-between items-center border-b border-gray-300 dark:border-sky-700 bg-tashi-background"
  >
    <nav class="flex items-center">
      <div class="logo lg:block sm:hidden">
        <a class="cursor-pointer flex gap-4" @click="changeContent('homepage')">
          <div><img src="/logos/Logo.svg" class="block dark:hidden" /></div>
          <div><img src="/logos/logo-white.svg" class="hidden dark:block" /></div>
          <div
            class="rounded-3xl py-2 px-4 text-tashi-white-100 text-sm"
            style="background: linear-gradient(99deg, #798BFF, #36C3CB);
}"
          >
            Developer
          </div>
        </a>
      </div>
    </nav>
    <SocialLinks />
  </header>
</template>
