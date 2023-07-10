import React, { useState } from 'react';
import TabTemplates from '../TabTemplates';

import '../../../styles/tabs/BookMarkTab.css';
import BookMarkArticleList from './BookMarkArticleList';
import BookMarkList from './BookMarkList';
function BookMarkTab() {
  const [option, setOption] = useState('리스트');

  return (
    <TabTemplates>
      <h3>계용운님의 북마크</h3>

      <div className="bookmark-option-container">
        <span onClick={() => setOption('리스트')}>리스트</span>
        <span onClick={() => setOption('아티클')}>북마크</span>
      </div>
      {option === '리스트' ? <BookMarkList /> : <BookMarkArticleList />}
    </TabTemplates>
  );
}

export default BookMarkTab;
