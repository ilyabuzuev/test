<script setup lang="ts">
import MenuItem from "@/components/MenuItem.vue";
</script>

<template>
  <nav class="menu">
    <ul class="menu__list">
      <li>
        <MenuItem class="menu__item--is-active" href="/number" title="num"
          >Числа</MenuItem
        >
      </li>
      <li>
        <MenuItem href="/number" title="win">Определить победителя</MenuItem>
      </li>
      <li>
        <MenuItem href="/number" title="pass">Пароли</MenuItem>
      </li>
      <li>
        <MenuItem href="/number" title="ask">Ответы и предсказания</MenuItem>
      </li>
      <li>
        <MenuItem href="/number" title="qu">Вопросы</MenuItem>
      </li>
      <li>
        <MenuItem href="/number" title="tick">Счастливые билеты</MenuItem>
      </li>
      <li>
        <MenuItem href="/number" title="fact">Факты</MenuItem>
      </li>
      <li>
        <MenuItem href="/number" title="doings"
          >Чек-лист<br />дел жизни</MenuItem
        >
      </li>
      <li>
        <MenuItem href="/number" title="say">Мудрости</MenuItem>
      </li>
      <li>
        <MenuItem href="/number" title="profile">Личный кабинет</MenuItem>
      </li>
      <li>
        <MenuItem href="/number" title="void"></MenuItem>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.menu {
  position: relative;
  left: -5px;
  z-index: 10;
}

.menu__list {
  display: flex;
}
</style>
