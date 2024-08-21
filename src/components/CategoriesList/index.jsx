import sportLife from "./assets/sportLife.png";
import Iphone from "./assets/iphoneImg.png";
import Tenis from "./assets/Tenis.png";
import modaFeminina from "./assets/moda-feminina.png";
import modaPlus from "./assets/modaPlus.png";
import modaInfantil from "./assets/modaInfantil.png";
import modaPraia from "./assets/modaPraia.png";
import modaEvangelica from "./assets/modaEvangelica.png";
import modaBlogueira from "./assets/modaBlogueira.png";

import React from "react";
import { Card } from "../Card/Card";

export default function ListCategories({ moreCategorie }) {
    const dataCardRoupa = [
        {
            roupa: sportLife,
            moda: "Moda Sport Life",
            valor: "A partir de R$80.00",
            animationValueI: -30,
        },
        {
            roupa: Tenis,
            moda: "Tênis",
            valor: "A partir de R$40.00",
            animationValueI: 0,
        },
        {
            roupa: Iphone,
            moda: "Iphone",
            valor: "A partir de R$350.00",
            animationValueI: 30,
        },
        {
            roupa: modaPlus,
            moda: "Moda Plus Size",
            valor: "A partir de R$80.00",
            animationValueI: -30,
        },
        {
            roupa: modaInfantil,
            moda: "Moda infantil",
            valor: "A partir de R$5.00",
            animationValueI: 0,
        },
        {
            roupa: modaPraia,
            moda: "Moda Praia",
            valor: "A partir de R$5.00",
            animationValueI: 30,
        },
        {
            roupa: modaEvangelica,
            moda: "Moda Evangélica",
            valor: "A partir de R$15.00",
            animationValueI: -30,
        },
        {
            roupa: modaBlogueira,
            moda: "Moda Blogueira",
            valor: "A partir de R$20.00",
            animationValueI: 0,
        },

        {
            roupa: modaFeminina,
            moda: "Moda Feminina",
            valor: "A partir de R$20.00",
            animationValueI: 30,
        },
    ];

    return (
        <section className="bg-nbBlackPrimary h-full flex flex-col justify-center items-center py-12 ">
            <div className="flex flex-col items-center justify-center gap-6  s780:w-11/12 s780:flex-row s780:flex-wrap s1380:w11/12 s1780:w-8/12">
                {dataCardRoupa.map((cardRoupa, index) => (
                    <Card
                        moreCategorie={moreCategorie}
                        key={index}
                        dados={cardRoupa}
                    />
                ))}
            </div>
        </section>
    );
}
