import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as MapIcon } from '../menuIcon/MapIcon.svg';
import { ReactComponent as FindWayIcon } from '../menuIcon/FindWayIcon.svg';
import { ReactComponent as ArticleIcon } from '../menuIcon/ArticleIcon.svg';
import { ReactComponent as BookMarkIcon } from '../menuIcon/BookMarkIcon.svg';
import { ReactComponent as LoginIcon } from '../menuIcon/LoginIcon.svg';

import styled from 'styled-components';

function MenuBar() {
  const [menu, setMenu] = useState(0);

  const handleMenuClick = (menuNumber) => {
    setMenu(menuNumber);
  };

  return (
    <BackMenu>
      <MainMenubar>
        <ZeroAround src="/menuIcon/zeroAround.png" />
        <Link to="/mapHome">
          <StyledMapIcon fill={menu === 1 ? '#4AB2C9' : '#B6B6B6'} onClick={() => handleMenuClick(1)} />
        </Link>
        <Link to="/findway">
          <StyledFindWayIcon fill={menu === 2 ? '#4AB2C9' : '#B6B6B6'} onClick={() => handleMenuClick(2)} />
        </Link>
        <Link to="/article">
          <StyledArticleIcon stroke={menu === 3 ? '#4AB2C9' : '#B6B6B6'} onClick={() => handleMenuClick(3)} />
        </Link>
        <Link to="/bookMark">
          <StyledBookMarkIcon fill={menu === 4 ? '#4AB2C9' : '#B6B6B6'} onClick={() => handleMenuClick(4)} />
        </Link>
        <Link to="/myPage">
          <StyledLoginIcon fill={menu === 5 ? '#4AB2C9' : '#B6B6B6'} onClick={() => handleMenuClick(5)} />
        </Link>
      </MainMenubar>

      <SpecificMenubar>
        <img id="openbutton" src="/buttonImg/openMenubar.png" />
      </SpecificMenubar>
    </BackMenu>
  );
}

const BackMenu = styled.div`
  width: 110px;
  height: 1080px;
`;

const MainMenubar = styled.div`
  position: fixed;
  display: flex;
  width: 110px;
  height: 100vh;
  top: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  border-color: white;
  border-right-color: #4ab2c9;
  border-width: 2px;
  background-color: white;
`;

const SpecificMenubar = styled.div`
  position: fixed;
  margin: 0;
  top: 423px;
  left: 108.6px;
  width: 51px;
  height: 63px;
  border-style: solid;
  border-color: transparent;
  border-width: 2px;
`;

const ZeroAround = styled.img`
  margin-top: 30px;
`;

const StyledMapIcon = styled(MapIcon)`
  margin-top: 30px;
`;

const StyledFindWayIcon = styled(FindWayIcon)`
  margin-top: 30px;
`;

const StyledArticleIcon = styled(ArticleIcon)`
  margin-top: 30px;
`;

const StyledBookMarkIcon = styled(BookMarkIcon)`
  margin-top: 30px;
`;

const StyledLoginIcon = styled(LoginIcon)`
  margin-top: 30px;
`;

export default MenuBar;
