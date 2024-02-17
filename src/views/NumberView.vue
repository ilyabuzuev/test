<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";

const linkActive = ref(false);
const inputText = ref("");
const slider = ref<HTMLDivElement>();
const thumb = ref<HTMLDivElement>();
const progress = ref<HTMLDivElement>();
const actionHint = ref<HTMLDivElement>();
const actionIcon = ref<HTMLDivElement>();
const sequence = ref<number>(1);
const radio = ref("one");
const startRange = ref(1);
const endRange = ref(100);
const exceptionCheckbox = ref(false);
const repetitionsCheckbox = ref(false);
const numberList = ref<HTMLDivElement>();

function getRandomInt(min: number, max: number): number {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);

  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}

function getNumberToString(value: number): string {
  return String(value);
}

function setLinkText(): void {
  linkActive.value = true;
}

function mouseDownHandler(evt: Event) {
  evt.preventDefault();

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);

  function onMouseMove(evt: MouseEvent) {
    updateThumbPosition(evt);
  }

  function onMouseUp(evt: Event) {
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);
  }
}

function updateThumbPosition(evt: MouseEvent) {
  const sliderRect = slider.value!.getBoundingClientRect();

  let newLeft = evt.clientX - sliderRect.left;
  let rightEdge = slider.value!.offsetWidth;
  let maxPositionX = rightEdge;
  let count = 49;
  let step = rightEdge / count;

  newLeft = Math.min(
    Math.max(Math.round(newLeft / step) * step, 0),
    maxPositionX
  );

  sequence.value = Math.round(newLeft / step) + 1;

  progress.value!.style.width = newLeft + "px";
  thumb.value!.style.transform = `translateX(${newLeft}px)`;
}

function showHint(evt: MouseEvent) {
  const mouseX = evt.clientX - actionIcon.value!.getBoundingClientRect().left;
  const mouseY = evt.clientY - actionIcon.value!.getBoundingClientRect().top;

  actionHint.value!.style.opacity = String(1);
  actionHint.value!.style.left = mouseX + 190 + "px";
  actionHint.value!.style.top = mouseY + 14 + "px";
}

function hideHint() {
  actionHint.value!.style.opacity = String(0);
}

function generateRandomId(): string {
  const symbols = "0123456789abcdef";

  let randomId = "";

  for (let i = 0; i < 8; i++) {
    randomId += symbols[getRandomInt(0, symbols.length - 1)];
  }

  return randomId;
}

function addNewEl() {
  clear();
  setLinkText();

  const rn = getRandomInt(startRange.value, endRange.value);
  const numbers =
    inputText.value === ""
      ? rn.toString().split("")
      : inputText.value.split("");

  numbers.forEach((number, index) => {
    const el = document.createElement("span");
    const randomId = generateRandomId();

    el.id = randomId;
    el.textContent = number;
    el.className = "random-number";
    el.style.position = "relative";
    el.style.transform = "translateY(-140px)";
    el.style.transition = "transform .2s ease";

    numberList.value!.appendChild(el);

    setTimeout(() => {
      animate(randomId);
    }, 65 * index);
  });

  inputText.value = "";
}

function renderRandomNumber() {
  const rn = getRandomInt(startRange.value, endRange.value);
  const numbers = rn.toString().split("");

  numbers.forEach((number, index) => {
    const el = document.createElement("span");
    const randomId = generateRandomId();

    el.id = randomId;
    el.textContent = number;
    el.className = "random-number";
    el.style.position = "relative";

    numberList.value!.appendChild(el);
  });
}

function clear() {
  const elements = document.getElementsByClassName("random-number");
  const arr = Array.from(elements);

  arr.forEach((element) => {
    element.remove();
  });
}

function animate(id: string) {
  const el = document.getElementById(id);

  el!.style.transform = "translateY(0px)";
}

const pixel = ref(false);

function showPixel() {
  pixel.value = true;
}

function hidePixel() {
  pixel.value = false;
}

onMounted(() => {
  renderRandomNumber();
});
</script>

