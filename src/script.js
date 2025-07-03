const swiper = new Swiper(".swiper", {
  spaceBetween: 16,
  slidesOffsetBefore: 16,
  slidesOffsetAfter: 16,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: { 320: { enabled: true }, 768: { enabled: false } },
});

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
