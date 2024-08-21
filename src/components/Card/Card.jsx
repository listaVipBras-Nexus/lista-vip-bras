import React from "react";
import { motion } from "framer-motion";

export function Card({
    dados,
    swiperIndex,
    index,
    slidePerView,
    moreCategorie,
}) {
    console.log(index);
    return (
        <>
            {moreCategorie ? (
                <motion.div
                    initial={{ opacity: 0, x: dados.animationValueI }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`w-80 relative h-80 rounded-3xl ${
                        swiperIndex == index - (slidePerView == 1 ? 0 : 1)
                            ? "bg-nbOrangePrimary h-100 mb-24"
                            : "bg-nbBlackSecundary"
                    } flex items-center justify-end p-4 flex-col `}
                >
                    <img
                        className="absolute bottom-20 h-56"
                        src={dados.roupa}
                        alt=""
                    />
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h2 className="text-2xl text-white text-semibold">
                            <strong>{dados.moda}</strong>
                        </h2>
                        <p className="items-center justify-center text-white">
                            {dados.valor}
                        </p>
                    </div>
                </motion.div>
            ) : (
                <div
                    className={`w-80 relative h-80 rounded-3xl  ${
                        swiperIndex == index - (slidePerView == 1 ? 0 : 1)
                            ? "bg-nbOrangePrimary h-100 mb-24"
                            : "bg-nbBlackSecundary"
                    } flex items-center justify-end p-4 flex-col s1080:w-64 s1480:w-72 `}
                >
                    <img
                        className="absolute bottom-20 h-72 "
                        src={dados.roupa}
                        alt=""
                    />
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h2 className="text-2xl text-white text-semibold">
                            <strong>{dados.moda}</strong>
                        </h2>
                        <p className="items-center justify-center text-white">
                            {dados.valor}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