<template>
  <div :class="{ 'pixel-is-shown': pixel }" class="PIXEL"></div>
  <div class="container">
    <h1 class="title">Случайное число:</h1>
    <div class="number" ref="numberList"></div>
    <div class="link__wrapper">
      <a class="link" v-if="linkActive === false" href="#">
        Проводите розыгрыш во ВКонтакте?
        <br />
        Мы поможем определить победителя!
      </a>
      <a class="link-active" v-else href="#">сохранить это число</a>
    </div>
    <button class="button" @click="addNewEl" />
    <div class="description">
      <div class="description__text">новую последовательность из</div>
      <div class="slider" ref="slider" @mousedown="updateThumbPosition($event)">
        <div class="progress" ref="progress"></div>
        <div
          class="thumb"
          ref="thumb"
          @mousedown="mouseDownHandler($event)"
          @dragstart="() => false"
        ></div>
      </div>
      <div class="sequence description__text">
        {{ sequence }}
        <span
          v-if="
            sequence === 1 ||
            sequence === 21 ||
            sequence === 31 ||
            sequence === 41
          "
        >
          случайного числа
        </span>
        <span v-else> случайных чисел </span>
      </div>
    </div>
    <div class="checkbox__list">
      <label class="checkbox">
        <input
          class="checkbox__input"
          type="radio"
          value="one"
          v-model="radio"
        />
        <span
          class="checkbox__subtitle"
          :class="{ 'checkbox--is-checked': radio === 'one' }"
        >
          из диапазона
        </span>
      </label>
      или
      <label class="checkbox">
        <input
          class="checkbox__input"
          type="radio"
          value="two"
          v-model="radio"
        />
        <span
          class="checkbox__subtitle"
          :class="{ 'checkbox--is-checked': radio === 'two' }"
        >
          из списка
        </span>
      </label>
    </div>
    <div class="input__list" v-if="radio === 'one'">
      <div class="input__box">
        <span class="input__label">от</span>
        <input
          class="input__field"
          type="text"
          v-model="startRange"
          maxlength="9"
          autocomplete="off"
        />
      </div>
      <div class="input__box">
        <span class="input__label">до</span>
        <input
          class="input__field"
          type="text"
          v-model="endRange"
          maxlength="9"
          autocomplete="off"
        />
      </div>
    </div>
    <div v-else>
      <textarea
        class="textarea"
        maxlength="8388607"
        autocomplete="off"
        placeholder="укажите список целых чисел"
      ></textarea>
    </div>
    <div class="exception__box">
      <label class="exception__label">
        <input
          class="exception__input"
          v-model="exceptionCheckbox"
          type="checkbox"
        />
        <span class="exception__subtitle">исключить числа</span>
      </label>
      <textarea
        v-if="exceptionCheckbox"
        class="textarea exception__textarea"
        maxlength="8388607"
        autocomplete="off"
        placeholder="укажите список целых чисел"
      />
    </div>
    <div
      class="unique__box"
      :class="{ 'is-hidden': sequence === 1, 'is-shown': sequence > 1 }"
    >
      <label class="unique__label">
        <input
          class="unique__input"
          v-model="repetitionsCheckbox"
          type="checkbox"
        />
        <span class="unique__subtitle">исключить повторения</span>
      </label>
    </div>
    <div class="action__box">
      <span class="action">Записать видео генерации</span>
      <div
        ref="actionIcon"
        @mouseover="showHint($event)"
        @mouseleave="hideHint"
      >
        <Icon
          class="action__icon"
          color="black"
          icon="fa-question-circle"
          height="12px"
          width="14px"
        />
      </div>
      <div class="action__hint" ref="actionHint">
        Разрешите доступ к вашему экрану что бы начать запись видео. По
        окончанию записи закройте доступ. Записанное видео будет сохранено на
        ваш компьютер автоматически.
      </div>
    </div>
    <div class="extra">
      <div>
        <a class="extra__link" href="https://vk.com/app2846704">
          Приложение во ВКонтакте
        </a>
      </div>
      <div class="extra__api">
        <span class="extra__widget">Виджет ГСЧ на сайт</span>
      </div>
    </div>
  </div>
  <input
    @focus="showPixel"
    @blur="hidePixel"
    class="input"
    v-model="inputText"
    type="text"
  />
</template>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 0 20px;
}

.input {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none !important;
  color: transparent;
  cursor: default;
}

.input::selection {
  color: transparent;
}

.input:focus {
  border: 4px solid red;
}

.title {
  position: relative;
  margin: 0 auto 20px;
  font-size: 30px;
  font-weight: 400;
  line-height: 34px;
  z-index: 10;
}

.number {
  position: relative;
  display: flex;
  margin: -10px auto 0;
  padding-bottom: 40px;
  font-size: 96px;
  font-weight: normal;
  overflow: hidden;
  z-index: 10;
}

.link__wrapper {
  position: relative;
  top: 5px;
  display: flex;
  align-items: end;
  height: 20px;
  margin: -15px 0 20px;
  z-index: 10;
}

.link {
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  color: #b30000;
  text-decoration: underline;
}

.link:hover {
  text-decoration: none;
}

.link-active {
  position: relative;
  top: -10px;
  font-size: 14px;
  line-height: 19px;
  color: #b30000;
  border-bottom: 1px dashed #b30000;
}

.link-active:hover {
  border-bottom: 1px dashed transparent;
}

.button {
  position: relative;
  width: 280px;
  height: 80px;
  background: url("/public/assets/button-bg.png") left top no-repeat;
  z-index: 10;
}

.button:active {
  background: url("/public/assets/button-bg.png") 0 80px;
}

.description {
  position: relative;
  padding-top: 14px;
  line-height: 25px;
}

