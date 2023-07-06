import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { COLORS } from '../../styles/colors';
import { ArticleIcon, BookMarkIcon, LogoIcon, MapIcon, MyPageIcon, PathIcon } from './sidebar-icons';
import SideBarItem from './SideBarItem';

import '../../styles/common/SideBar.css';

SideBar.propTypes = {
  onClick: PropTypes.func,
  selectedMenu: PropTypes.string,
};

function SideBar({ onClick, selectedMenu }) {
  const sideBarMenus = useMemo(
    () => [
      {
        id: 1,
        name: '지도 홈',
        icon: <MapIcon fill={selectedMenu === '지도 홈' ? COLORS.main : COLORS.subgray} />,
      },
      {
        id: 2,
        name: '길찾기',
        icon: <PathIcon fill={selectedMenu === '길찾기' ? COLORS.main : COLORS.subgray} />,
      },
      {
        id: 3,
        name: '상점 아티클',
        icon: <ArticleIcon stroke={selectedMenu === '상점 아티클' ? COLORS.main : COLORS.subgray} />,
      },
      {
        id: 4,
        name: '북마크',
        icon: <BookMarkIcon fill={selectedMenu === '북마크' ? COLORS.main : COLORS.subgray} />,
      },
      {
        id: 5,
        name: '마이페이지',
        icon: <MyPageIcon fill={selectedMenu === '마이페이지' ? COLORS.main : COLORS.subgray} />,
      },
    ],
    [selectedMenu]
  );

  return (
    <aside className="sidebar-container">
      <ul>
        <li className="home-icon">
          <SideBarItem>
            <LogoIcon />
          </SideBarItem>
        </li>
        {sideBarMenus.map((menu) => (
          <li key={menu.id} onClick={() => onClick(menu.name)}>
            <SideBarItem name={menu.name} selected={menu.name === selectedMenu}>
              {menu.icon}
            </SideBarItem>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
