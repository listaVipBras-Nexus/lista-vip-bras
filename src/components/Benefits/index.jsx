import CardBenefits from "../CardBenefits";

import iconeTrofeu from "./assets/iconeTrofeu.png";
import iconeCrescimento from "./assets/iconeCrescimento.png";
import iconeTransporte from "./assets/iconeTransporte.png";
import iconeSubindo from "./assets/iconeSubindo.png";
import iconeRelogio from "./assets/iconeRelogio.png";
import iconeBandeira from "./assets/iconeBandeira.png";
import clock from "./assets/relogio-bt.png";
import { motion } from "framer-motion";

const Benefits = () => {
    const dataVantagens = [
        {
            imagem: iconeTrofeu,
            texto: "Acesso a fornecedores com as melhores mercadorias e preços imbatíveis",
            delay: 0.8,
        },
        {
            imagem: iconeCrescimento,
            texto: "Aumente seu lucro com produtos de qualidade",
            delay: 1,
        },
        {
            imagem: iconeTransporte,
            texto: "Entregas rápidas para todo o Brasil via correios",
            delay: 1.2,
        },
        {
            imagem: iconeSubindo,
            texto: "Produtos de alta qualidade que vão impulsionar suas vendas",
            delay: 1.4,
        },
        {
            imagem: iconeRelogio,
            texto: "Economize tempo e dinheiro com contatos já testados e aprovados",
            delay: 1.6,
        },
        {
            imagem: iconeBandeira,
            texto: "Tenha a vantagem competitiva que seu negócio precisa",
            delay: 1.8,
        },
    ];

    return (
        <section id="vantagens" className="w-full h-auto bg-nb-gradientSecundary bg-nbBlackPrimary flex items-center justify-center flex-col relative p-10">
            <p className="text-white text-xl font-bold text-center w-80 p-2 s680:text-2xl s1080:text-3xl s1080:w-2/4 s1080:p-4">
                Seja um(a) profissional com o que há de mais{" "}
                <span className="text-nbOrangePrimary">
                    avançado no mercado
                </span>
            </p>
            <div className="h-mgnovoPersonalizada s1080:bg-nbBlackSecundary w-1 absolute s1080:mr-mgPersonalizada s1080:mt-28"></div>
            <ul className="flex flex-col gap-1 overflow-hidden s380:w-full s680:w-96 s1080:w-full s1080:gap-3 z-30">
                {dataVantagens.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-center justify-center s1080:w-full"
                    >
                        <CardBenefits
                            imagemCard={item.imagem}
                            textoCard={item.texto}
                            index={index}
                            delay={item.delay}
                        />
                    </li>
                ))}
            </ul>

            <motion.div
                initial={{ opacity: 0, y: -60, x: -30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hidden absolute -bottom-24 left-0 z-50 s1180:flex s1180:h-2/5"
            >
                <img src={clock} alt="" />
            </motion.div>
        </section>
    );
};

export default Benefits;
