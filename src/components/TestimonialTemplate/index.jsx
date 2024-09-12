import React from "react";
import CardTestimonials from "../CardTestimonials";
import "./style.css";

const TestimonialTemplate = () => {
    const dataTestimonials = [
        {
            axis: "x",
            animationValueI: -30,
            animationValueF: 0,
            name: "João Carlos",
            cargo: "Campinas - SP",
            content:
                "Depois que adquiri a lista de fornecedores do Bruno Novaes, minhas vendas triplicaram! Consegui produtos de qualidade a preços ótimos, o que me permitiu oferecer mais variedade para meus clientes.",
        },
        {
            axis: "y",
            animationValueI: -30,
            animationValueF: 0,
            name: "Mariana Lopes",
            cargo: "Fortaleza - CE",
            content:
                "A lista de fornecedores do Bruno Novaes foi a melhor aquisição que fiz para meu negócio. Finalmente consegui encontrar fornecedores confiáveis que entregam no prazo e com preços que cabem no meu orçamento. Minhas expectativas foram totalmente atingidas.",
        },
        {
            axis: "x",
            animationValueI: 30,
            animationValueF: 0,
            name: "Rafael Santos",
            cargo: "Belo Horizonte - MG",
            content:
                "Sempre tive dificuldade em encontrar bons fornecedores, mas a lista do Bruno Novaes mudou isso. As vendas aumentaram 40% desde que comecei a comprar com esses novos contatos. Recomendo demais!",
        },
        {
            axis: "x",
            animationValueI: -60,
            animationValueF: 0,
            name: "Aline Ferreira",
            cargo: "Porto Alegre - RS",
            content:
                "Com a lista de fornecedores do Bruno Novaes, consegui encontrar produtos diferenciados que fizeram sucesso entre meus clientes. Em menos de um mês, minhas vendas aumentaram significativamente, superando minhas expectativas.",
        },
        {
            axis: "x",
            animationValueI: 60,
            animationValueF: 0,
            name: "Lucas Almeida",
            cargo: "Manaus - AM",
            content:
                "A lista do Bruno Novaes me ajudou a dar um novo rumo para meu negócio. Agora tenho acesso a fornecedores que oferecem produtos de alta qualidade a preços competitivos, e minhas vendas estão melhores do que nunca!",
        },
        {
            axis: "y",
            animationValueI: 30,
            animationValueF: 0,
            name: "Camila Oliveira",
            cargo: "Cachoeiro de Itapemirim - ES",
            content:
                "A lista de fornecedores do Bruno Novaes foi um divisor de águas para meu negócio. Consegui encontrar produtos exclusivos que aumentaram minhas vendas em 50% em apenas dois meses. Superou todas as minhas expectativas!",
        },
    ];
    return (
        <div className="w-11/12 h-11/12 grid gap-3 justify-center swiper-testimonials">
            {dataTestimonials.map((data, index) => (
                <CardTestimonials data={data} />
            ))}
        </div>
    );
};

export default TestimonialTemplate;
