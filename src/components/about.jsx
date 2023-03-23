import React, { useState } from "react";

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import SwiperCore, { Pagination, Navigation, FreeMode, Scrollbar, Mousewheel } from "swiper";
SwiperCore.use([Mousewheel]);

export default function About() {

    const [ url, setUrl ] = useState('https://hyelin213.github.io/HYLN-PortfolioSite');
    const keywords = ['신입', 'FE', '성장하는', '도전적인', '탐구심'];

    return (
        <>
            <Swiper
                className="about-scroll-option"
                direction={"vertical"}
                modules={[FreeMode, Scrollbar, Mousewheel]}
                slidesPerView={"auto"}
                freeMode={true}
                scrollbar={true}
                mousewheel={true}
                nested={true}
            >
                <SwiperSlide>
                    <div className="about-container">
                        <div className="about-left">
                            <div className="about-title">
                                <div className="title">
                                    <h2>안녕하세요</h2>
                                    <p>1</p>
                                </div>
                                <div className="introduction">
                                    <p>Front-end 개발자를 꿈꾸고 있는 <br className="PC-exposure" />김혜린입니다.</p>
                                </div>
                                <div className="keywords">
                                    {keywords.map(item => (<p>{item}</p>))}
                                </div>
                            </div>
                            <div className="swiper-navigation mobile-hide">
                                <div className="navi-btn">
                                    <svg className="prev" width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.07 1L1 7.07L7.07 13.14M18 7.07H1.17" stroke="#E17B35" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div className="page-number page-number1"></div>
                                    <svg className="next" width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.93 1L18 7.07L11.93 13.14M1 7.07H17.83" stroke="#E17B35" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="about-right">
                            <Swiper
                                className="about-title"
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                    type: "fraction",
                                    el: '.page-number1',
                                }}
                                navigation={{
                                    prevEl: '.prev',
                                    nextEl: '.next'
                                }}
                                modules={[Pagination, Navigation]}
                            >
                                <SwiperSlide>
                                    <img className="title-1-info" src={`${url}/images/profile_pic.jpg`} alt="프로필 사진" />
                                </SwiperSlide>
                                <SwiperSlide className="title-2-skill">
                                    <h3>Skills</h3>
                                </SwiperSlide>
                                <SwiperSlide>3</SwiperSlide>
                                <SwiperSlide>4</SwiperSlide>
                            </Swiper>
                            <Swiper
                                className="about-contents"
                                pagination={{
                                    type: "fraction",
                                    el: '.page-number2'
                                }}
                                navigation={{
                                    prevEl: '.prev',
                                    nextEl: '.next'
                                }}
                                modules={[Pagination, Navigation]}
                            >
                                <SwiperSlide className="content-1-info">
                                    <div className="content-1-container">
                                        <h3>디자인에서<br />프론트엔드 개발까지.</h3>
                                        <p>
                                            서양화과를 졸업하고 디자인을 배웠습니다.<br />
                                            웹 UI를 디자인하면서 ‘이런 기능은 어떻게 만들까?’<br />
                                            라는 호기심에서 시작해 프론트엔드 개발 영역까지<br />
                                            역량을 넓혀가고 있습니다.<br /><br />
                                            호기심으로 시작된 저의 노력들이<br />
                                            함께하는 동료와 사용자들에게 편리함을 제공할 수<br />
                                            있는 기반이 되었으면 합니다.<br />
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="content-2-skill">
                                    <div className="FE-skill">
                                        <h3>FE Skills</h3>
                                        <div className="icon">
                                            {/* <img src={`${url}/images/profile_pic.jpg`} alt="프로필 사진" /> */}
                                            <img src={`${url}/images/skill_icon/html_5.png`} alt="html_5.icon" />
                                            <img src={`${url}/images/skill_icon/`} alt="" />
                                            <img src={`${url}/images/skill_icon/`} alt="" />
                                            <img src={`${url}/images/skill_icon/`} alt="" />
                                        </div>
                                    </div>
                                    <div className="tool-skill">
                                        <h3></h3>
                                        <div className="icon">
                                            <img src={`${url}/images/skill_icon/`} alt="" />
                                            <img src={`${url}/images/skill_icon/`} alt="" />
                                            <img src={`${url}/images/skill_icon/`} alt="" />
                                            <img src={`${url}/images/skill_icon/`} alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>3</SwiperSlide>
                                <SwiperSlide>4</SwiperSlide>
                            </Swiper>
                            <div className="swiper-navigation mobile-exposure">
                                <div className="navi-btn">
                                    <svg className="prev" width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.07 1L1 7.07L7.07 13.14M18 7.07H1.17" stroke="#E17B35" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div className="page-number page-number2"></div>
                                    <svg className="next" width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.93 1L18 7.07L11.93 13.14M1 7.07H17.83" stroke="#E17B35" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );

}