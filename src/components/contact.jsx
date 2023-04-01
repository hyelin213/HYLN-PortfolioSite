import React, { useState } from "react";
import classNames from 'classnames';

export default function Contact({ active }) {

    const [url, setUrl] = useState('https://hyelin213.github.io/HYLN-PortfolioSite');

    return (
        <>
            <div className="contact-container">
                <h2>Contact Me.</h2>
                <p>궁금하신 점이 있다면 연락 주세요.</p>
                <div className="chat-link">
                    <span>TO TALK</span>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3917 14.5251L15.7167 17.1584C15.8 17.8501 15.0583 18.3334 14.4667 17.9751L10.975 15.9001C10.5917 15.9001 10.2167 15.8751 9.85 15.8251C10.4817 15.0928 10.8305 14.1588 10.8333 13.1917C10.8333 10.8251 8.78334 8.90841 6.25 8.90841C5.28334 8.90841 4.39167 9.18341 3.65 9.66675C3.625 9.45841 3.61667 9.25008 3.61667 9.03341C3.61667 5.24175 6.90834 2.16675 10.975 2.16675C15.0417 2.16675 18.3333 5.24175 18.3333 9.03341C18.3333 11.2834 17.175 13.2751 15.3917 14.5251Z" stroke="#F97904" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.8333 13.1918C10.8333 14.1834 10.4667 15.1001 9.85 15.8251C9.025 16.8251 7.71666 17.4668 6.25 17.4668L4.075 18.7584C3.70833 18.9834 3.24166 18.6751 3.29166 18.2501L3.5 16.6084C2.38333 15.8334 1.66666 14.5918 1.66666 13.1918C1.66666 11.7251 2.45 10.4334 3.65 9.66678C4.39166 9.18345 5.28333 8.90845 6.25 8.90845C8.78333 8.90845 10.8333 10.8251 10.8333 13.1918Z" stroke="#F97904" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <img className={classNames('bg-point', {'active': active ? 'active' : ''})} src={`${url}/images/contact-bg-active.png`} alt="배경화면 포인트 이미지" />
        </>
    );

}