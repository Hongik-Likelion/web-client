import React, { useState } from 'react';
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
    const [selectNav, setSelectNav] = useState(null);
    
    return (
        <div className="navbar">
            <div className="icon">
                <Link to="/main" className="navLink" onClick={() => setSelectNav(null)}>
                    <div className="mainIcon"></div>
                </Link>
                <Link to="/maps" className="navLink" onClick={() => setSelectNav(2)}>
                    <div className={selectNav === 2 ? "mapsSelectIcon" : "mapsIcon"}></div>
                    {(selectNav===2) && <div className="box" style={{top : `116px`}}></div>}
                </Link>
                <Link to="/direction" className="navLink" onClick={() => setSelectNav(3)}>
                    <div className={selectNav === 3 ? "directionSelectIcon" : "directionIcon"}></div>
                    {(selectNav===3) && <div className="box" style={{top : `228px`}}></div>}
                </Link>
                <Link to="/article" className="navLink" onClick={() => setSelectNav(4)}>
                    <div className={selectNav === 4 ? "articleSelectIcon" : "articleIcon"}></div>
                    {(selectNav===4) && <div className="box" style={{top : `340px`}}></div>}
                </Link>
                <Link to="/bookmark" className="navLink" onClick={() => setSelectNav(5)}>
                    <div className={selectNav === 5 ? "bookmarkSelectIcon" : "bookmarkIcon"}></div>
                    {(selectNav===5) && <div className="box" style={{top : `451px`}}></div>}
                </Link>
                <Link to="/mypage" className="navLink" onClick={() => setSelectNav(6)}>
                    <div className={selectNav === 6 ? "mypageSelectIcon" : "mypageIcon"}></div>
                    {(selectNav===6) && <div className="box" style={{top : `556px`}}></div>}
                </Link>
            </div>
            {selectNav && <div className="highlight"></div>}
            
        </div>
    );
}

export default Nav;