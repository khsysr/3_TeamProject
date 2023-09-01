/* 	var map = new naver.maps.Map('map', {
	center: new naver.maps.LatLng(36.34891784016096 , 127.37557224074172), // 그린아트 컴퓨터학원
	zoom: 18
		});
		
		var marker = new naver.maps.Marker({
		    position: new naver.maps.LatLng(36.34891784016096 , 127.37557224074172),
		    map: map
		});

        naver.maps.Event.addListener(map, 'click', function(e) {
    marker.setPosition(e.latlng);
}); */

const position = new naver.maps.LatLng(36.34930768446836, 127.37750117279369);
//<!-- 그린아트 컴퓨터 학원 경로 -->

const map = new naver.maps.Map("map", {
  center: position,
  zoom: 18,
});

const markerOptions = {
  //마커 변경
  position: position,
  map: map,
  /*    icon: {
        url: './img/pin_default.png',
        size: new naver.maps.Size(22, 55),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(15, 35)
    } */
};
/* ************************************************************************ */

const marker = new naver.maps.Marker(markerOptions);
const Place = new naver.maps.LatLng(36.34930768446836, 127.3775011727945);

const markers = [];
const infowindows = [];

markers.push(
  new naver.maps.Marker({
    map: map,
    position: Place,
  })
);

infowindows.push(
  new naver.maps.InfoWindow({
    content: [
      '<div class="Main_content">',
      ' <div id="open-modal"><h3>Water_Bomb</h3></div>' /* 장소 클릭 */,
      "</div>",
    ].join(""),
  })
);

for (let i = 0; i < markers.length; i++) {
  naver.maps.Event.addListener(markers[i], "click", function (e) {
    if (infowindows[i].getMap()) {
      infowindows[i].close();
    } else {
      infowindows[i].open(map, markers[i]);
    }
  });
}

infowindows[0].open(map, markers[0]);

/* 모달영역 자바스크립트 */
const mapmodal = document.getElementById("modal");
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");

openModalBtn.addEventListener("click", () => {
  mapmodal.classList.add("active");
  document.body.style.overflow = "hidden"; // 스크롤바 가리기
});
closeModalBtn.addEventListener("click", () => {
  mapmodal.classList.remove("active");
  document.body.style.overflow = "auto"; // 스크롤바 보이기
});

/* 뒤 보더값 제거 */
const Main = document.querySelector(".Main_content");
const parent = Main.parentNode;
parent.style.width = 0;
parent.style.backgroundColor = "transparent";
parent.style.Color = "transparent";
