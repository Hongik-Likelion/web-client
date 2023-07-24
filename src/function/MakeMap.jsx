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

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var gpsImageUrl = process.env.PUBLIC_URL + '/mapImg/gps.png';
        var gpsImageSize = new kakao.maps.Size(42.05, 42.05);
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

        map.setCenter(currentLatLng);

        if (gps) {
          var radius = 500;
          var circle = new kakao.maps.Circle({
            center: currentLatLng,
            radius: radius,
            strokeWeight: 1,
            strokeColor: '#FFB0B0',
            strokeOpacity: 1,
            strokeStyle: 'solid',
            fillColor: '#FFB0B0',
            fillOpacity: 0.2,
          });

          circle.setMap(map);
        }
      });
    }

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
