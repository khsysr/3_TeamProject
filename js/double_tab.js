const countryBtn = document.querySelectorAll(".tab_mover"),
  descCloser = document.getElementById("closer_btn"),
  descWrap = document.querySelector(".tab_wrap"),
  tabItem = document.querySelectorAll(".tab_item"),
  tabSmall = document.querySelectorAll(".small_mover");
const closeTargets = document.querySelectorAll(".small_item"); // 소메뉴 전체

/* 티켓창 닫기 */
descCloser.addEventListener("click", () => {
  const closeThing = document.getElementById("myModal");
  const ticketPaste = document.getElementById("small-ticket");
  closeThing.classList.remove("active");
  ticketPaste.classList.remove("falling");
});

/* 국가 버튼 이벤트 */
countryBtn.forEach((things) => {
  things.addEventListener("click", (e) => {
    e.preventDefault();
    /* 탭메뉴 효과 지정 */
    const movingTarget = things.getAttribute("href");
    const openTarget = document.querySelector(movingTarget);
    tabItem.forEach((things) => {
      things.style.display = "none";
    });
    countryBtn.forEach((item) => {
      item.classList.remove("active");
    });
    things.classList.add("active");
    openTarget.style.display = "block";
    /* 국가별 포스터 변경 */
    const poster = things.getAttribute("data-poster");
    const postTarget = document.getElementById("desc_poster");
    postTarget.style.content = `url(${poster})`;
    seoulOpener();
  });
});

/* 소 탭메뉴 이벤트 */
tabSmall.forEach((things) => {
  things.addEventListener("click", (e) => {
    e.preventDefault();
    const targetFinder = e.target.getAttribute("href");
    const openTargetting = document.querySelector(targetFinder);
    /* 탭메뉴 NAV 반전처리 */
    closeTargets.forEach((items) => {
      items.classList.remove("active");
    });
    /* 탭메뉴 실행 */
    tabSmall.forEach((items) => {
      items.classList.remove("active");
    });
    things.classList.add("active");
    openTargetting.classList.add("active");
  });
});

function seoulOpener() {
  const itemSeoul = document.getElementById("little_seoul");
  closeTargets.forEach((items) => {
    items.classList.remove("active");
  });
  itemSeoul.classList.add("active");
}

/** 초기화 함수 */
function doubleTabInit() {
  /* 티켓 창 보이지 않게 처리 */
  // descWrap.style.opacity = 0;
  /* 한국 예매 창이 보이도록 조절 */
  tabItem.forEach((things) => {
    things.style.display = "none";
  });
  const starter = document.getElementById("tab_korea");
  starter.style.display = "block";
  /* 초기 (실행 시) 메뉴 결정 */
  const initBig = document.querySelector(".tab_mover"),
    initSmall = document.querySelector(".small_mover");
  countryBtn.forEach((item) => {
    item.classList.remove("active");
  });
  initBig.classList.add("active");
  tabSmall.forEach((item) => {
    item.classList.remove("active");
  });
  initSmall.classList.add("active");
  seoulOpener();
}
doubleTabInit();

/** 국가메뉴 선택 시 data-place에서 따와서 메뉴 및 도시 활성화 */
countryBtn.forEach((items) => {
  items.addEventListener("click", (e) => {
    const placeSetter = e.target.getAttribute("data-place");
    closeTargets.forEach((things) => {
      things.classList.remove("active");
      const targetCity = things.getAttribute("id");
      if (targetCity == `little_${placeSetter}`) {
        things.classList.add("active");
      }
    });
    tabSmall.forEach((things) => {
      const targetLocked = things.getAttribute("href");
      things.classList.remove("active");
      if (targetLocked == `#little_${placeSetter}`) {
        things.classList.add("active");
      }
    });
  });
});
