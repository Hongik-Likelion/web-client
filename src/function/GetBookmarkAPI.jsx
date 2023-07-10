import axios from 'axios';
import React, { useEffect, useState } from 'react';

function GetBookmarkAPI() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/bookmark')
      .then((res) => {
        setDetails(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
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
