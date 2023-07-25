import React from 'react';
import { Routes, Route } from 'react-router-dom';

import KakaoMapAPI from './API/KakaoMapAPI';
import MenuBar from './components/menu/MenuBar';

import Bookmarkpage from './pages/Bookmarkpage';
import Articlepage from './pages/Articlepage';
import FindWaypage from './pages/FindWaypage';
import MapHomepage from './pages/MapHomepage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';

function App() {
  return (
    <div className="App">
      <KakaoMapAPI />
      <Routes>
        <Route path="/mapHome" element={<MapHomepage />}></Route>
        <Route path="/findway" element={<FindWaypage />}></Route>
        <Route path="/article" element={<Articlepage />}></Route>
        <Route path="/bookMark" element={<Bookmarkpage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/myPage" element={<MyPage />}></Route>
      </Routes>

      <MenuBar />
    </div>
  );
}

export default App;
