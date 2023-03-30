import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import sanitizeHTML from 'sanitize-html';

import ProjectDetailAbout from "./projectDetailAbout";

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import SwiperCore, { Navigation, Autoplay } from "swiper";
SwiperCore.use([Navigation, Autoplay]);


export default function ProjectDetailFrame({ title, projectClass, duration, contribution, viewName }) {

    const navigate = useNavigate();
    const [url, setUrl] = useState('https://hyelin213.github.io/HYLN-PortfolioSite');

    // XSS 방지를 위한 필터링
    const contents = sanitizeHTML(
        `현실의 해리포터를 좋아하는 매니아층과 세계관 속 호그와트 학생 등,<br />
        관계자들을 타겟으로 한 교육 플랫폼 기반의 학교 사이트입니다.<br />
        기숙사 목록페이지, 기숙사 상세페이지 그리고 마이페이지를 담당했습니다.`
    );

    return (
        <>
            <div className="project-detail" style={{ position: 'absolute' }}>
                <div className="project-detail-container">
                    <div className="detail-left">
                        <div className="detail-left-contents">
                            <p className="project-class">{projectClass}</p>
                            <h3 className="title">{title}</h3>
                            <div className="duration-contribution">
                                <p className="duration">{duration}</p>
                                <p className="contribution">기여도 {contribution}%</p>
                            </div>
                        </div>
                        <button onClick={() => { navigate(-1) }}>
                            <img src={`${url}/images/navigate_icon.svg`} alt="뒤로가기 버튼" />
                        </button>
                    </div>
                    <div className="detail-right">
                        <Swiper
                            className="detail-view"
                            slidesPerView={1}
                            spaceBetween={0}
                            autoplay={{ delay: 5000 }}
                            navigation
                        >
                            <ProjectDetailAbout
                                contents={contents}
                                githubLink='https://github.com/hyelin213/2023TeamProject_HogwartsSchool.git'
                                demoLink='#'
                                language={['HTML5', 'SASS', 'JAVASCRIPT']}
                            />
                            <SwiperSlide>
                                <div className="project-pic project-pic-1">
                                    <img src={`${url}/images/project_contents/${viewName}/img_1.png`} alt="프로젝트 이미지1" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-pic project-pic-2">
                                    <img src={`${url}/images/project_contents/${viewName}/img_2.png`} alt="프로젝트 이미지2" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-pic project-pic-3">
                                    <img src={`${url}/images/project_contents/${viewName}/img_3.png`} alt="프로젝트 이미지3" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}