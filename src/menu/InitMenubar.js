import React from 'react';

import './InitMenubar.css';

function InitMenubar() {
  return (
    <div className="InitMenubar">
      <div className="MainMenubar">
        <img id="zeroAround" src="/menuIcon/zeroAround.png" />
        <img id="mapHomeImg" src="/menuIcon/mapHomeImg.png" />
        <img id="findWay" src="/menuIcon/findWay.png" />
        <img id="article" src="/menuIcon/article.png" />
        <img id="bookMark" src="/menuIcon/bookMark.png" />
        <img id="myPage" src="/menuIcon/myPage.png" />
      </div>

      <div className="SpecificMenubar">
        <img id="openbutton" src="/buttonImg/openMenubar.png" />
      </div>
    </div>
  );
}

export default InitMenubar;
