import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function BookmarkAPI() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/bookmark');
        const bookmarkData = response.data;
        setDetails(bookmarkData);
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
        <ShopContainer key={id} id="shop">
          <div>
            <Firstline>
              <ShopName>{output.shopName}</ShopName>
              <Open>• 영업중</Open>
            </Firstline>
            <Description>{output.description}</Description>
            <Thirdline>
              <Distance>{output.distance}M</Distance>
              <ReviewCount>• 후기 {output.reviewCount}</ReviewCount>
            </Thirdline>
            <Tag>{output.tag}</Tag>
            <Open>{output.open}</Open>
          </div>
          <CafeImg src="/bookmarkImg/cafeImg.png" />
          <GreyBarImg src="/bookmarkImg/greybar.png" />
        </ShopContainer>
      ))}
    </div>
  );
}

const ShopContainer = styled.div`
  border-bottom: 2px solid #d9d9d9;
  display: flex;
`;

const Firstline = styled.div`
  display: flex;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const ShopName = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
`;

const Open = styled.div`
  font-size: 8px;
  font-weight: 600;
  color: #4ab2c9;
  margin-left: 10px;
`;

const Description = styled.div`
  display: flex;
  margin-left: 10px;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 6px;
`;

const Thirdline = styled.div`
  display: flex;
  margin-top: 6px;
  margin-bottom: 7px;
`;

const Distance = styled.div`
  display: flex;
  margin-left: 10px;
  font-size: 10px;
  font-weight: bold;
`;

const ReviewCount = styled.div`
  display: flex;
  font-size: 10px;
  color: #6f6f6f;
  font-weight: bold;
  margin-left: 5px;
`;

const Tag = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: #4ab2c9;
  margin-left: 10px;
  border: solid #4ab2c9;
  border-radius: 10px;
  border-width: 1px;
  width: 168px;
  height: 16px;
  text-align: center;
  padding-top: 3px;
  padding-bottom: 1px;
  margin-bottom: 12px;
`;

const CafeImg = styled.img`
  display: flex;
  width: 88px;
  height: 88px;
  margin-top: 7px;
  margin-left: 75px;
`;

const GreyBarImg = styled.img`
  display: flex;
  width: 3px;
  height: 15px;
  margin-left: 8px;
  margin-top: 7px;
`;

export default BookmarkAPI;
