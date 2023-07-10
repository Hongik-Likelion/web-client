import React from 'react';
import './Bookmark.css';

const zeroShop = [
    {
        shopName : '상점1',
        description : '상점1 설명입니다 상점1',
        distance : 100,
        reviewCount : 14,
        tag : ['태그1', '태그2'],
        open : true
    },
    {
        shopName : '상점2',
        description : '상점2 설명입니다 상점2',
        distance : 40,
        reviewCount : 5,
        tag : ['태그3', '태그4', '태그5'],
        open : false
    },
];

function Bookmark() {
    return (
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
                    {zeroShop.map((data, index) => (
                        <div key={index}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <p style={{fontSize : '14px', fontWeight : 'bolder', marginRight : '15px'}}>{data.shopName}</p>
                                <div className="circle1"></div>
                                <p style={{fontSize : '1px', fontWeight : 'bolder', color : '#4AB2C9'}}>{data.open ? '영업중' : '영업 종료'}</p>
                            </div>
                            <p style={{fontSize : '12px', fontWeight : 'bold'}}>{data.description}</p>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <p style={{fontSize : '10px', fontWeight : 'bolder', marginRight : '7px'}}>{data.distance}M</p>
                                <div className="circle2"></div>
                                <p style={{fontSize : '10px', color : '#6F6F6F', fontWeight : 'bolder'}}> 후기 {data.reviewCount}</p>
                            </div>
                            <p style={{fontSize : '8.52px', color : '#4AB2C9', marginBottom : '30px'}}>#{data.tag.join(' #')}</p>
                            <hr className="separator" />
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
    );
}

export default Bookmark;