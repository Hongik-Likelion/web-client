import React from 'react';
import styled from 'styled-components';
import BookmarkAPI from '../API/BookmarkAPI';

function Bookmarkpage() {
  return (
    <div>
      <BookmarkSidebar>
        <Bar>
          <Title>계용운님의 북마크</Title>
          <MiddleBar>
            <BookmarkList>리스트</BookmarkList>
            <ArticleList>아티클</ArticleList>
          </MiddleBar>
        </Bar>
        <div>
          <BookmarkAPI />
        </div>
      </BookmarkSidebar>
      <ClosedButton src="/buttonImg/closedButton.png" />
      <BookmarkPageSelectionBar src="/menuIcon/selectedBar.png" />
    </div>
  );
}

const BookmarkSidebar = styled.div`
  position: fixed;
  width: 375px;
  height: 100vh;
  background-color: white;
  margin-left: 105px;
  margin-top: -8px;
  z-index: 1;
`;

const Bar = styled.div`
  margin-top: 18px;
  width: 375px;
  height: 82px;
`;

const Title = styled.div`
  font-size: 19px;
  font-weight: bold;
  margin-left: 10px;
`;

const MiddleBar = styled.div`
  margin-top: 13px;
  display: flex;
  justify-content: space-between;
  height: 36px;
  font-size: 15px;
`;

const BookmarkList = styled.div`
  font-weight: bold;
  display: grid;
  width: 187.5px;
  place-items: center;
  border-bottom: 2px solid black;
`;

const ArticleList = styled.div`
  width: 187.5px;
  display: grid;
  place-items: center;
  color: #6f6f6f;
  border-bottom: 2px solid #d9d9d9;
`;

const ClosedButton = styled.img`
  position: fixed;
  margin-left: 470px;
  z-index: 2;
  margin-top: 412px;
`;

const BookmarkPageSelectionBar = styled.img`
  position: fixed;
  margin-left: 100px;
  margin-top: 415px;
  z-index: 2;
`;

export default Bookmarkpage;
