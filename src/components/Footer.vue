<script setup lang="ts">
import { Icon } from "@iconify/vue";
import User from "@/components/User.vue";
import IconVK from "@/components/icons/IconVK.vue";
import IconOK from "@/components/icons/IconOK.vue";
import IconMM from "@/components/icons/IconMM.vue";
import IconTG from "@/components/icons/IconTG.vue";
import IconWA from "@/components/icons/IconWA.vue";
import type { IUser } from "@/models/IUser";

const users: IUser[] = [
  {
    avatar: "/public/assets/user1.jpg",
    name: "Руслан",
  },
  {
    avatar: "/public/assets/user2.jpg",
    name: "Антон",
  },
  {
    avatar: "/public/assets/user3.jpg",
    name: "Антон",
  },
  {
    avatar: "/public/assets/user4.jpg",
    name: "Ксения",
  },
  {
    avatar: "/public/assets/user5.jpg",
    name: "Александра",
  },
  {
    avatar: "/public/assets/user6.jpg",
    name: "Андрей",
  },
  {
    avatar: "/public/assets/user7.jpg",
    name: "Анжеличка",
  },
  {
    avatar: "/public/assets/user8.jpg",
    name: "Самир",
  },
  {
    avatar: "/public/assets/user9.jpg",
    name: "Денис",
  },
];
</script>

<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="share">
        <div class="title">Поделиться:</div>
        <div class="yashare">
          <ul class="yashare__list">
            <li class="yashare__item">
              <a class="yashare__link" href="#">
                <IconVK />
              </a>
            </li>
            <li class="yashare__item">
              <a class="yashare__link" href="#">
                <IconOK />
              </a>
            </li>
            <li class="yashare__item">
              <a class="yashare__link" href="#">
                <IconMM />
              </a>
            </li>
            <li class="yashare__item">
              <a class="yashare__link" href="#">
                <IconTG />
              </a>
            </li>
            <li class="yashare__item">
              <a class="yashare__link" href="#">
                <IconWA />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="support">
        <a class="support__link" href="/donate/">BUY US A BEER!</a>
        <Icon
          class="support__icon"
          icon="fa:beer"
          color="#fff"
          height="11px"
          width="11px"
        />
      </div>
      <div class="community">
        <div class="community__title">Подписаться:</div>
        <div class="community__content">
          <div class="community__header">
            <a class="community__avatar" href="#">
              <img
                src="@/assets/images/avatars/avatar-site.jpg"
                alt="RandStuff.ru"
              />
            </a>
            <a class="community__link" href="#">RandStuff</a>
          </div>
          <div class="community__body">
            <a class="community__subscribers" href="#"> 28 032 подписчика </a>
            <ul class="community__list">
              <User
                class="community__item"
                v-for="user in users"
                :key="user.name"
                :avatar="user.avatar"
                :hint="user.name"
                :name="user.name"
              />
            </ul>
          </div>
          <div class="community__footer">
            <button class="community__button">
              <IconVK isBgTransparent size="xs" />
              <span>Подписаться</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  height: 60px;
  background: url("/public/assets/footer-bg.png") center bottom repeat-x;
}

.footer__container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.share {
  position: relative;
  left: 10px;
  top: -2px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
}

.yashare {
  display: flex;
  align-self: start;
  padding: 4px 8px;
  background: #fff;
  border-radius: 4px;
}

.yashare__list {
  display: flex;
  gap: 4px;
}

.support {
  position: relative;
  left: 5px;
  top: 1px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.support__link {
  font-size: 12px;
  text-decoration: underline;
  color: #fff;
}

.support__link:hover {
  text-decoration: none;
}

.support__icon {
  position: relative;
  top: 1px;
}

.community {
  position: relative;
  top: -10px;
  right: 20px;
  align-self: end;
  width: 160px;
}

.community__title {
  position: absolute;
  bottom: 28px;
  right: 0;
  text-align: end;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  z-index: 1;
}

.community__content {
  position: relative;
  top: 4px;
  height: 28px;
  padding: 2px 10px;
  background-color: #fff;
  border-radius: 3px;
  transition: height 0.2s ease;
  box-shadow: 0 1px 2px 0 #666;
  overflow: hidden;
  z-index: 10;
}

.community__content:hover {
  height: 240px;
  padding: 10px;
}

.community__content:hover .community__header {
  margin-bottom: 10px;
}

.community__content:hover .community__body {
  border-top: 1px solid #e5e5e5;
}

.community__header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.community__avatar {
  width: 27px;
  height: 27px;
}

.community__avatar img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.community__link {
  font-size: 10px;
  font-weight: 700;
  line-height: 18px;
  color: #333;
}

.community__link:hover {
  text-decoration: underline;
}

.community__body {
  padding: 10px 0;
}

.community__subscribers {
  display: block;
  font-size: 10px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 8px;
  color: rgba(211.68496732026, 109.66666666667, 109.66666666667);
}

.community__subscribers:hover {
  text-decoration: underline;
}

.community__list {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 8px;
}

.community__button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  width: 100%;
  font-size: 10px;
  color: white;
  border-radius: 6px;
  background-color: black;
}

.community__button:hover {
  opacity: 0.8;
}
</style>
