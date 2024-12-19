import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Banner = () => {
    const slides = [
        {
            id: 1,
            image: 'http://i.huffpost.com/gen/1629827/images/o-HAPPY-WINTER-facebook.jpg',
            text: 'Join us in providing warmth this winter',
        },
        {
            id: 2,
            image: 'https://i.ibb.co.com/dGnY9hQ/th-2.jpg',
            text: 'Your donation can save lives',
        },
        {
            id: 3,
            image: 'https://i.ibb.co.com/KwWxRSx/maxresdefault.jpg',
            text: 'Helping the vulnerable stay warm',
        },
    ];

    return (
        <section className="banner-slider rounded-xl py-12">
            <Swiper
                navigation
                modules={[Navigation]}
                className="mySwiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative">
                            <img
                            
                                src={slide.image}
                                alt={slide.text}
                                className="w-full h-96 object-cover "
                            />
                            <h2 className="text-[#FFFF] font-bold text-5xl absolute inset-0 flex items-center justify-center">
                                {slide.text}
                            </h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Banner;
