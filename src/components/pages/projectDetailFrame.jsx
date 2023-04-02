import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../darkmodeContext";

// 프로젝트에 대한 설명 component
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


export default function ProjectDetailFrame
    ({ title, projectClass, duration, contribution, viewName, contents, githubLink, demoLink, language, slide }) {

    const navigate = useNavigate();
    const [url, setUrl] = useState('https://hyelin213.github.io/HYLN-PortfolioSite');
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <>
            <div className="project-detail" style={{ position: 'absolute' }}>
                <div className="project-detail-container">
                    <div className='detail-left'>
                        <div className="detail-left-container">
                            <div className="detail-left-contents">
                                <p className="project-class">{projectClass}</p>
                                <h3 className="title">{title}</h3>
                                <div
                                    className="duration-contribution"
                                >
                                    <p
                                        className="duration"
                                        style={{ color: darkMode ? 'var(--black-color)' : '' }}
                                    >
                                        {duration}
                                    </p>
                                    <p
                                        className="contribution"
                                        style={{ color: darkMode ? 'var(--black-color)' : '' }}
                                    >
                                        기여도 {contribution}%
                                    </p>
                                </div>
                            </div>
                            <button onClick={() => { navigate(-1) }}>
                                <svg width="49" height="36" viewBox="0 0 49 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.1388 1L0 18L17.1388 35M48 18H0.48" stroke="#F97904" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <ProjectDetailAbout
                            contents={contents}
                            githubLink={githubLink}
                            demoLink={demoLink}
                            language={language}
                        />
                    </div>
                    <div className="detail-right">
                        <Swiper
                            className="detail-view"
                            slidesPerView={1}
                            spaceBetween={10}
                            autoplay={{ delay: 4000 }}
                            allowTouchMove={false}
                        >
                            <ProjectDetailAbout
                                contents={contents}
                                githubLink={githubLink}
                                demoLink={demoLink}
                                language={language}
                            />
                            {
                                slide.map((item, idx) => (
                                    <SwiperSlide>
                                        <div className={`project-pic project-pic-${idx+1}`}>
                                            <img src={`${url}/images/project_contents/${viewName}/${item}.png`} alt={`프로젝트 이미지${idx+1}`} />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );

}