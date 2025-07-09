import "../../node_modules/focus-visible/dist/focus-visible";
import "../index.html";
import "../componence/main/style-main.css";
import "../componence/slider/style-sliders.css";
import "../componence/menu/style-menu.css";

function createSwiper(selector, paginationSelector) {
  return new Swiper(selector, {
    spaceBetween: 16,
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,
    slidesPerView: "auto",
    pagination: {
      el: paginationSelector,
      clickable: true,
    },
    breakpoints: {
      320: { enabled: true },
      768: { enabled: false },
    },
  });
}

let swiper = null;
let swiper_repair = null;
let swiper_price = null;

function createAllSwipers() {
  swiper = createSwiper(".swiper", ".swiper-pagination");
  swiper_repair = createSwiper(".swiper-repair", ".swiper-pagination-repair");
  swiper_price = createSwiper(".swiper-price", ".swiper-pagination-price");
}

function destroyAllSwipers() {
  if (swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
  if (swiper_repair) {
    swiper_repair.destroy(true, true);
    swiper_repair = null;
  }
  if (swiper_price) {
    swiper_price.destroy(true, true);
    swiper_price = null;
  }
}

function addGridClasses() {
  const brandsWrapper = document.querySelector(".swiper .swiper-wrapper");
  if (brandsWrapper) brandsWrapper.classList.add("grid-brands");
  const repairWrapper = document.querySelector(
    ".swiper-repair .swiper-wrapper"
  );
  if (repairWrapper) repairWrapper.classList.add("grid-repair");
  const priceWrapper = document.querySelector(".swiper-price .swiper-wrapper");
  if (priceWrapper) priceWrapper.classList.add("grid-price");
}

function removeGridClasses() {
  const brandsWrapper = document.querySelector(".swiper .swiper-wrapper");
  if (brandsWrapper) brandsWrapper.classList.remove("grid-brands");
  const repairWrapper = document.querySelector(
    ".swiper-repair .swiper-wrapper"
  );
  if (repairWrapper) repairWrapper.classList.remove("grid-repair");
  const priceWrapper = document.querySelector(".swiper-price .swiper-wrapper");
  if (priceWrapper) priceWrapper.classList.remove("grid-price");
}

function handleResize() {
  const isMobile = window.innerWidth < 768;
  destroyAllSwipers();
  if (isMobile) {
    removeGridClasses();
    createAllSwipers();
  } else {
    addGridClasses();
  }
}

const mobileQuery = window.matchMedia("(max-width: 767px)");

window.addEventListener("resize", handleResize);
document.addEventListener("DOMContentLoaded", () => {
  handleResize();

  const burgerButton = document.querySelector(".menu__button");
  const burgerMenu = document.querySelector(".burger-menu");
  const burgerCloseButton = burgerMenu.querySelector(".close__menu");
  const burgerOverlay = document.querySelector(".overlay-burger");

  burgerButton.addEventListener("click", () => {
    burgerMenu.classList.toggle("hidden-menu");
    burgerOverlay.classList.toggle("overlay-burger__hidden");
  });

  burgerCloseButton.addEventListener("click", () => {
    burgerMenu.classList.add("hidden-menu");
    burgerOverlay.classList.add("overlay-burger__hidden");
  });

  burgerOverlay.addEventListener("click", () => {
    burgerMenu.classList.add("hidden-menu");
    burgerOverlay.classList.add("overlay-burger__hidden");
  });

  const callButton = document.querySelector(".call__button");
  const callMenu = document.querySelector(".call-menu");
  const callCloseButton = callMenu.querySelector(".call__close");
  const callOverlay = document.querySelector(".overlay");

  callButton.addEventListener("click", () => {
    callMenu.classList.toggle("hidden__call");
    callOverlay.classList.toggle("overlay__hidden");
  });

  callCloseButton.addEventListener("click", () => {
    callMenu.classList.add("hidden__call");
    callOverlay.classList.add("overlay__hidden");
  });

  callOverlay.addEventListener("click", () => {
    callMenu.classList.add("hidden__call");
    callOverlay.classList.add("overlay__hidden");
  });

  const feedbackButton = document.querySelector(".feedback__button");
  const feedbackMenu = document.querySelector(".feedback-menu");
  const feedbackCloseButton = feedbackMenu.querySelector(".feedback__close");
  const feedbackOverlay = document.querySelector(".overlay");

  feedbackButton.addEventListener("click", () => {
    feedbackMenu.classList.toggle("hidden__feedback");
    feedbackOverlay.classList.toggle("overlay__hidden");
  });

  feedbackCloseButton.addEventListener("click", () => {
    feedbackMenu.classList.add("hidden__feedback");
    feedbackOverlay.classList.add("overlay__hidden");
  });

  feedbackOverlay.addEventListener("click", () => {
    feedbackMenu.classList.add("hidden__feedback");
    feedbackOverlay.classList.add("overlay__hidden");
  });

  const buttons = document.querySelectorAll(
    ".brands__hidden-button, .repair__hidden-button"
  );
  const grids = document.querySelectorAll(".swiper-wrapper");

  buttons.forEach((button, index) => {
    const toggleText = button.querySelector(
      ".brands__hidden-text, .repair__hidden-text"
    );
    const icon = button.querySelector(
      ".brands__hidden-icon, .repair__hidden-icon"
    );

    const grid = grids[index];

    if (!grid) {
      console.warn(`Не найден grid для кнопки #${index}`);
      return;
    }

    button.addEventListener("click", () => {
      grid.classList.toggle("expanded");
      button.classList.toggle("hidden");
      icon.classList.toggle("rotated");
      toggleText.textContent = grid.classList.contains("expanded")
        ? "Скрыть"
        : "Показать все";
    });
  });

  const textButton = document.querySelector(".content__hidden-button");
  const hiddenText = document.querySelector(".content__text__second");
  const textIcon = document.querySelector(".content__hidden-icon");
  const buttonText = document.querySelector(".content__hidden-text");

  textButton.addEventListener("click", () => {
    const isVisible = hiddenText.classList.contains("text__visible");

    hiddenText.classList.toggle("text__visible");
    textIcon.classList.toggle("icon-rotated");

    buttonText.textContent = isVisible ? "Читать далее" : "Скрыть";
  });
});
