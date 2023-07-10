import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/tabs/TabTemplates.css';

TabTemplates.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
};

function TabTemplates({ children }) {
  return <div className="tab-container">{children}</div>;
}

export default TabTemplates;
