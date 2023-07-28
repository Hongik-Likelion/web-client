import React from 'react';
import styled from 'styled-components';

function MapHomepage() {
  return (
    <div className="MapHomepage">
      <MapHomepageSelectionBar src="/menuIcon/selectedBar.png" />
    </div>
  );
}

const MapHomepageSelectionBar = styled.img`
  position: fixed;
  margin-left: 100px;
  margin-top: 90px;
  z-index: 2;
`;

export default MapHomepage;
