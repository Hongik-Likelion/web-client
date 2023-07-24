import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MakeMap from './function/MakeMap';
import MenuBar from './components/menu/MenuBar';

import Bookmarkpage from './pages/Bookmarkpage';
import Articlepage from './pages/Articlepage';
import FindWaypage from './pages/FindWaypage';
import MapHomepage from './pages/MapHomepage';
import MyPagepage from './pages/MyPagepage';

function App() {
  return (
    <div className="App">
      <MakeMap />

      <Routes>
        <Route path="/mapHome" element={<MapHomepage />}></Route>
        <Route path="/findway" element={<FindWaypage />}></Route>
        <Route path="/article" element={<Articlepage />}></Route>
        <Route path="/bookMark" element={<Bookmarkpage />}></Route>
        <Route path="/myPage" element={<MyPagepage />}></Route>
      </Routes>
      <MenuBar />
    </div>
  );
}

export default App;
