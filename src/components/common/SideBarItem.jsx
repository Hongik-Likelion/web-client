import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/common/SideBar.css';
import classNames from 'classnames';

SideBarItem.propTypes = {
  children: PropTypes.object,
  name: PropTypes.string,
  selected: PropTypes.bool,
};

function SideBarItem({ children, name = '', selected }) {
  return (
    <div className="sidebar-item">
      {children}
      <span className={classNames('icon-text', { active: selected })}>{name}</span>
    </div>
  );
}

export default SideBarItem;
