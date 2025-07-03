import "../../node_modules/focus-visible/dist/focus-visible";
// import "../scss/main.scss";
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
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
    breakpoints: {
      320: { enabled: true },
      768: { enabled: false },
    },
  });
}

const swiper = createSwiper(".swiper", ".swiper-pagination");
const swiper_repair = createSwiper(
  ".swiper-repair",
  ".swiper-pagination-repair"
);
const swiper_price = createSwiper(".swiper-price", ".swiper-pagination-price");

const mobileQuery = window.matchMedia("(max-width: 767px)");

function handleModeSwitch(e) {
  swiper.slideTo(0, 0);
}
mobileQuery.addEventListener("change", handleModeSwitch);

const toggleBtn = document.querySelector(".brands__hidden-button");
const toggleText = toggleBtn.querySelector(".brands__hidden-text");
const icon = toggleBtn.querySelector(".brands__hidden-icon");
const grid = document.querySelector(".swiper-wrapper");

toggleBtn.addEventListener("click", () => {
  grid.classList.toggle("expanded");
  toggleBtn.classList.toggle("hidden");
  icon.classList.toggle("rotated");

  toggleText.textContent = grid.classList.contains("expanded")
    ? "Скрыть"
    : "Показать все";
});

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".menu__button");
  const menu = document.querySelector(".burger-menu");
  const closeButton = menu.querySelector(".close__menu");

  button.addEventListener("click", () => {
    menu.classList.toggle("hidden-menu");
  });

  closeButton.addEventListener("click", () => {
    menu.classList.add("hidden-menu");
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !button.contains(e.target)) {
      menu.classList.add("hidden-menu");
    }
  });
});
