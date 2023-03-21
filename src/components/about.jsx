import React from "react";

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function About() {

    const keywords = ['신입', 'FE', '성장하는', '도전적인', '탐구심'];

    return (
        <>
            <div className="about-container">
                <div className="about-left">
                    <div className="title">
                        <h2>안녕하세요</h2>
                        <p>1</p>
                    </div>
                    <div className="introduction">
                        <p>Front-end 개발자를 꿈꾸고 있는 <br className="PC-exposure"/>김혜린입니다.</p>
                    </div>
                    <div className="keywords">
                        {keywords.map(item => (<p>{item}</p>))}
                    </div>
                    <div className="swiper-navigation">
                        <div className="navi-btn">
                            <svg className="prev" width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.07 1L1 7.07L7.07 13.14M18 7.07H1.17" stroke="#E17B35" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div>page</div>
                            <svg className="next" width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.93 1L18 7.07L11.93 13.14M1 7.07H17.83" stroke="#E17B35" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="about-right">
                    <Swiper
                        className="about-title"
                        pagination={{
                            type: "fraction",
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                    >
                        <SwiperSlide>1</SwiperSlide>
                        <SwiperSlide>2</SwiperSlide>
                        <SwiperSlide>3</SwiperSlide>
                        <SwiperSlide>4</SwiperSlide>
                    </Swiper>
                    <Swiper className="about-contents">
                        <SwiperSlide>1</SwiperSlide>
                        <SwiperSlide>2</SwiperSlide>
                        <SwiperSlide>3</SwiperSlide>
                        <SwiperSlide>4</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );

}