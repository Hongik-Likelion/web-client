import React, { useState } from 'react';
import "./Nav.css";
import { Link } from "react-router-dom";
import { styled } from 'styled-components';
import mainIcon from'./icon/mainIcon.svg';

function Nav() {
    const [selectNav, setSelectNav] = useState(null);
    
    return (
        <Navbar>
            <Icon>
                <Link to="/main" onClick={() => setSelectNav(null)}>
                    <MainIcon></MainIcon>
                </Link>
                <Link to="/maps" onClick={() => setSelectNav(2)}>
                    {/* <MapIcon>
                        {selectNav === 2 ? color='#4AB2C9' : ''}
                    </MapIcon> */}
                    <div className={selectNav === 2 ? "mapsSelectIcon" : "mapsIcon"}></div>
                    {(selectNav===2) && <div className="box" style={{top : `116px`}}></div>}
                </Link>
                <Link to="/direction" onClick={() => setSelectNav(3)}>
                    <div className={selectNav === 3 ? "directionSelectIcon" : "directionIcon"}></div>
                    {(selectNav===3) && <div className="box" style={{top : `228px`}}></div>}
                </Link>
                <Link to="/article" onClick={() => setSelectNav(4)}>
                    <div className={selectNav === 4 ? "articleSelectIcon" : "articleIcon"}></div>
                    {(selectNav===4) && <div className="box" style={{top : `340px`}}></div>}
                </Link>
                <Link to="/bookmark" onClick={() => setSelectNav(5)}>
                    <div className={selectNav === 5 ? "bookmarkSelectIcon" : "bookmarkIcon"}></div>
                    {(selectNav===5) && <div className="box" style={{top : `451px`}}></div>}
                </Link>
                
                
                <Link to="/kakao-login" onClick={() => setSelectNav(6)}>
                    <div className={selectNav === 6 ? "loginSelectIcon" : "loginIcon"}></div>
                    {(selectNav===6) && <div className="box" style={{top : `556px`}}></div>}
                </Link>

        
                {/* <Link to="/oauth" onClick={() => setSelectNav(7)}>
                    <div className={selectNav === 7 ? "mypageSelectIcon" : "mypageIcon"}></div>
                    {(selectNav===7) && <div className="box" style={{top : `556px`}}></div>}
                </Link> */}
                
            </Icon>
            {selectNav && <div className="highlight"></div>}
            
        </Navbar>
    );
}

const Navbar = styled.div`
    position : fixed;
    left : 0;
    top : 0;
    width : 110px;
    height : 100vh;
`;

const Icon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MainIcon = styled.div`
    width:59px;
    height:46px;
    background-image: url(${mainIcon});
    background-size: cover;
    margin-top : 40px;
`;
export default Nav;