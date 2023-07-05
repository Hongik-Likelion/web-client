import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/common/SideBar.css';

SideBarItem.propTypes = {
  children: PropTypes.object,
  name: PropTypes.string,
};

function SideBarItem({ children, name = '' }) {
  return (
    <div className="sidebar-item">
      {children}
      <span className="icon-text">{name}</span>
    </div>
  );
}

export default SideBarItem;
