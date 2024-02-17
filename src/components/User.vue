<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  avatar: string;
  name: string;
  hint: string;
}

defineProps<Props>();

const hintState = ref<boolean>(false);

function userHoverHandler() {
  hintState.value = true;
}

function userMouseLeave() {
  hintState.value = false;
}

</script>

<template>
  <div class="user" @mouseover="userHoverHandler" @mouseleave="userMouseLeave" :data-hint="hint">
    <img class="user__avatar" :src="avatar" :alt="name">
    <div class="hint" v-if="hintState">{{ hint }}</div>
  </div>
</template>

<style scoped>
.user {
  position: relative;
  width: 38px;
  height: 38px;
  cursor: pointer;
}

.user__avatar {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.hint {
  position: absolute;
  top: -26px;
  left: 0;
  padding: 2px 3px;
  font-size: 11px;
  color: white;
  background-color: rgba(0,0,0, 0.7);
  border-radius: 3px;
  transition: opacity .3s;
}
</style>