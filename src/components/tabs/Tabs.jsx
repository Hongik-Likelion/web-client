import React from 'react';
import PropTypes from 'prop-types';
import BookMarkTab from './bookmark/BookMarkTab';

Tabs.propTypes = {
  selected: PropTypes.string,
};

function Tabs({ selected }) {
  return (
    <>
      {selected === '북마크' ? <BookMarkTab /> : null}
      <></>
    </>
  );
}

export default Tabs;
