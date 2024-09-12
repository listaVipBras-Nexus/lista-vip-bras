import React from "react";
import logo from "./assets/logo.png";
import whatsApp from "./assets/watsaap.png";
import telegram from "./assets/telegram.png";
import instagram from "./assets/instagram.png";
import tiktok from "./assets/tiktok.png";

const Footer = () => {
    return (
        <footer className="bg-nb-gradient bg-nbBlackPrimary w-full h-96 max-h-96 flex items-center justify-around flex-col ">
            <div className="flex flex-col justify-between items-center w-3/4 h-2/4">
                <div className="flex flex-col justify-center items-center gap-2">
                    <img src={logo} alt="ListaVipBrás" className="max-w-64" />
                    <p className="text-white font-bold text-sm">
                        © Todos os direitos reservados.
                    </p>
                </div>

                <nav className="s580:w-full s580:text-xs s780:text-sm s1180:text-base s1280:w-2/3">
                    <ul className="hidden justify-between text-white font-bold s380:hidden s580:flex">
                        <li className="cursor-pointer hover:text-nbOrangePrimary">
                            <a href="#home">Início</a>
                        </li>
                        <li className="cursor-pointer hover:text-nbOrangePrimary">
                            <a href="#categorias">Categorias</a>
                        </li>
                        <li className="cursor-pointer hover:text-nbOrangePrimary">
                            <a href="#vantagens">Vantagens</a>
                        </li>
                        <li className="cursor-pointer hover:text-nbOrangePrimary">
                            <a href="#fornecedores">Fornecedores</a>
                        </li>
                        <li className="cursor-pointer hover:text-nbOrangePrimary">
                            <a href="#depoimentos">Depoimentos</a>
                        </li>
                        <li className="cursor-pointer hover:text-nbOrangePrimary">
                            <a href="#sobre">Sobre</a>
                        </li>
                    </ul>
                </nav>

                <nav>
                    <ul className="flex gap-7 s580:gap-9">
                        <li className="cursor-pointer hover:scale-105 transition-all duration-200 ease-out">
                            <a
                                href="https://api.whatsapp.com/message/QFSXNHUFGNSCB1?autoload=1&app_absent=0"
                                target="_blank"
                            >
                                <img src={whatsApp} alt="whatsApp" />
                            </a>
                        </li>
                        <li className="cursor-pointer hover:scale-105 transition-all duration-200 ease-out">
                            <img src={telegram} alt="telegram" />
                        </li>
                        <li className="cursor-pointer  hover:scale-105 transition-all duration-200 ease-out">
                            <a
                                href="https://www.instagram.com/nobrunovaees?igsh=emV2dzI2MWtkZzRl"
                                target="_blank"
                            >
                                <img src={instagram} alt="instagram" />
                            </a>
                        </li>
                        <li className="cursor-pointer hover:scale-105 transition-all duration-200 ease-out">
                            <a
                                href="https://www.tiktok.com/@nobruinvesti"
                                target="_blank"
                            >
                                <img src={tiktok} alt="tik tok" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <p className="text-white">
                Desenvolvido por{" "}
                <a href="#">
                    <strong className="underline">Nexus</strong>
                </a>
            </p>
        </footer>
    );
};

export default Footer;
