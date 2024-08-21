import { useRef } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import Video1 from "./assets/video_1.mp4";
import "./style.css";

const VideoComponent = ({video}) => {
    const pauseRef = useRef(null);
    const videoRef = useRef(null);
    const botoesRef = useRef(null);

    const iniciarVideo = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                pauseRef.current.style.display = "none";
                botoesRef.current.style.display = "none";
                videoRef.current.play();
            } else {
                videoRef.current.pause();
                pauseRef.current.style.display = "";
                botoesRef.current.style.display = "";
                botoesRef.current.classList.add("");
            }
        }
    };

    return (
        <motion.div
            onClick={iniciarVideo}
            className=" w-9/12 h-[430px] lg:h-fit lg:w-[334px] flex items-center justify-center rounded overflow-hidden player-video"
        >
            <video className="video-view s1380:!h-[473px]" ref={videoRef}>
                <source src={video} type="video/mp4" />
            </video>

            <div className="video-preloader" ref={pauseRef}></div>
            <div className="video-redes" ref={botoesRef}>
                <div className="w-full h-full flex justify-center items-center p-2 gap-4">
                    <div className="w-[50px] h-[50px] cursor-pointer bg-nbBlackSecundary hover:bg-gradient-to-br from-sky-500 to-red-500 rounded-full flex items-center justify-center">
                        <a
                            href="https://www.tiktok.com/@nobruinvesti"
                            target="_blank"
                        >
                            <FaTiktok size={20} color="white" />
                        </a>
                    </div>
                    <div className="w-[50px] h-[50px] cursor-pointer hover:bg-gradient-to-br from-yellow-500 to-pink-500 bg-nbBlackSecundary rounded-full flex items-center justify-center">
                        <a
                            href="https://www.instagram.com/nobrunovaees/"
                            target="_blank"
                        >
                            <FaInstagram size={20} color="white" />
                        </a>
                    </div>
                    <div className="w-[50px] h-[50px] cursor-pointer bg-nbBlackSecundary hover:bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center">
                        <a>
                            <FaWhatsapp size={20} color="white" />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default VideoComponent;
