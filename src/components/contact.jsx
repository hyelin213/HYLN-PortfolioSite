import React, { useState } from "react";
import classNames from 'classnames';

export default function Contact({ active }) {

    const [url, setUrl] = useState('https://hyelin213.github.io/HYLN-PortfolioSite');

    return (
        <>
            <div className="contact-container">
                <div className="contact-title">
                    <h2>Contact Me.</h2>
                    <p>궁금하신 점이 있다면 연락 주세요.</p>
                </div>
                <div className="contact-contents">
                    <span></span>
                    <div className="contact-info">
                        <a href="tel:+82 10-2932-6426" className="phone-num">+82 10 2932 6426</a>
                        <a href="mailto:myelin0213@gmail.com" className="email">myelin0213@gmail.com</a>
                        <a href="https://github.com/hyelin213" target={'_blank'} className="mobile-exposure">Github</a>
                    </div>
                </div>
            </div>
            <img className={classNames('bg-point', {'active': active ? 'active' : ''})} src={`${url}/images/contact-bg-active.png`} alt="배경화면 포인트 이미지" />
        </>
    );

}