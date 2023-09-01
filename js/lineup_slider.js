const lineupWrap = document.getElementById("delta_slider"),
  lineupSlider = document.querySelector(".move_slider");

/** 이미지 삽입 함수 */
function sliderImgPutter(things, idx) {
  const makeImgBox = document.createElement("div");
  makeImgBox.classList.add("lineup_Img");
  makeImgBox.style.backgroundImage = `url(img/lineup_list/guest${things})`;
  lineupSlider.appendChild(makeImgBox);
}
lineup_list.map(sliderImgPutter);

let currentLocate = 0; // 슬라이더 이동 위치 설정

/** 슬라이더 이동 범위 설정 */
function SliderChecker() {
  if (currentLocate > 600) {
    currentLocate = 600;
  } else if (currentLocate < -12400) {
    currentLocate = -12400;
  }
  lineupSlider.style.transform = `translateX(${currentLocate}px)`;
}

/* Slider 설정 */
lineupWrap.addEventListener("wheel", (e) => {
  e.preventDefault();
  const wheelAmount = e.deltaY;
  currentLocate = currentLocate - wheelAmount;
  lineupSlider.style.transform = `translateX(${currentLocate}px)`;
  SliderChecker();
  return currentLocate;
});

/** Top 버튼 이벤트 */
const topBtn = document.getElementById("top_btn");
const ticketBtn = document.getElementById("ticket_btn");

window.addEventListener("scroll", () => {
  const currentYAxis = window.pageYOffset;
  if (currentYAxis >= 1400) {
    topBtn.classList.add("visible");
    ticketBtn.classList.add("visible");
  } else {
    topBtn.classList.remove("visible");
    ticketBtn.classList.remove("visible");
  }
});
