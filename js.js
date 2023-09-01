const container = document.querySelector(".container");
const ticketArea = document.querySelector(".ticket_div");

container.addEventListener("mousemove", function (e) {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseleave", function (e) {
  container.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

const smallTicket = document.getElementById("small-ticket");

ticketArea.addEventListener("click", function (e) {
  smallTicket.classList.add("falling");
});

// container.addEventListener('mouseenter', function(e) {
//     smallTicket.classList.remove('falling');
// });

var modal = document.getElementById("myModal");
var btn = document.getElementById("small-ticket");
var span = document.getElementsByClassName("close")[0];

ticketArea.onclick = function () {
  modal.classList.add("active");
  ticketArea.style.animation = "none";
};

// span.onclick = function () {
//   modal.style.display = "none";
//   smallTicket.classList.remove("falling");
// };

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    smallTicket.classList.remove("falling");
  }
};

/** 슬라이더 기본 정보 처리 */
const textSlider = document.querySelector(".slide-track");
let currentPosition = 0;

const slideItems = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".icon");
let slideWidth = 0; // slide 너비
let iconWidth = 0; // icon 너비

slideItems.forEach((item) => {
  const widthResult = item.clientWidth;
  slideWidth = slideWidth + widthResult;
});

slideIcons.forEach((things) => {
  const iconResult = things.clientWidth;
  iconWidth = iconWidth + iconResult;
});

/* Slider 동적 처리 */
const slideAction = setInterval(() => {
  const reseter = document.getElementById("starter");
  const resetPoint = reseter.getBoundingClientRect().x;
  if (resetPoint <= 0) {
    currentPosition = 0;
  } else {
    currentPosition = currentPosition - 1;
  }
  textSlider.style.transform = `translateX(${currentPosition}px)`;
}, 10);
