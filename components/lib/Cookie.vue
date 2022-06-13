<template>
  <transition name="fade">
    <div v-if="showCookieBanner" class="fixed z-50 bottom-0 w-screen md:p-8">
      <section
        class="m-auto p-4 w-full max-w-screen-2xl bg-primary-lightest md:px-8 md:rounded-lg md:shadow-lg"
      >
        <div class="flex flex-col gap-4 items-center md:flex-row">
          <p class="text-justify text-primary flex-grow font-bold md:text-left">
            <b>La protection de votre vie privée est importante</b><br>
            Nous utilisons des cookies et des technologies similaires pour sécuriser votre navigation (Google Recaptcha).
          </p>
          <div class="flex space-x-4 items-center">
            <a href="https://supercard.fr/pages/confidentialite" class="text-primary underline">Politique de confidentialité</a>
            <button
                id="btn"
                class="text-white text-text px-8 py-2 w-full text-sm font-bold hover:bg-error hover:bg-primary-light bg-primary rounded shadow-xl transition md:w-auto"
                @click="showCookieBanner = false"
            >
              Masquer
            </button>
          </div>
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
