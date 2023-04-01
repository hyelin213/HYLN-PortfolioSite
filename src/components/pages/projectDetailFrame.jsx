import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
({ title, projectClass, duration, contribution, viewName, contents, githubLink, demoLink, language }) {

    const navigate = useNavigate();
    const [url, setUrl] = useState('https://hyelin213.github.io/HYLN-PortfolioSite');

    return (
        <>
            <div className="project-detail" style={{ position: 'absolute' }}>
                <div className="project-detail-container">
                    <div className='detail-left'>
                        <div className="detail-left-container">
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
                            spaceBetween={0}
                            autoplay={{ delay: 5000 }}
                            navigation
                        >
                            <ProjectDetailAbout
                                contents={contents}
                                githubLink={githubLink}
                                demoLink={demoLink}
                                language={language}
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
    );

}