import React, { useState, useRef } from "react";

// components
import Header from "./header";
import FooterFixed from "./footerFixed";
import Intro from "./intro";
import About from "./about";
import Project from "./project";
import Contact from "./contact";

// waypoint
import { Waypoint } from 'react-waypoint';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore, { Mousewheel, Pagination } from 'swiper';
SwiperCore.use([Mousewheel, Pagination]);

export default function Container() {

    // 마우스 커서 따라다니는 도형
    const [xy, setXY] = useState({ x: 0, y: 0 });

    const xyHandle = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        setXY({ x: mouseX, y: mouseY });
    }

    // top 버튼 구현
    const [topBtn, setTopBtn] = useState(false);
    const [introSection, setIntroSection] = useState(false);

    const [color, setColor] = useState('');
    const [active, setActive] = useState(false);

    const handleIntroEnter = () => {
        setIntroSection(true);
        setTopBtn(false);
    };

    const handleIntroLeave = () => {
        setIntroSection(false);
        setTopBtn(true);
    };

    const handleOtherEnter = () => {
        setTopBtn(true);
    };

    const handleOtherLeaveColor = () => {
        setColor('');
    };

    const handleOtherEnterColor = () => {
        setColor('#fff');
    };

    const handleContactEnter = () => {
        setActive(true);
    }

    const handleContactLeave = () => {
        setActive(false);
    }

    // 클릭 시 intro(top) 섹션으로 이동하기 - swiper pagination 이용
    const swiperRef = useRef(null);

    function goToSection(slideIndex) {
        
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(slideIndex);
        }
    }

    return (
        <>
            <div id="container" onMouseMove={xyHandle}>
                <div
                    className="pointer"
                    style={{ transform: `translate(${xy.x}px, ${xy.y}px)` }}
                ></div>
                {
                    topBtn && (
                        <button
                            className="top-btn"
                            onClick={() => goToSection(0)}
                        >
                            <svg viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.0934 9.76002L9.00007 1.66669L0.906738 9.76002M9.00007 24.3334V1.89335" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    )
                }
                <Header
                    color={color}
                    section={goToSection}
                />
                <FooterFixed />
                <Swiper
                    id="contents-swiper"
                    direction="vertical"
                    slidesPerView={'auto'}
                    spaceBetween={0}
                    mousewheel={true}
                    pagination={{ clickable: true }}
                    ref={swiperRef}
                >
                    <SwiperSlide id="intro">
                        <Waypoint
                            onEnter={handleIntroEnter}
                            onLeave={handleIntroLeave}
                        />
                        <Intro />
                    </SwiperSlide>
                    <SwiperSlide id="about">
                        <Waypoint
                            onEnter={handleOtherEnter}
                        />
                        <About />
                    </SwiperSlide>
                    <SwiperSlide id="project">
                        <Waypoint
                            onEnter={handleOtherEnter}
                        />
                        <Project />
                    </SwiperSlide>
                    <SwiperSlide id="contact">
                        <Waypoint
                            onEnter={() => {
                                handleOtherEnter();
                                handleOtherEnterColor();
                                handleContactEnter();
                            }}
                            onLeave={() => {
                                handleOtherLeaveColor();
                                handleContactLeave();
                            }}
                        />
                        <Contact active={active} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}