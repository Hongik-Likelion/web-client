import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import KakaoMapAPI from './API/KakaoMapAPI';
import MenuBar from './components/menu/MenuBar';
import { LoginInfo } from './context/LoginUseContext';

import Bookmarkpage from './pages/Bookmarkpage';
import Articlepage from './pages/Articlepage';
import FindWaypage from './pages/FindWaypage';
import MapHomepage from './pages/MapHomepage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';

function App() {
  const [kakaoAccessToken, setKakaoAccessToken] = useState(''); //전역변수 설정

  return (
    <div className="App">
      <KakaoMapAPI />
      <LoginInfo.Provider value={{ kakaoAccessToken, setKakaoAccessToken }}>
        <Routes>
          <Route path="/mapHome" element={<MapHomepage />}></Route>
          <Route path="/findway" element={<FindWaypage />}></Route>
          <Route path="/article" element={<Articlepage />}></Route>
          <Route path="/bookMark" element={<Bookmarkpage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/myPage" element={<MyPage />}></Route>
        </Routes>
      </LoginInfo.Provider>
      <MenuBar />
    </div>
  );
}

export default App;
