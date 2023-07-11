import React from 'react';

import BookmarkMenubar from '../menu/BookmarkMenubar';
import GetBookmarkAPI from '../function/GetBookmarkAPI';

import './Bookmarkpage.css';

function Bookmarkpage() {
  return (
    <div className="Home">
      <BookmarkMenubar />
      <div className="bookmarkSidebar">
        <div id="bar">
          <div id="title">계용운님의 북마크</div>
          <div id="middleBar">
            <div id="bookmarkList">리스트</div>
            <div id="articleList">아티클</div>
          </div>
        </div>
        <div>
          <GetBookmarkAPI />
        </div>
      </div>
      <img id="closedButton" src="/buttonImg/closeButton.png" />
    </div>
  );
}

export default Bookmarkpage;
