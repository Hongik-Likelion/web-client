import React, { useMemo } from 'react';
import { FaMapMarkerAlt, FaHeart, FaUser, FaRecycle } from 'react-icons/fa';
import { BsArrow90DegRight } from 'react-icons/bs';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import PropTypes from 'prop-types';

import '../../styles/common/SideBar.css';
import SideBarItem from './SideBarItem';

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
        icon: <FaMapMarkerAlt size={40} color={selectedMenu === '지도 홈' ? '#4AB2C9' : '#A8A8A8'} />,
      },
      {
        id: 2,
        name: '길찾기',
        icon: <BsArrow90DegRight size={30} color={selectedMenu === '길찾기' ? '#4AB2C9' : '#A8A8A8'} />,
      },
      {
        id: 3,
        name: '상점 아티클',
        icon: <MdOutlineMarkEmailUnread size={30} color={selectedMenu === '상점 아티클' ? '#4AB2C9' : '#A8A8A8'} />,
      },
      {
        id: 4,
        name: '북마크',
        icon: <FaHeart size={30} color={selectedMenu === '북마크' ? '#4AB2C9' : '#A8A8A8'} />,
      },
      {
        id: 5,
        name: '마이페이지',
        icon: <FaUser size={30} color={selectedMenu === '마이페이지' ? '#4AB2C9' : '#A8A8A8'} />,
      },
    ],
    [selectedMenu]
  );

  return (
    <aside className="sidebar-container">
      <ul>
        <li className="home-icon">
          <SideBarItem>
            <FaRecycle size={40} color="#4AB2C9" />
          </SideBarItem>
        </li>
        {sideBarMenus.map((menu) => (
          <li key={menu.id} onClick={() => onClick(menu.name)}>
            <SideBarItem name={menu.name}>{menu.icon}</SideBarItem>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
