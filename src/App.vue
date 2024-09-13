<template>
  <div id="app" class="app-container">
    <router-view />
    <FooterView v-if="!isHomeRoute" class="footer" />
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import FooterView from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    FooterView
  },
  setup() {
    const route = useRoute();

    const isHomeRoute = computed(() => route.path === '/');

    return {
      isHomeRoute
    };
  }
};
</script>