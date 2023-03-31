import React, { useState, useEffect } from "react";
import moment from "moment";

export default function Header() {

    let timer = null;
    const [nowTime, setNowTime] = useState(moment());
    const [modeClick, setModeClick] = useState(4);

    useEffect(() => {
        timer = setInterval(() => {
            setNowTime(moment());
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    const handleClick = () => {
        setModeClick(modeClick === 4 ? 34 : 4);
    }

    return (
        <>
            <header id="header">
                <div className="header-container">
                    <div className="header-left">
                        <h2 className="logo">HYLN</h2>
                        <div className="info">
                            <p className="phone-num">+82 10 2932 6426</p>
                            <span>/</span>
                            <p className="email">myelin0213@gmail.com</p>
                        </div>
                    </div>
                    <div className="time-check">
                        {nowTime.format('YYYY.MM.DD HH:mm')}
                    </div>
                    <div className="header-right">
                        <div className="light-dark-mode" onClick={handleClick}>
                            <div
                                className="mode-btn"
                                style={{ marginLeft: `${modeClick}px` }}
                            ></div>
                        </div>
                        <div className="menu-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>
        </>        
    );

}