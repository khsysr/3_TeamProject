const header = document.getElementById("gnb"),
  headerMenu = document.querySelector("menu");

/* 헤더 서브메뉴 여닫기 */
header.addEventListener("mouseenter", () => {
  headerMenu.classList.add("open");
  headerMenu.classList.remove("close");
});
headerMenu.addEventListener("mouseleave", () => {
  headerMenu.classList.add("close");
  headerMenu.classList.remove("open");
  const defaultInitImg = "img/header/defaultHeaderImg.png";
  headerImg.style.backgroundImage = `url(${defaultInitImg})`;
});

const headerImg = document.querySelector("#header_img_box > div"),
  imgSaver = document.querySelectorAll(".header_img_saver");

imgSaver.forEach((things, nums) => {
  things.addEventListener("mouseenter", (e) => {
    const imgSaved = e.target.getAttribute("data-image");
    headerImg.style.backgroundImage = `url(${imgSaved})`;
  });
});

/* 헤더 서브메뉴 초기화 */
function headerImgInit() {
  const defaultInitImg = "img/header/defaultHeaderImg.png";
  headerImg.style.backgroundImage = `url(${defaultInitImg})`;
}

/* 반응형 햄버거메뉴 출력 */
const hbg = document.querySelector("#hbg > .hbg");
const resHeader = document.getElementById("res_menu");
hbg.addEventListener("click", () => {
  resHeader.classList.add("open");
});

/* 반응형 햄버거메뉴 소멸 */
const hbgCloser = document.querySelector(".res_closer");
hbgCloser.addEventListener("click", () => {
  resHeader.classList.remove("open");
  resMenuInit();
});

/** 반응형 헤더 초기화 함수 */
function resMenuInit() {
  const resItem = document.querySelectorAll(".res_header_wrap > input");
  resItem.forEach((things, nums) => {
    things.checked = false;
  });
}

/** 헤더 초기화 */
function initHeader() {
  headerMenu.classList.remove("open");
  headerMenu.classList.add("close");
  resHeader.classList.remove("open");
  resMenuInit();
}
