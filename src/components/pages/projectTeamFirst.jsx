import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
SwiperCore.use([Navigation, Autoplay])
export default function ProjectTeamFirst() {

    const navigate = useNavigate();
    const [url, setUrl] = useState('https://hyelin213.github.io/HYLN-PortfolioSite');

    const projectInfo = {
        duration: '2023.01 - 2023.02',
        contribution: '기여도 25%'
    }

    return (
        <>
            <div className="project-detail" style={{position: 'absolute'}}>
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
                            <SwiperSlide>1</SwiperSlide>
                            <SwiperSlide>2</SwiperSlide>
                            <SwiperSlide>3</SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}