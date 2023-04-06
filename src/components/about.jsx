import React, { useState } from "react";
import { useDarkMode } from "./darkmodeContext";

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import SwiperCore, { Pagination, Navigation, FreeMode, Scrollbar, Mousewheel } from "swiper";
SwiperCore.use([Pagination, Navigation, FreeMode, Scrollbar, Mousewheel]);

export default function About() {

    const [url, setUrl] = useState('https://hyelin213.github.io/HYLN-PortfolioSite');
    const [changeTxt, setChangeTxt] = useState('1');
    const [clicked, setClicked] = useState(false);
    const keywords = ['신입', 'FE', '성장하는', '도전적인', '탐구심'];
    const { darkMode, toggleDarkMode } = useDarkMode();

    function handleClick() {
        setClicked(true);
    }

    function numberClick() {
        setChangeTxt('!');
    }

    return (
        <>
            <Swiper
                className="about-scroll-option"
                direction={"vertical"}
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
                                <div className="title" onClick={() => {
                                    handleClick();
                                    numberClick();
                                }}>
                                    <h2>안녕하세요</h2>
                                    <p
                                        className={clicked ? 'jump-text' : 'shake-text'}
                                    >
                                        {changeTxt}
                                    </p>
                                    <span className={clicked ? 'oooops' : ''}>oops!</span>
                                </div>
                                <div className="introduction">
                                    <p>Front-end 개발자를 꿈꾸고 있는 <br className="PC-exposure" />김혜린입니다.</p>
                                </div>
                                <div className="keywords">
                                    {keywords.map(item => (<p style={{ color: darkMode ? 'var(--black-color)' : '' }}>{item}</p>))}
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
                                allowTouchMove={false}
                                pagination={{
                                    type: "fraction",
                                    el: '.page-number1',
                                }}
                                navigation={{
                                    prevEl: '.prev',
                                    nextEl: '.next'
                                }}
                            >
                                <SwiperSlide>
                                    <img className="title-1-info" src={`${url}/images/profile_pic.jpg`} alt="프로필 사진" />
                                </SwiperSlide>
                                <SwiperSlide className="title-2-skill">
                                    <h3>Skills</h3>
                                </SwiperSlide>
                                <SwiperSlide className="title-3-aspi">
                                    <div className="title-3-container">
                                        <h3 className="if-title">if</h3>
                                        <p className="if-branch-text">became a<br />front-end developer</p>
                                    </div>
                                    <div className="parentheses">
                                        <span className="left">{'('}</span>
                                        <div className="space"></div>
                                        <span className="right">{')'}</span>
                                    </div>
                                    <p className="brace">{'{ ... }'}</p>
                                </SwiperSlide>
                                <SwiperSlide className="title-4-motto">
                                    <div className="title-4-container">
                                        <p className="make-the">Make the</p>
                                        <p className="impossible">impossible</p>
                                        <p className="possible">possible<span> :</span></p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <Swiper
                                className="about-contents"
                                slidesPerView={1}
                                spaceBetween={10}
                                allowTouchMove={false}
                                pagination={{
                                    type: "fraction",
                                    el: '.page-number2'
                                }}
                                navigation={{
                                    prevEl: '.prev',
                                    nextEl: '.next'
                                }}
                            >
                                <SwiperSlide className="content-1-info">
                                    <div className="content-1-container">
                                        <h3>디자인에서<br />프론트엔드 개발까지.</h3>
                                        <p>
                                            서양화과를 졸업하고 디자인을 배웠습니다.<br />
                                            웹 UI를 디자인하면서 ‘이런 기능은 어떻게 만들까?’<br />
                                            라는 호기심에서 시작해 프론트엔드 개발 영역까지<br />
                                            역량을 넓혀가고 있습니다.<br /><br />

                                            함께하는 동료와 사용자들에게 편리함을 제공할 수<br />
                                            있는 기반을 가진 사람이 되고 싶습니다.<br />
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="content-2-skill">
                                    <div className="content-2-container">
                                        <div className="FE-skill">
                                            <h3>FE Skills</h3>
                                            <div className="icon">
                                                <img src={`${url}/images/skill_icon/html_5.png`} alt="html_5.icon" />
                                                <img src={`${url}/images/skill_icon/css_3.png`} alt="css_3.icon" />
                                                <img src={`${url}/images/skill_icon/js.png`} alt="js.icon" />
                                                <img src={`${url}/images/skill_icon/atom.png`} alt="atom.icon" />
                                            </div>
                                        </div>
                                        <div className="tool-skill">
                                            <h3>Tools Skills</h3>
                                            <div className="icon">
                                                <img src={`${url}/images/skill_icon/github_color.png`} alt="github_color.icon" />
                                                <img src={`${url}/images/skill_icon/figma.png`} alt="figma.icon" />
                                                <img src={`${url}/images/skill_icon/illustrator.png`} alt="illustrator.icon" />
                                                <img src={`${url}/images/skill_icon/photoshop.png`} alt="photoshop.icon" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="content-3-aspi">
                                    <div className="content-3-container">
                                        <p className="subtitle">const 저 = '성장 가능성이 있는 사람';</p>
                                        <p className="content">
                                            저는 상상한 것을 실현시키는 것을 좋아합니다.<br />
                                            목표로 하는 것은 반드시 해내고자 하는 끈기가 있으며,<br />
                                            시간은 조금 걸리지만 완성도를 높일 수 있는 섬세함을<br />
                                            더하여 만족스러운 결과물을 내는 사람이 되고 싶습니다.<br /><br />

                                            저는 새로운 것을 배우는 것에 흥미를 느낍니다.<br />
                                            프론트엔드 과정의 수업을 들을 때도 배우고자 하는<br />
                                            성실한 자세로 임하여 우수한 성적으로 수료했습니다.<br /><br />

                                            아직은 부족하지만 끊임 없이 배우고 노력하여<br />
                                            하루가 다르게 성장한 모습으로 자리를 지키겠습니다.
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="content-4-motto">
                                    <p>
                                        <span>안 되면 되게 하라.</span><br />
                                        누군가에겐 단순한 문장일 수 있습니다.<br />
                                        하지만 저에게 있어 이 문장은 좌우명이 되었을<br />
                                        정도로 마음 가짐에 큰 변화를 주었습니다.<br /><br />

                                        눈 앞에 큰 벽이 있더라도 넘어설 수 있다는<br />
                                        자신감을 가지고 한계를 뛰어 넘는 사람이<br />
                                        되도록 노력하겠습니다.
                                    </p>
                                </SwiperSlide>
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