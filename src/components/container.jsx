import React, {useState} from "react";
import Header from "./header";
import FooterFixed from "./footerFixed";
import Intro from "./intro";
import About from "./about";

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore, { Mousewheel, Pagination} from 'swiper';
SwiperCore.use([Mousewheel, Pagination]);

export default function Container() {

    const [xy, setXY] = useState({x: 0, y: 0});

    const xyHandle = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        setXY({x: mouseX, y: mouseY});
    }

    return (
        <>
            <div id="container" onMouseMove={xyHandle}>
                <div
                    className="pointer"
                    style={{transform: `translate(${xy.x}px, ${xy.y}px)`}}
                ></div>
                <Header />
                <FooterFixed />
                <Swiper
                    id="contents-swiper"
                    direction="vertical"
                    slidesPerView={'auto'}
                    spaceBetween={0}
                    mousewheel={true}
                    style={{height: '100vh'}}
                >
                    <SwiperSlide id="intro">
                        <Intro />
                    </SwiperSlide>
                    <SwiperSlide id="about">
                        <About />
                    </SwiperSlide>
                    <SwiperSlide id="project">
                    </SwiperSlide>
                    <SwiperSlide id="contact">
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}