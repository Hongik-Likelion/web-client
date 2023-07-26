import React, { useEffect } from 'react';
import styled from 'styled-components';

const { kakao } = window;

const KakaoMapAPI = () => {
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
      <MapContainer id="map"></MapContainer>
      <RightMenu>
        <FirstIcon src="/mapImg/first.png" />
        <BiggerIcon src="/mapImg/second.png" />
        <BiggerIcon src="/mapImg/third.png" />
        <FourthIcon src="/mapImg/four.png" />
        <FifthIcon src="/mapImg/five.png" />
      </RightMenu>
    </div>
  );
};

const MapContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const RightMenu = styled.div`
  position: fixed;
  display: flex;
  width: 110px;
  height: 100vh;
  top: 0;
  right: 0;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`;

const FirstIcon = styled.img`
  width: 60px;
  height: 63px;
  margin-top: 80px;
`;

const BiggerIcon = styled.img`
  width: 60px;
  height: 157px;
  margin-top: 8px;
  margin-bottom: 0;
`;

const FourthIcon = styled.img`
  width: 53px;
  height: 53px;
  margin: 0;
  margin-top: 70px;
`;

const FifthIcon = styled.img`
  width: 53px;
  height: 53px;
  margin: 0;
  margin-top: 11px;
`;

export default KakaoMapAPI;
