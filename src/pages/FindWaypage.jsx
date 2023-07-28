import React from 'react';
import styled from 'styled-components';

function FindWaypage() {
  return (
    <div className="FindWaypage">
      <FindWaypageSelectionBar src="/menuIcon/selectedBar.png" />
    </div>
  );
}

const FindWaypageSelectionBar = styled.img`
  position: fixed;
  margin-left: 100px;
  margin-top: 200px;
  z-index: 2;
`;

export default FindWaypage;
