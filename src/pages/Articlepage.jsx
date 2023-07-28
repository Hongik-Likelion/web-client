import React from 'react';
import styled from 'styled-components';

function Articlepage() {
  return (
    <div className="ArticlePage">
      <ArticleSelectionBar src="/menuIcon/selectedBar.png" />
    </div>
  );
}

const ArticleSelectionBar = styled.img`
  position: fixed;
  margin-left: 100px;
  margin-top: 310px;
  z-index: 2;
`;

export default Articlepage;
