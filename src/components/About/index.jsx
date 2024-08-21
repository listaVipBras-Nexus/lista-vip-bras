import { useRef } from "react";
import { FaCalendarCheck } from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import Video1 from "./assets/video_1.mp4";
import { motion } from "framer-motion";
import "./style.css";

const About = () => {
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
        <section
            id="sobre"
            className="w-full flex flex-col gap-32 bg-nb-gradientSecundary bg-nbBlackPrimary p-10"
        >
            <div className="w-full h-1/4 justify-center items-center lg:flex lg:flex-row gap-3 p-6 flex flex-col">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="card_resumo dark lg:flex flex-col items-center justify-center gap-8 hidden cursor-pointer "
                >
                    <FaCalendarCheck size={130} color="E99231" />
                    <p className="text-white font-bold text-2xl">
                        7 Dias de garantia
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="card_resumo gold lg:flex flex-col items-center justify-center gap-8 hidden cursor-pointer"
                >
                    <LuClipboardList size={130} color="292929" />
                    <p className="text-white font-bold text-2xl text-center">
                        Lista com mais de 200 fornecedores{" "}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="card_resumo dark flex flex-col justify-center items-center gap-5 cursor-pointer"
                >
                    <div>
                        <p className="text-white text-lg font-bold text-center">
                            Adquira agora sua lista!
                            <br /> Não perca tempo!
                        </p>
                        <p className="text-white text-center text-3xl">
                            De{" "}
                            <span className="text-terciaria line-through">
                                R$390,00
                            </span>{" "}
                            por...
                        </p>
                        <p className="text-4xl text-white font-bold text-center">
                            12x de{" "}
                            <span className="text-terciaria font-bold">
                                R$23,00
                            </span>
                        </p>
                    </div>

                    <small className="text-xs text-white">
                        Ou R$ 97,00 no Pix à vista
                    </small>

                    <a
                        a
                        href="https://pay.kiwify.com.br/s8J1u2t"
                        target="_blank"
                        className="flex justify-center items-center w-56 h-14 bg-green-500 text-white text-lg rounded-md focus:outline-none focus:ring focus:ring-green-300 cursor-pointer transition-all duration-200 ease-out hover:bg-green-500"
                    >
                        COMPRAR AGORA
                    </a>
                </motion.div>
            </div>

            <div className="w-full h-2/6 flex flex-col gap-8">
                <h3 className="text-xl lg:text-4xl font-bold text-terciaria text-center">
                    Quem é <span className="text-nbOrangePrimary">Bruno</span>{" "}
                    Novaes?
                </h3>

                <div className="w-full h-full lg:justify-center items-center flex flex-col lg:flex-row gap-14 p-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        onClick={iniciarVideo}
                        className="w-9/12 h-[430px] lg:h-fit lg:w-[334px] rounded overflow-hidden player-video-sobre"
                    >
                        <video className="video-view" ref={videoRef}>
                            <source src={Video1} type="video/mp4" />
                        </video>

                        <div className="video-preloader" ref={pauseRef}></div>
                        <div className="video-redes" ref={botoesRef}>
                            <div className="w-full h-full flex justify-around items-center p-2">
                                <div className="w-[60px] h-full cursor-pointer bg-nbBlackSecundary hover:bg-gradient-to-br from-sky-500 to-red-500 rounded-full flex items-center justify-center">
                                    <a
                                        href="https://www.tiktok.com/@nobruinvesti"
                                        target="_blank"
                                    >
                                        <FaTiktok size={30} color="white" />
                                    </a>
                                </div>
                                <div className="w-[60px] h-full cursor-pointer hover:bg-gradient-to-br from-yellow-500 to-pink-500 bg-nbBlackSecundary rounded-full flex items-center justify-center">
                                    <a
                                        href="https://www.instagram.com/nobrunovaees/"
                                        target="_blank"
                                    >
                                        <FaInstagram size={30} color="white" />
                                    </a>
                                </div>
                                <div className="w-[60px] h-full cursor-pointer bg-nbBlackSecundary hover:bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center">
                                    <a>
                                        <FaWhatsapp size={30} color="white" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="w-10/12 lg:w-5/12 flex flex-col gap-5 justify-center">
                        <motion.p
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white text-base lg:text-2xl text-center font-normal"
                        >
                            Olá! Sou Bruno Novaes , tenho 29 anos, nascido e
                            criado em São Paulo, no maior centro comercial da
                            América Latina. Cresci no meio do comércio e comecei
                            minha jornada como camelô, enfrentando os desafios
                            diários e aprendendo, na prática, o que realmente
                            funciona no mundo dos negócios
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2 }}
                            className="text-white text-base lg:text-2xl text-center font-normal"
                        >
                            Minha experiência me permitiu desenvolver uma
                            expertise única: conheço os segredos mais bem
                            guardados do comércio, os melhores pontos
                            escondidos, e, acima de tudo, os fornecedores que
                            fazem a diferença entre um negócio comum e um
                            empreendimento de sucesso. Hoje, sou uma referência
                            para grandes marcas e pequenos empreendedores que
                            querem escalar suas vendas com produtos de alta
                            demanda e excelente margem de lucro.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
