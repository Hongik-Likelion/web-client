import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Bookmarkpage from '../pages/Bookmarkpage';
import Articlepage from '../pages/Articlepage';
import FindWaypage from '../pages/FindWaypage';
import MapHomepage from '../pages/MapHomepage';
import MyPagepage from '../pages/MyPagepage';

import '../menu/CSS/BookmarkMenubar.css';

function BookmarkMenubar() {
  return (
    <div className="BookmarkMenubar">
      <div>
        <nav className="MainMenubar">
          <img id="zeroAround" src="/menuIcon/zeroAround.png" />
          <Link to="/mapHome">
            <img id="mapHomeImg" src="/menuIcon/mapHomeImg.png" />
          </Link>
          <Link to="/findway">
            <img id="findWay" src="/menuIcon/findWay.png" />
          </Link>
          <Link to="/article">
            <img id="article" src="/menuIcon/article.png" />
          </Link>
          <Link to="/bookMark">
            <img id="bookMark" src="/menuIcon/selectedBookmarkIcon.png" />
          </Link>
          <Link to="/myPage">
            <img id="myPage" src="/menuIcon/myPage.png" />
          </Link>
        </nav>

        <Routes>
          <Route path="/mapHome" element={<MapHomepage />}></Route>
          <Route path="/findway" element={<FindWaypage />}></Route>
          <Route path="/article" element={<Articlepage />}></Route>
          <Route path="/bookmark" element={<Bookmarkpage />}></Route>
          <Route path="/myPage" element={<MyPagepage />}></Route>
        </Routes>
      </div>
      <img id="bookmarkbar" src="/menuIcon/selectedBar.png" />
    </div>
  );
}

export default BookmarkMenubar;
