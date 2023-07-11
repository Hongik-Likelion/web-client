import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './GetBookmarkAPI.css';

function GetBookmarkAPI() {
  const [details, setDetails] = useState([]); // details 상태 변수 추가

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/bookmark');
        const bookmarkData = response.data;
        setDetails(bookmarkData); // 가져온 데이터를 details 상태에 설정
        console.log(bookmarkData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {details.map((output, id) => (
        <div key={id} id="shop">
          <div className="shopInfo">
            <div id="firstline">
              <div className="shopName">{output.shopName}</div>
              <div className="open">• 영업중</div>
            </div>
            <div className="description">{output.description}</div>
            <div id="thirdline">
              <div className="distance">{output.distance}M</div>
              <div className="reviewCount">• 후기 {output.reviewCount}</div>
            </div>
            <div className="tag">{output.tag}</div>
            <div className="open">{output.open}</div>
          </div>
          <img id="cafeImg" src="/bookmarkImg/cafeImg.png" />
          <img id="greyBar" src="/bookmarkImg/greybar.png" />
        </div>
      ))}
    </div>
  );
}

export default GetBookmarkAPI;
