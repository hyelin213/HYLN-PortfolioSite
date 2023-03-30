import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";

// import ProjectDetailAbout from "./projectDetailAbout";
import ProjectDetailFrame from "./projectDetailFrame";

// swiper
// import { Swiper, SwiperSlide } from 'swiper/react';
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";
// import SwiperCore, { Navigation, Autoplay } from "swiper";
// SwiperCore.use([Navigation, Autoplay]);


export default function ProjectTeamFirst() {

    return (
        <>
            <ProjectDetailFrame 
                title='Hogwarts School Site'
                projectClass='팀 프로젝트 · 4인'
                duration='2023.01　-　2023.02'
                contribution='25'
                viewName='hogwarts_school'
            />
            {/* <div className="project-detail" style={{position: 'absolute'}}>
                <div className="project-detail-container">
                    <div className="detail-left">
                        <div className="detail-left-contents">
                            <p className="project-class">팀 프로젝트 · 4인</p>
                            <h3 className="title">Hogwarts School Site</h3>
                            <div className="duration-contribution">
                                <p className="duration">{projectInfo.duration}</p>
                                <p className="contribution">{projectInfo.contribution}</p>
                            </div>
                        </div>
                        <button onClick={() => {navigate(-1)}}>
                            <img src={`${url}/images/navigate_icon.svg`} alt="뒤로가기 버튼" />
                        </button>
                    </div>
                    <div className="detail-right">
                        <Swiper
                            className="detail-view"
                            slidesPerView={1}
                            spaceBetween={0}
                            autoplay={{delay: 5000}}
                            navigation
                        >
                            <ProjectDetailAbout />
                            <SwiperSlide>1</SwiperSlide>
                            <SwiperSlide>2</SwiperSlide>
                            <SwiperSlide>3</SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div> */}
        </>
    )
}