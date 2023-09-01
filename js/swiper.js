const swiper = new Swiper(".mySwiper", {
  initialSlide: 4, // 시작위치
  effect: "coverflow",
  grabCursor: true,
  mousewheel: true,
  centeredSlides: true,
  slidesPerView: "auto",
  /*   autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 200, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
  loop : false,   // 슬라이드 반복 여부 */
  loopAdditionalSlides: 1,
  coverflowEffect: {
    rotate: 35, // 회전
    stretch: 50, // 간격
    depth: 150, //뒤로 감
    modifier: 1.5, // 뒤 간격
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    // 버튼
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  /* 반응형 조건 */
  breakpoints: {
    768: {
      slidesPerView: 5, //브라우저가 768보다 클 때
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3, //브라우저가 1024보다 클 때
      spaceBetween: 50,
    },
  },
});
