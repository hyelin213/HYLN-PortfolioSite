import React from "react";

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
            <Swiper
                id="container"
                direction="vertical"
                slidesPerView={1}
                spaceBetween={0}
                mousewheel={true}
            >
                <SwiperSlide id="intro">
                    <p>intro</p>
                </SwiperSlide>
                <SwiperSlide id="about">
                    <p>about</p>
                </SwiperSlide>
                <SwiperSlide id="project">
                    <p>project</p>
                </SwiperSlide>
                <SwiperSlide id="contact">
                    <p>contact</p>
                </SwiperSlide>
            </Swiper>
        </>
    );
}