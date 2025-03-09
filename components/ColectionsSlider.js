import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

function ColectionsSlider({ images }) {

    return (
        <div className='mqslides'>


            <Swiper
                slidesPerView={1}
                loop={true}
                spaceBetween={10}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                speed={6000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                    reverseDirection: true,
                }}
                modules={[Autoplay]}
            >
                {images.map((img, index) =>
                    <SwiperSlide>
                        <img src={img} alt="" className="w-full border border-neutral-700" />
                    </SwiperSlide>
                )}



            </Swiper>
        </div >
    )
}

export default ColectionsSlider