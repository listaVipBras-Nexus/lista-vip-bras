import { useEffect, useState } from "react";
import CarouselTestimonials from "../../components/CarouselTestimonials";
import TestemonialTemplate from "../../components/TestimonialTemplate";

const Testimonials = () => {
    const [screenView, setScreenView] = useState(false);

    useEffect(() => {
        const handlResize = () => {
            if (window.innerWidth >= 1180) {
                setScreenView(true);
            }
            if (window.innerWidth < 1180) {
                setScreenView(false);
            }
        };
        handlResize();

        window.addEventListener("resize", handlResize);

        return () => {
            window.removeEventListener("resize", handlResize);
        };
    }, []);

    return (
        <section
            id="depoimentos"
            className="h-screen bg-[url('./assets/home-bg.png')] bg-no-repeat bg-left bg-cover bg-nbBlackPrimary flex justify-center items-center "
        >
            {screenView ? <TestemonialTemplate /> : <CarouselTestimonials />}
        </section>
    );
};

export default Testimonials;
