import React, { useState } from "react";

export default function Intro() {

    const [modeClick, setModeClick] = useState(5);

    const handleClick = () => {
        setModeClick(modeClick === 5 ? 60 : 5);
    }

    return (
        <>
            <div className="center-title">
                <h1>2023 <span>HYLN</span></h1>
                <div className="greeting-ment">
                    <p>Welcome to my Portfolio Site!</p>
                    <p>Enjoy it.</p>
                </div>
            </div>
            <div className="light-dark-mode" onClick={handleClick}>
                <div
                    className="mode-btn"
                    style={{ marginTop: `${modeClick}px` }}
                ></div>
            </div>
            <div className="signature-shape">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
                <div className="line line-4"></div>
                <div className="line line-5"></div>
                <div className="line line-6"></div>
                <div className="line line-7"></div>
                <div className="line line-8"></div>
                <div className="line line-9"></div>
                <div className="line line-10"></div>
                <div className="line line-11"></div>
                <div className="line line-12"></div>
            </div>
        </>
    );

}