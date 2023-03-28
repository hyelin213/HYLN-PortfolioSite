import React, { useEffect } from "react";
import ProjectContents from "./pages/project-contents";
import { BrowserRouter as Router } from "react-router-dom";

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import SwiperCore, { FreeMode, Scrollbar, Mousewheel } from "swiper";
SwiperCore.use([Mousewheel]);

export default function Project() {

    return (
        <Swiper
        className="project-scroll-option"
        direction={"vertical"}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        slidesPerView={"auto"}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        nested={true}
        >
            <SwiperSlide>
                <div className="signature-shape">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                    <div className="line line-4"></div>
                    <div className="line line-5"></div>
                    <div className="line line-6"></div>
                    <div className="line line-7"></div>
                    <div className="line line-8"></div>
                    <div className="line line-9"></div>
                    <div className="line line-10"></div>
                    <div className="line line-11"></div>
                    <div className="line line-12"></div>
                </div>
                <Router>
                    <div className="project-container">
                        <ProjectContents />
                    </div>
                </Router>
            </SwiperSlide>
        </Swiper>
    );

}