import CardTestimonials from "../../components/CardTestimonials";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";

const CarouselTestimonials = () => {
    const [slidePerView, setSlidePerView] = useState(1);
    const [swiperIndex, setSwiperIndex] = useState(0);

    const dataTestimonials = [
        {
            animationValueI: -50,
            animationValueF: 0,
            name: "João Carlos",
            cargo: "Campinas - SP",
            content:
                "Depois que adquiri a lista de fornecedores do Bruno Novaes, minhas vendas triplicaram! Consegui produtos de qualidade a preços ótimos, o que me permitiu oferecer mais variedade para meus clientes.",
        },
        {
            animationValueI: 50,
            animationValueF: 0,
            name: "Mariana Lopes",
            cargo: "Fortaleza - CE",
            content:
                "A lista de fornecedores do Bruno Novaes foi a melhor aquisição que fiz para meu negócio. Finalmente consegui encontrar fornecedores confiáveis que entregam no prazo e com preços que cabem no meu orçamento. Minhas expectativas foram totalmente atingidas.",
        },
        {
            animationValueI: -50,
            animationValueF: 0,
            name: "Rafael Santos",
            cargo: "Belo Horizonte - MG",
            content:
                "Sempre tive dificuldade em encontrar bons fornecedores, mas a lista do Bruno Novaes mudou isso. As vendas aumentaram 40% desde que comecei a comprar com esses novos contatos. Recomendo demais!",
        },
        {
            animationValueI: 50,
            animationValueF: 0,
            name: "Aline Ferreira",
            cargo: "Porto Alegre - RS",
            content:
                "Com a lista de fornecedores do Bruno Novaes, consegui encontrar produtos diferenciados que fizeram sucesso entre meus clientes. Em menos de um mês, minhas vendas aumentaram significativamente, superando minhas expectativas.",
        },
        {
            animationValueI: -50,
            animationValueF: 0,
            name: "Lucas Almeida",
            cargo: "Manaus - AM",
            content:
                "A lista do Bruno Novaes me ajudou a dar um novo rumo para meu negócio. Agora tenho acesso a fornecedores que oferecem produtos de alta qualidade a preços competitivos, e minhas vendas estão melhores do que nunca!",
        },
        {
            animationValueI: 50,
            animationValueF: 0,
            name: "Camila Oliveira",
            cargo: "Cachoeiro de Itapemirim - ES",
            content:
                "A lista de fornecedores do Bruno Novaes foi um divisor de águas para meu negócio. Consegui encontrar produtos exclusivos que aumentaram minhas vendas em 50% em apenas dois meses. Superou todas as minhas expectativas!",
        },
    ];

    useEffect(() => {
        const handlResize = () => {
            if (window.innerWidth >= 580) {
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
        <Swiper
            slidesPerView={slidePerView}
            loop={true}
            speed={500}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setSwiperIndex(swiper.realIndex)}
            className="flex !items-center justify-center w-full h-3/5  "
        >
            {dataTestimonials.map((data, index) => (
                <SwiperSlide
                    key={index}
                    className={`!w-full h-4/5 transition-items ${swiperIndex === index ? "items-start" : "items-center"
                        } flex justify-center  s580:!w-4/5 s880:!w-3/6 `}
                >
                    <CardTestimonials data={data} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CarouselTestimonials;
