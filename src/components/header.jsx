import React, { useState, useEffect } from "react";
import moment from "moment";

export default function Header({ color }) {

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

    useEffect(() => {
        console.log(color)
    }, [])

    const handleClick = () => {
        setModeClick(modeClick === 4 ? 34 : 4);
    }

    return (
        <>
            <header id="header">
                <div className="header-container">
                    <div className="header-left">
                        <h2 className="logo" style={{color: `${color}`}}>HYLN</h2>
                        <div className="info">
                            <p className="phone-num">+82 10 2932 6426</p>
                            <span>/</span>
                            <p className="email">myelin0213@gmail.com</p>
                        </div>
                    </div>
                    <div className="time-check" style={{color: `${color}`}}>
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
                            <span style={{backgroundColor: `${color}`}}></span>
                            <span style={{backgroundColor: `${color}`}}></span>
                            <span style={{backgroundColor: `${color}`}}></span>
                        </div>
                    </div>
                </div>
            </header>
        </>        
    );

}