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
  const [loggedInUser, setLoggedInUser] = useState(''); // 로그인 상태와 상태 변경 함수 선언

  return (
    <div className="App">
      <KakaoMapAPI />
      <LoginInfo.Provider value={{ loggedInUser, setLoggedInUser }}>
        <Routes>
          <Route path="/mapHome" element={<MapHomepage />}></Route>
          <Route path="/findway" element={<FindWaypage />}></Route>
          <Route path="/article" element={<Articlepage />}></Route>
          <Route path="/bookMark" element={<Bookmarkpage />}></Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/myPage" element={<MyPage />} />
        </Routes>
        <MenuBar />
      </LoginInfo.Provider>
    </div>
  );
}

export default App;
