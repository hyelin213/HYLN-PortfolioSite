import React from "react";
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
    return (
        <>
            <div id="container">
                <Header />
                <FooterFixed />
                <Swiper
                    id="contents-swiper"
                    direction="vertical"
                    slidesPerView={1}
                    spaceBetween={0}
                    mousewheel={true}
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