import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Bookmark.css';

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
        <div className="sidebar">
            <div className="title">
                계용운님의 북마크
            </div>
            <div className="subTitle">
                <button className={click ? "listName" : "articleName"} onClick={clicklistEvent}>
                    리스트
                </button>
                <button className={click ? "articleName" : "listName"} onClick={clickarticleEvent}>
                    아티클
                </button>
            </div>
            <div className="listDetail">
                {bookmark && bookmark.map((element, i) => (
                    <div key={i} className="listItem">
                        <div className="text">
                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                            <div style={{display: 'flex', fontSize : '14px', fontWeight : 'bolder', marginRight : '15px', marginLeft : '20px'}}>
                                {element.shopName}   
                            </div>
                            <div className="circle1"></div>
                            <div style={{fontSize : '1px', fontWeight : 'bolder', color : '#4AB2C9'}}>
                                {element.open ? '영업중' : '영업 종료'}
                            </div>
                        </div>
                        <div style={{display: 'flex', fontSize : '12px', fontWeight : 'bold', marginBottom: '8px', marginLeft : '20px'}}>
                            {element.description}   
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                            <div style={{display: 'flex', fontSize : '10px', fontWeight : 'bolder', marginRight : '7px', marginLeft : '20px'}}>
                                {element.distance}M  
                            </div>
                            <div className="circle2"></div>
                            <div style={{display: 'flex', fontSize : '10px', color : '#6F6F6F', fontWeight : 'bolder'}}>
                                후기 {element.reviewCount}   
                            </div>
                        </div>
                        <div style={{marginBottom : '20px', marginLeft : '20px'}}>
                            {element.tag.map((tag, j) =>(
                                <span key={j} className="tag">#{tag}</span>
                            ))}  
                        </div>
                        </div>
                        <div className="image">
                            <div className="img"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bookmark;