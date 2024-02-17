<script setup lang="ts">
import { RouterLink } from "vue-router";
import Logo from "@/components/Logo.vue";
import Menu from "@/components/Menu.vue";
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <Logo />
      <Menu />
    </div>
  </header>
</template>

<style scoped>
.header {
  background: url("/public/assets/header-bg.png") center top repeat-x;
}

.header__container {
  display: flex;
  justify-content: space-between;
  padding: 0 0 4px;
}
</style>
