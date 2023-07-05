import React, { useState } from 'react';
import SideBar from '../components/common/SideBar';
import KakaoMap from '../components/KakaoMap';

import '../styles/pages/Home.css';

function Home() {
  /**
   * selectedMenu: {string} 선택한 사이드바의 메뉴
   * clickMenu: {func}(name:string) 사이드바의 메뉴를 클릭하면 selectedMenu에 설정한다.
   */
  const [selectedMenu, clickMenu] = useState();

  return (
    <div className="home-container">
      <SideBar onClick={clickMenu} selectedMenu={selectedMenu} />
      <KakaoMap />
    </div>
  );
}

export default Home;
