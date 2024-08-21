import CardTestimonials from "../../components/CardTestimonials";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";

const CarouselTestimonials = () => {
    const [slidePerView, setSlidePerView] = useState(1);
    const [swiperIndex, setSwiperIndex] = useState(0);

    const dataTestimonials = [
        {
            animationValueI: -50,
            animationValueF: 0,
        },
        {
            animationValueI: 50,
            animationValueF: 0,
        },
        {
            animationValueI: -50,
            animationValueF: 0,
        },
        {
            animationValueI: 50,
            animationValueF: 0,
        },
        {
            animationValueI: -50,
            animationValueF: 0,
        },
        {
            animationValueI: 50,
            animationValueF: 0,
        },
    ];

    useEffect(() => {
        const handlResize = () => {
            if (window.innerWidth >= 580) {
                setSlidePerView(2);
            }
            if (window.innerWidth < 580) {
                setSlidePerView(1);
            }
            if (window.innerWidth > 1100) {
                setSlidePerView(3);
            }
        };
        handlResize();

        window.addEventListener("resize", handlResize);

        return () => {
            window.removeEventListener("resize", handlResize);
        };
    }, []);

    return (
        <Swiper
            slidesPerView={slidePerView}
            loop={true}
            speed={500}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setSwiperIndex(swiper.realIndex)}
            className="flex !items-center justify-center w-full h-3/5  "
        >
            {dataTestimonials.map((data, index) => (
                <SwiperSlide
                    key={index}
                    className={`!w-full h-4/5 transition-items ${
                        swiperIndex === index ? "items-start" : "items-center"
                    } flex justify-center  s580:!w-4/5 s880:!w-3/6 `}
                >
                    <CardTestimonials data={data} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CarouselTestimonials;
