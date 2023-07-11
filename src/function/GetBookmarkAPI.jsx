import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        <div key={id}>
          <div>
            <div>{output.shopName}</div>
            <div>{output.description}</div>
            <div>{output.distance}</div>
            <div>{output.reviewCount}</div>
            <div>{output.tag}</div>
            <div>{output.open}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GetBookmarkAPI;
