<script setup lang="ts"></script>

<template>
  <div class="icon">
    <svg
      class="icon__svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M11.674 6.536a1.69 1.69 0 00-1.688 1.688c0 .93.757 1.687 1.688 1.687a1.69 1.69 0 001.688-1.687 1.69 1.69 0 00-1.688-1.688zm0 5.763a4.08 4.08 0 01-4.076-4.075 4.08 4.08 0 014.076-4.077 4.08 4.08 0 014.077 4.077 4.08 4.08 0 01-4.077 4.075zm-1.649 3.325a7.633 7.633 0 01-2.367-.98 1.194 1.194 0 011.272-2.022 5.175 5.175 0 005.489 0 1.194 1.194 0 111.272 2.022 7.647 7.647 0 01-2.367.98l2.279 2.28a1.194 1.194 0 01-1.69 1.688l-2.238-2.24-2.24 2.24a1.193 1.193 0 11-1.689-1.689l2.279-2.279"
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
  background-color: #eb722e;
  border-radius: 50%;
}

.icon:hover {
  opacity: 0.8;
}

.icon__svg {
  width: 20px;
  height: 20px;
}
</style>
