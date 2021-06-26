import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';



export default ({ images }) => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
                // when window width is >= 640px
                240: {
                    width: 240,
                    slidesPerView: 1,
                },
                // when window width is >= 768px
                400: {
                    width: 400,
                    slidesPerView: 2,
                },
                600: {
                    width: 600,
                    slidesPerView: 3,
                },
            }}
        >
            {
                images.map((image, i) => (
                    <SwiperSlide key={i}>
                        <img style={{ width: "150px" }} src={image} alt={image} />
                    </SwiperSlide>


                ))
            }
        </Swiper>
    );
};