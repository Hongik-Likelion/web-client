import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Bookmark.css';

function Bookmark() {
    const [bookmark, setBookmark] = useState();
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/bookmark`).then(response=>{
            console.log(response.data);
            setBookmark(response.data);
        })

    },[])

    return (
    <>
        <div className="sidebar">
            <div className="title">
                계용운님의 북마크
            </div>
            <div className="subTitle">
                <div className="list">
                    <div className="listName">
                        리스트
                    </div>
                    
                    <div className="listDetail">
                        {bookmark && bookmark.map((element, i) => (
                            <div key={i}>
                                <div>
                                    {element.shopName}   
                                </div>
                                <div>
                                    {element.description}   
                                </div>
                                <div>
                                    {element.distance}   
                                </div>
                                <div>
                                    {element.reviewCount}   
                                </div>
                                <div>
                                    {element.tag}   
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className="article">
                    <div className="articleName">
                        아티클
                    </div>
                    <div className="articleDetail">

                    </div>
                </div> */}
            </div>
        </div>
    </>
    );
}

export default Bookmark;