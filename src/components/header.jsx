import React, { useState, useEffect } from "react";
import moment from "moment";
import { useDarkMode } from "./darkmodeContext";

export default function Header({ color, section }) {

    const { darkMode, toggleDarkMode } = useDarkMode();
    const [clicked, setClicked] = useState(false);

    let timer = null;
    const [nowTime, setNowTime] = useState(moment());

    useEffect(() => {
        timer = setInterval(() => {
            setNowTime(moment());
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <>
            <header id="header">
                <div className="header-container">
                    <div className="header-left">
                        <h2 className="logo" style={{ color: `${color}` }}>HYLN</h2>
                        <div className="info">
                            <a href="tel:+82 10-2932-6426" className="phone-num">+82 10 2932 6426</a>
                            <span>/</span>
                            <a href="mailto:myelin0213@gmail.com" className="email">myelin0213@gmail.com</a>
                        </div>
                    </div>
                    <div className="time-check" style={{ color: `${color}` }}>
                        {nowTime.format('YYYY.MM.DD HH:mm')}
                    </div>
                    <div className="header-right">
                        <div className="light-dark-mode" onClick={toggleDarkMode}>
                            <div
                                className="mode-btn"
                                style={{ marginLeft: `${darkMode ? '34' : '4'}px` }}
                            ></div>
                        </div>
                        <div className="menu">
                            <div className="menu-btn" onClick={() => setClicked(!clicked)}>
                                <span className={clicked ? 'active' : ''} style={{ backgroundColor: `${color}` }}></span>
                                <span className={clicked ? 'active' : ''} style={{ backgroundColor: `${color}` }}></span>
                                <span className={clicked ? 'active' : ''} style={{ backgroundColor: `${color}` }}></span>
                            </div>
                            <div className="menu-list" style={{display: clicked ? 'block' : 'none'}}>
                                <nav>
                                    <ul>
                                        <li onClick={() => section(0)}>
                                            <p>Intro</p>
                                        </li>
                                        <li onClick={() => section(1)}>
                                            <p>About</p>
                                        </li>
                                        <li onClick={() => section(2)}>
                                            <p>Project</p>
                                        </li>
                                        <li onClick={() => section(3)}>
                                            <p>Contact</p>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );

}