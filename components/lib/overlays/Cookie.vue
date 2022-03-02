<template>
  <transition name="fade">
    <div v-if="showCookieBanner" class="fixed z-50 bottom-0 w-screen md:p-8">
      <section
        class="m-auto p-4 w-full max-w-screen-2xl bg-primary-lightest md:px-8 md:rounded-lg md:shadow-lg"
      >
        <div class="flex flex-col gap-4 items-center md:flex-row">
          <p class="text-justify text-primary font-bold md:text-left">
            We and selected partners and related companies, use cookies and
            similar technologies as specified in our Cookies Policy. You agree
            to consent to the use of these technologies by clicking Accept, or
            by continuing to browse this website. You can learn more about how
            we use cookies and set cookie preferences in Settings.
          </p>
          <button
            id="btn"
            class="text-white px-8 py-2 w-full text-sm font-bold hover:bg-error bg-primary rounded shadow-xl transition md:w-auto"
            @click="showCookieBanner = false"
          >
            Masquer
          </button>
        </div>
      </section>
    </div>
  </transition>
</template>

<script lang="ts">
export default {
  name: 'Cookie',
  data() {
    return {
      showCookieBanner: true,
    }
  },
}
</script>
