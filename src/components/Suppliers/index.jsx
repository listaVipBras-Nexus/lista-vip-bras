import { useEffect, useState } from "react";
import ButtonBuy from "../ButtonBuy";
import VideoComponent from "../VideoComponent";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import tenis from "./assets/tn.png";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import video1 from "./assets/videSpplier1.mp4";
import video2 from "./assets/videSpplier2.mp4";
import video3 from "./assets/videSpplier3.mp4";
import video4 from "./assets/videSpplier4.mp4";
import video5 from "./assets/videSpplier5.mp4";
import "./style.css";

const Suppliers = () => {
    const [slidePerView, setSlidePerView] = useState(1);
    const [swiperIndex, setSwiperIndex] = useState(0);

    const videos = [video1, video2, video3, video4, video5];

    useEffect(() => {
        const handlResize = () => {
            if (window.innerWidth >= 880) {
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
        <section
            id="fornecedores"
            className="w-full bg-nbBlackPrimary bg-[url('./assets/suppliers-bg.png')] bg-no-repeat bg-left  bg-cover h-screen flex items-center justify-center  flex-col gap-10 relative p-10"
        >
            <h2 className="text-center font-medium text-xl w-80 text-white">
                Explore alguns dos fornecedores da lista{" "}
                <span className="text-nbOrangePrimary font-bold">agora</span>{" "}
                mesmo!
            </h2>

            <Swiper
                slidesPerView={slidePerView}
                modules={[Navigation, Pagination]}
                loop={true}
                speed={500}
                navigation
                onSlideChange={(swiper) => setSwiperIndex(swiper.realIndex)}
                className="flex !items-center justify-center w-full h-[500px] "
            >
                {videos.map((video, index) => (
                    <SwiperSlide
                        key={index}
                        className={`!w-full h-full transition-items ${
                            swiperIndex === index - 1
                                ? "items-start"
                                : "items-center"
                        } flex justify-center  s580:!w-2/4 s880:!w-1/3 `}
                    >
                        <VideoComponent video={video}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <ButtonBuy titulo="Comprar agora" />

            <motion.div
                initial={{ opacity: 0, y: -60, x: 30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hidden absolute -bottom-60 right-0 z-40 s1180:flex s1180:w-64 s1180:-bottom-40 s1380:w-80"
            >
                <img src={tenis} alt="" />
            </motion.div>
        </section>
    );
};
export default Suppliers;
