import React from 'react';
//import logo from './logo.svg';
import { Map } from "react-kakao-maps-sdk";
import Nav from './Nav';
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Maps from "./pages/Maps";
import Direction from "./pages/Direction";
import Article from "./pages/Article";
import Bookmark from "./pages/Bookmark";
import Login from "./pages/Login";
import KakaoCallBack from "./pages/KakaoCallBack";

function App() {
  
  return (
    <>
        <Nav></Nav>
      
        <Map className="map" // 지도를 표시할 Container
          center={{ lat: 33.5563, lng: 126.79581 }} // 지도의 중심좌표
          style={{ width: "calc(100vh-110px)", height: "100vh", marginLeft : "110px" }} // 지도의 크기
        >
        </Map>

        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/direction" element={<Direction />} />
          <Route path="/article" element={<Article />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/kakao-login" element={<Login />} />
          <Route path="/oauth" element={<KakaoCallBack />} />
        </Routes>
    </>

  );
  
}

export default App;
