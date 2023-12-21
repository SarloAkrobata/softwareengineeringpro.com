// plugins/global-components.js
import Contact from '~/components/Contact.vue';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('Contact', Contact);
});
