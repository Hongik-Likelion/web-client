import React, { useEffect } from 'react';
import './MakeMap.css';

const { kakao } = window;

const MakeMap = () => {
  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);

    //현재위치 표시 관련
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var gpsImageUrl = process.env.PUBLIC_URL + '/mapImg/gps.png';
        var gpsImageSize = new kakao.maps.Size(42.05, 42.05); // 마커 이미지의 크기
        var currentLatLng = new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude); //현재 위도.경도
        var gpsImageOptions = {
          offset: new kakao.maps.Point(gpsImageSize.width / 2, gpsImageSize.height),
        };
        var gpsImage = new kakao.maps.MarkerImage(gpsImageUrl, gpsImageSize, gpsImageOptions);
        var gps = new kakao.maps.Marker({
          position: currentLatLng,
          image: gpsImage,
          map: map,
        });

        //초기화면을 현재위치 지도로 설정
        map.setCenter(currentLatLng);

        //지도표시범위 설정 (반경표시 - kakao.maps.Circle 객체 생성)
        if (gps) {
          var radius = 500;
          var circle = new kakao.maps.Circle({
            center: currentLatLng,
            radius: radius,
            strokeWeight: 1, // 선의 두께
            strokeColor: '#FFB0B0', // 선의 색상
            strokeOpacity: 1, // 선의 투명도
            strokeStyle: 'solid', // 선의 스타일
            fillColor: '#FFB0B0', // 채우기 색상
            fillOpacity: 0.2, // 채우기 투명도
          });

          // Circle 객체를 지도에 추가
          circle.setMap(map);
        }
      });
    }

    //북마크 (marker) 관련 (클릭한 위치에 마커가 찍히게 하기)
    var markerImageUrl = process.env.PUBLIC_URL + '/mapImg/marker.png';
    var markerImageSize = new kakao.maps.Size(32, 41);

    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
      var clickedLatLng = mouseEvent.latLng;
      var markerImageOptions = {
        offset: new kakao.maps.Point(markerImageSize.width / 2, markerImageSize.height),
      };
      var markerImage = new kakao.maps.MarkerImage(markerImageUrl, markerImageSize, markerImageOptions);
      var marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(clickedLatLng.getLat(), clickedLatLng.getLng()),
        image: markerImage,
        map: map,
      });

      //마커를 클릭했을때 발생하는 일 (여기에 북마크 관련 넣으면 될듯..?)
      kakao.maps.event.addListener(marker, 'click', function () {
        alert('여기서 북마크에 저장시키는 활동이 일어나야함');
      });
    });
  }, []);

  return (
    <div>
      <div id="map"></div>
      <div id="rightMenu">
        <img className="firstIcon" src="/mapImg/first.png" />
        <img className="biggerIcon" src="/mapImg/second.png" />
        <img className="biggerIcon" src="/mapImg/third.png" />
        <img className="fourthIcon" src="/mapImg/four.png" />
        <img className="fifthIcon" src="/mapImg/five.png" />
      </div>
    </div>
  );
};

export default MakeMap;