.description__text {
  position: relative;
  text-align: center;
  font-size: 14px;
  line-height: 25px;
  z-index: 10;
}

.slider {
  position: relative;
  width: 260px;
  height: 11px;
  margin: 8px auto 5px;
  background: url("/public/assets/slider-bg.png");
  z-index: 10;
}

.thumb {
  position: relative;
  width: 22px;
  height: 24px;
  left: 0;
  top: -6px;
  margin-left: -11px;
  background: url("/public/assets/slider-thumb-bg.png");
  cursor: pointer;
  z-index: 10;
}

.progress {
  position: absolute;
  height: 100%;
  background: url("/public/assets/slider-progress-bg.png");
}

.sequence {
  margin: 5px auto 8px;
  height: 20px;
}

.checkbox__list {
  position: relative;
  margin-top: 2px;
  display: flex;
  gap: 3px;
  z-index: 10;
}

.checkbox {
  position: relative;
  display: flex;
  gap: 5px;
}

.checkbox__input {
  position: relative;
  top: 2px;
  z-index: 10;
}

.checkbox__subtitle {
  position: relative;
  top: 1px;
  font-size: 14px;
}

.checkbox__subtitle:hover {
  cursor: pointer;
}

.checkbox--is-checked {
  border-bottom: 1px dashed #000;
}

.input__list {
  position: relative;
  top: 3px;
  display: flex;
  z-index: 10;
}

.input__label {
  position: relative;
  top: -1px;
  font-size: 14px;
}

.input__field,
.textarea {
  position: relative;
  font-size: 14px;
  color: #000;
  background: url("/public/assets/input-bg.png");
  outline: none;
  border: solid 1px #b6b6b6;
  border-radius: 4px;
  box-shadow: 0 1px 0 #fff, inset 0 1px 6px -2px rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.input__field:focus,
.textarea:focus {
  background: #fff;
}

.input__field {
  width: 74px;
  height: 16px;
  margin: 9px 5px;
  padding: 4px 3px 5px;
  line-height: 20px;
}
.textarea {
  position: relative;
  top: 3px;
  width: 250px;
  height: 64px;
  margin: 9px 5px 5px 5px;
  padding: 4px 5px 5px;
  resize: none;
}

.textarea::placeholder {
  line-height: 16px;
  text-align: center;
}

.exception__box {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 25px;
}

.exception__label {
  position: relative;
  top: 3px;
  display: flex;
  gap: 3px;
  height: 25px;
  z-index: 10;
}

.exception__input {
  position: relative;
  top: -2px;
  margin: 0 0 0 12px;
}

.exception__subtitle {
  font-size: 14px;
}

.exception__textarea {
  position: relative;
  top: 0px;
  margin: 9px auto;
}

.unique__box {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 25px;
}

.unique__label {
  position: relative;
  top: 3px;
  display: flex;
  gap: 4px;
  height: 25px;
  z-index: 10;
}

.unique__input {
  position: relative;
  top: -2px;
  margin: 0 0 0 12px;
}

.unique__subtitle {
  font-size: 14px;
}

.is-hidden {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.is-shown {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.action__box {
  position: relative;
  top: 4px;
  margin-top: 15px;
  margin-bottom: 25px;
  position: relative;
  display: flex;
  line-height: 18px;
  z-index: 10;
}

.action {
  position: relative;
  margin-right: 4px;
  margin-left: 10px;
  font-size: 14px;
  color: #b30000;
  border-bottom: 1px dashed #b30000;
  cursor: pointer;
  z-index: 10;
}

.action:hover {
  border-color: transparent;
}

.action__hint {
  position: absolute;
  top: 14px;
  left: 200px;
  padding: 10px;
  width: 300px;
  font-size: 12px;
  line-height: 20px;
  color: white;
  background: #000;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.5s ease, position 0.5s ease;
}

.extra {
  position: relative;
  top: 5px;
  left: 5px;
  padding: 20px 0 0;
}

.extra__link {
  position: relative;
  margin-right: 10px;
  padding-right: 24px;
  font-size: 14px;
  text-decoration: underline;
  color: #000;
  background: url("/public/assets/vk-icon.png") right 2px no-repeat;
  z-index: 10;
}

.extra__link:hover {
  text-decoration: none;
}

.extra__api {
  display: flex;
  justify-content: center;
}

.extra__widget {
  position: relative;
  top: 1px;
  left: -5px;
  text-align: center;
  font-size: 14px;
  color: #b30000;
  border-bottom: 1px dashed #b30000;
  cursor: pointer;
  z-index: 10;
}

.extra__widget:hover {
  border-bottom: 1px dashed transparent;
}

.PIXEL {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 3px;
  height: 3px;
  background: transparent;
}

.input {
  border: none;
  outline: none;
}

.input:focus {
  border: 4px solid transparent;
}

.input:focus .PIXEL {
  background: green;
}

.pixel-is-shown {
  background: green;
}
</style>
