<script setup lang="ts">
interface Props {
  isBgTransparent?: boolean;
  size?: "xs" | "sm";
}

withDefaults(defineProps<Props>(), {
  size: "sm",
});
</script>

<template>
  <div
    class="icon"
    :class="{ 'icon-transparent': isBgTransparent, 'icon-xs': size === 'xs' }"
  >
    <svg
      class="icon__svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M19.623 7.66c.12-.372 0-.643-.525-.643h-1.745c-.44 0-.644.237-.763.491 0 0-.898 2.17-2.152 3.576-.406.406-.593.542-.813.542-.119 0-.271-.136-.271-.508V7.644c0-.44-.136-.644-.509-.644H10.1c-.27 0-.44.203-.44.407 0 .423.627.525.694 1.711v2.576c0 .559-.101.66-.322.66-.593 0-2.033-2.185-2.897-4.676-.17-.492-.339-.678-.78-.678H4.593C4.085 7 4 7.237 4 7.491c0 .458.593 2.762 2.762 5.813 1.44 2.084 3.49 3.202 5.338 3.202 1.118 0 1.254-.254 1.254-.678v-1.575c0-.509.101-.594.457-.594.254 0 .712.136 1.746 1.136 1.186 1.186 1.39 1.728 2.05 1.728h1.745c.509 0 .746-.254.61-.745-.152-.492-.728-1.203-1.474-2.05-.407-.475-1.017-1-1.203-1.255-.254-.339-.186-.474 0-.78-.017 0 2.118-3.015 2.338-4.032"
        fill="#FFF"
        fill-rule="evenodd"
      />
    </svg>
  </div>
</template>

<style scoped>
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: #4680c2;
  border-radius: 50%;
}

.icon.icon-transparent {
  background-color: transparent;
}

.icon__svg {
  width: 20px;
  height: 20px;
}

.icon:hover {
  opacity: 0.8;
}

.icon.icon-xs .icon__svg {
  width: 18px;
  height: 18px;
}
</style>
