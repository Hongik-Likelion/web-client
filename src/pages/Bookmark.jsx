import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Bookmark.css';
import styled from "styled-components";

function Bookmark() {
    const [bookmark, setBookmark] = useState();
    const [click, setClick] = useState(true); //true일 때 리스트 클릭됐다고 가정
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/bookmark`).then(response=>{
            console.log(response.data);
            setBookmark(response.data);
        })

    },[])

    const clicklistEvent = () => {
        setClick(true);
        console.log(click)
    }

    const clickarticleEvent = () => {
        setClick(false);
        console.log(click);
    }

    return (
        <Sidebar>
            <Title>
                계용운님의 북마크
            </Title>
            <SubTitle>
                <button className={click ? "listName" : "articleName"} onClick={clicklistEvent}>
                    리스트
                </button>
                <button className={click ? "articleName" : "listName"} onClick={clickarticleEvent}>
                    아티클
                </button>
            </SubTitle>
            <div>
                {bookmark && bookmark.map((element, i) => (
                    <div key={i} className="listItem">
                        <div>
                            <Wrapper>
                                <ShopName>
                                    {element.shopName}   
                                </ShopName>
                                <Circle width='4px' height='4px' bgColor='#4AB2C9'></Circle>
                                <Open>
                                    {element.open ? '영업중' : '영업 종료'}
                                </Open>
                            </Wrapper>
                            <Description>
                                {element.description}   
                            </Description>
                            <Wrapper>
                                <Distance>
                                    {element.distance}M  
                                </Distance>
                                <Circle width='2px' height='2px' bgColor='#6F6F6F'></Circle>
                                <ReviewCount>
                                    후기 {element.reviewCount}   
                                </ReviewCount>
                            </Wrapper>
                            <Tag>
                                {element.tag.map((tag, i) =>(
                                    <span key={i} className="tag">#{tag}</span>
                                ))}  
                            </Tag>
                        </div>
                        <Img></Img>
                    </div>
                ))}
            </div>
        </Sidebar>
    );
}

const Sidebar = styled.div`
    position: fixed;
    top: 0;
    left: 110px;
    width: 375px;
    height: 100vh;
    background-color: #FFFFFF;
    z-index: 999;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: bolder;
    margin-top: 30px;
    margin-left: 20px;
    margin-bottom: 15px;
`;

const SubTitle = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const ShopName = styled.div`
    display: flex;
    font-size: 14px;
    font-weight: bolder;
    margin-right: 15px;
    margin-left: 20px;
`;

const Open = styled.div`
    font-size: 1px;
    font-weight: bolder;
    color: #4AB2C9;
`;

const Circle = styled.div`
    width: ${(props) => props.width};
    height : ${(props) => props.height};
    background-color: ${(props) => props.bgColor};
    border-radius: 50%;
    margin-right: 5px;
`;

const Description = styled.div`
    display: flex;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 8px;
    margin-left: 20px;
`;

const Distance = styled.div`
    display: flex;
    font-size: 10px;
    font-weight: bolder;
    margin-right: 7px;
    margin-left: 20px;
`;

const ReviewCount = styled.div`
    display: flex;
    font-size: 10px;
    color: #6F6F6F;
    font-weight: bolder;
`;

const Tag = styled.div`
    margin-bottom: 20px;
    margin-left: 20px;
`;

const Img = styled.div`
    position: fixed;
    width: 88px;
    height: 88px;
    background-color: #D9D9D9;
    border-radius: 8px;
    margin-left: 250px;
`;
export default Bookmark;