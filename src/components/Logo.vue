<template>
  <div class="logo">
    <router-link class="logo__link" to="/number"></router-link>
  </div>
</template>

<style scoped>
.logo {
  position: relative;
  width: 146px;
  height: 90px;
  z-index: 10;
}

.logo__link {
  display: block;
  width: 156px;
  height: 94px;
  background: url("/public/assets/logo.png");
}
</style>
