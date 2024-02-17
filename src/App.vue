<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="page__layout">
    <Header/>
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.page__layout {
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
}
</style>
