<script setup lang="ts">
import { RouterLink } from "vue-router";

interface Props {
  href: string;
  title: string;
}

defineProps<Props>();
</script>

<template>
  <router-link class="menu__item" :to="href">
    <span class="icon" :class="title"></span>
    <slot></slot>
  </router-link>
</template>

<style scoped>
.menu__item {
  display: block;
  width: 87px;
  height: 92px;
  font: 13px/16px "Open Sans";
  color: #fff;
  text-shadow: 0 1px 0 #000;
  text-align: center;
}

.menu__item:hover {
  color: #efbf51;
}

.menu__item--is-active {
  color: #efbf51;
}

.menu__item.menu__item--is-active .icon.num {
  background-position: 0 -52px;
}

.menu__item:hover .icon.num {
  background-position: 0 -52px;
}

.menu__item:hover .icon.win {
  background-position: -52px -52px;
}

.menu__item:hover .icon.pass {
  background-position: -208px -52px;
}

.menu__item:hover .icon.ask {
  background-position: -260px -52px;
}

.menu__item:hover .icon.qu {
  background-position: -312px -52px;
}

.menu__item:hover .icon.tick {
  background-position: -364px -52px;
}

.menu__item:hover .icon.fact {
  background-position: -416px -52px;
}
.menu__item:hover .icon.doings {
  background-position: -468px -52px;
}

.menu__item:hover .icon.say {
  background-position: -520px -52px;
}

.menu__item:hover .icon.profile {
  background-position: -572px -52px;
}

.icon {
  display: block;
  width: 52px;
  height: 45px;
  margin: 0 auto;
  background: url("/public/assets/menu-icons.png");
}

.icon.num {
  background-position: 0 0px;
}

.icon.win {
  background-position: -52px 0;
}

.icon.pass {
  background-position: -208px 0;
}

.icon.ask {
  background-position: -260px 0;
}

.icon.qu {
  background-position: -312px 0;
}

.icon.tick {
  background-position: -364px 0;
}

.icon.fact {
  background-position: -416px 0;
}

.icon.doings {
  background-position: -468px 0;
}

.icon.say {
  background-position: -520px 0;
}

.icon.profile {
  background-position: -572px 0px;
}
.icon.void {
  background: none;
}
</style>
