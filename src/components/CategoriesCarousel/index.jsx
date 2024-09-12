import React, { useEffect, useState } from "react";
import sportLife from "./assets/sportLife.png";
import Iphone from "./assets/iphoneImg.png";
import Tenis from "./assets/Tenis.png";
import modaPlus from "./assets/modaPlus.png";
import modaInfantil from "./assets/modaInfantil.png";
import modaPraia from "./assets/modaPraia.png";
import modaEvangelica from "./assets/modaEvangelica.png";
import modaBlogueira from "./assets/modaBlogueira.png";
import modaFeminina from "./assets/moda-feminina.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Card } from "../Card/Card";

import "./style.css";

const CategoriesCarousel = () => {
    const [slidePerView, setSlidePerView] = useState(1);
    const [swiperIndex, setSwiperIndex] = useState(0);

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

    const dataCardRoupa = [
        {
            roupa: sportLife,
            moda: "Moda Sport Life",
            valor: "A partir de R$20.00",
        },
        {
            roupa: Tenis,
            moda: "Tênis",
            valor: "A partir de R$30.00",
        },
        {
            roupa: Iphone,
            moda: "Iphone",
            valor: "A partir de R$800.00",
        },
        {
            roupa: modaPlus,
            moda: "Moda Plus Size",
            valor: "A partir de R$15.00",
        },
        {
            roupa: modaInfantil,
            moda: "Moda infantil",
            valor: "A partir de R$5.00",
        },
        {
            roupa: modaPraia,
            moda: "Moda Praia",
            valor: "A partir de R$5.00",
        },
        {
            roupa: modaEvangelica,
            moda: "Moda Evangélica",
            valor: "A partir de R$15.00",
        },
        {
            roupa: modaBlogueira,
            moda: "Moda Blogueira",
            valor: "A partir de R$12.99",
        },

        {
            roupa: modaFeminina,
            moda: "Moda Feminina",
            valor: "A partir de R$8.99",
        },
    ];

    return (
        <Swiper
            slidesPerView={slidePerView}
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            speed={500}
            navigation
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => setSwiperIndex(swiper.realIndex)}
            className="flex !items-center justify-center !w-4/5 h-full carousel-categori py-12"
        >
            {dataCardRoupa.map((cardRoupa, index) => (
                <SwiperSlide
                    key={index}
                    className={`!w-full h-full  transition-items  flex justify-center ${
                        swiperIndex == index - (slidePerView == 1 ? 0 : 1)
                            ? "items-center "
                            : "items-center"
                    }  s580:!w-4/5 s880:!w-3/6  s1080:!w-4/12`}
                >
                    <Card
                        slidePerView={slidePerView}
                        index={index}
                        dados={cardRoupa}
                        swiperIndex={swiperIndex}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CategoriesCarousel;
