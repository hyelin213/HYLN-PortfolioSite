import React from "react";

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function About() {

    const keywords = ['신입', 'FE', '성장하는', '도전적인', '탐구심'];

    return (
        <>
            <div className="about-container">
                <div className="about-left">
                    <div className="title">
                        <h2>안녕하세요</h2>
                        <p>!</p>
                    </div>
                    <div className="introduction">
                        <p>Front-end 개발자를 꿈꾸고 있는<br/>김혜린입니다.</p>
                    </div>
                    <div className="keywords">
                        {keywords.map(item => (<p>{item}</p>))}
                    </div>
                </div>
                <div className="about-right">
                    <Swiper className="about-title">
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                    </Swiper>
                    <Swiper className="about-contents">
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );

}