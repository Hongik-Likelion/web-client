import React from 'react';
import { Map } from 'react-kakao-maps-sdk';

function KakaoMap() {
  return <Map center={{ lat: 37.5703, lng: 126.9903 }} level={3} style={{ width: '100%', height: '100vh' }}></Map>;
}

export default KakaoMap;
