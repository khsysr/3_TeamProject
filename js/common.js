/** 문서 로드 시 & 창 크기 조절 시 초기화 함수 */
function WholeInit() {
  initHeader();
  headerImgInit();
  changeImageSources();
}
window.addEventListener("resize", () => {
  WholeInit();
});
window.onload = () => {
  WholeInit();
};
