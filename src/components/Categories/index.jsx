import React, { useState } from "react";
import moneyCategorias from "./assets/moneyCategorias.png";
import seta from "./assets/seta.png";
import "swiper/css";
import CategoriesCarousel from "../CategoriesCarousel";
import { AnimatePresence } from "framer-motion";
import ListCategories from "../CategoriesList";

export const Categories = () => {
    const [moreCategorie, setMoreCategorie] = useState(false);
    const changeCategorie = () => {
        setMoreCategorie(!moreCategorie);
    };

    return (
        <section
            id="categorias"
            className={`bg-nbBlackPrimary w-full flex items-center justify-center top-10 ${
                moreCategorie ? "h-fit p-10" : "h-screen"
            }`}
        >
            <div className="flex flex-col justify-center items-center gap-16 w-full h-4/5 ">
                <div className="flex flex-col items-center justify-center gap-10 w-full h-full ">
                    <AnimatePresence>
                        {moreCategorie ? (
                            <ListCategories moreCategorie={moreCategorie} />
                        ) : (
                            <CategoriesCarousel />
                        )}
                    </AnimatePresence>
                </div>

                <div className="flex justify-center items-center">
                    <div
                        className="border-2 border-nbOrangePrimary rounded-2xl w-64 h-10 flex items-center justify-center gap-3 cursor-pointer hover:bg-orange-500 transition-all duration-500 ease-out"
                        onClick={changeCategorie}
                    >
                        {" "}
                        <img src={seta} alt="" />{" "}
                        <p className="text-white text-semibold">
                            VER MAIS CATEGORIAS
                        </p>{" "}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;
