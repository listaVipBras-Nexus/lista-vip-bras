import React from "react";
import { FaTrophy } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import money from "./assets/money.png";
import moneytwo from "./assets/moneytwo.png";
import moneythree from "./assets/money-bt-full.png";
import { motion } from "framer-motion";
import "./style.css";
import WhatsappButton from "../whatsappButton";

export default function Home() {
    return (
        <main
            id="home"
            className="bg-nbBlackPrimary bg-[url('./assets/background-t.png')] bg-no-repeat bg-left bg-cover w-full h-screen flex justify-center items-center overflow-x-hidden"
        >
            <motion.div
                initial={{ opacity: 0, y: -80, x: -80 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-start items-start absolute top-0 left-0 s1080:hidden"
            >
                <img src={money} draggable={false} />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -80, x: -80 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hidden justify-start items-start absolute top-0 left-0 s1180:flex"
            >
                <img src={moneytwo} alt="" draggable={false} />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 80, x: 80 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hidden justify-start items-start absolute z-50  -bottom-36 -right-0 s1180:flex"
            >
                <img src={moneythree} alt="" draggable={false} />
            </motion.div>
            <div className=" flex items-center flex-col justify-center gap-5 s880:w-3/4">
                <h1 className="text-white font-semibold text-2xl w-[90%] s380:max-w-nb-352 s480:w-[70%] s580:w-[60%] s680:w-[50%] s680:max-w-2xl s780:text-tamanhoTitulo s780:w-[60%] s880:w-[70%] s980:w-[60%]  s1080:w-[56%] s1180:w-[50%] s1280:w-[46%] s1280:text-3xl s1380:w-2/5 s1480:w-96">
                    OBTENHA A MELHOR LISTA SECRETA DO BRÁS E{" "}
                    <span className="text-nbOrangePrimary">
                        IMPULSIONE SEU NEGÓCIO.
                    </span>{" "}
                </h1>
                <p className="text-white text-xs font-normal text-center w-10/12 s480:w-[65%] s580:w-[55%] s680:w-[45%] s780:text-fonteDescricao s780:w-[50%] s880:w-[60%] s980:w-[55%] s1180:w-[45%] s1280:w-[43%] s1380:w-[40%] s1480:w-[37%] s1580:w-[35%] s1680:w-[33%] s1780:w-[30%] s1880:w-[28%] s1980:w-[26%]">
                    Aproveite e obtenha a melhor{" "}
                    <span className="text-nbOrangePrimary">
                        lista de contatos
                    </span>{" "}
                    do Brás para{" "}
                    <span className="text-nbOrangePrimary">garantir</span> os
                    melhores preços para a sua loja.
                </p>
                <a
                    href="https://pay.kiwify.com.br/s8J1u2t"
                    target="_blank"
                    className="bg-nbGreenPrimary w-10/12 h-12 text-white flex items-center justify-center rounded-md cursor-pointer transition-all duration-200 ease-out hover:bg-green-500 s780:w-80 s880:w-2/4"
                >
                    COMPRAR AGORA
                </a>
                <div className="flex w-64 justify-center items-center gap-3">
                    <div className="flex items-center justify-center text-white gap-2 text-xs">
                        {" "}
                        <FaTrophy size={40} color="#fff" />
                        <p className="text-tamanhoTeste s780:text-xs">
                            Satisfação <strong>Garantida</strong>
                        </p>
                    </div>
                    <div className="flex items-center justify-center text-white gap-2 text-xs">
                        {" "}
                        <IoShieldCheckmark size={40} color="#fff" />{" "}
                        <p className="text-tamanhoTeste s780:text-xs">
                            Checkot <strong>Seguro</strong>
                        </p>
                    </div>
                    <div className="flex items-center justify-center text-white gap-2 text-xs">
                        {" "}
                        <FaLock size={40} color="#fff" />{" "}
                        <p className="text-tamanhoTeste s780:text-xs">
                            {" "}
                            Privacidade <strong>Protegida</strong>
                        </p>
                    </div>
                </div>
            </div>

            <WhatsappButton />
        </main>
    );
}
