import perfil from "./assets/perfil.png";
import { motion } from "framer-motion";

const CardTestimonials = ({ data }) => {
    const initial =
        data.axis === "x"
            ? { opacity: 0, x: data.animationValueI }
            : { opacity: 0, y: data.animationValueI };
    const animate =
        data.axis === "x"
            ? { opacity: 1, x: data.animationValueF }
            : { opacity: 1, y: data.animationValueF };

    return (
        <motion.article
            initial={initial}
            whileInView={animate}
            transition={{ duration: 0.8 }}
            className="w-11/12 h-72  bg-nbBlackTertiary rounded-3xl flex flex-col items-center justify-around cursor-pointer transition-all duration-200 ease-out hover:!scale-102 s380:max-w-80 s680:max-w-md s1180:h-full s1180:w-full "
        >
            <div className="w-4/5 flex justify-start items-center gap-4">
                
                <div className="flex flex-col text-white">
                    <h3 className="w-fit font-semibold text-xl s1180:text-lg ">
                        {data.name}
                    </h3>
                    <p className="w-fit text-neutral-300 text-base s1180:text-xs">
                        {data.cargo}
                    </p>
                </div>
            </div>

            <p className="text-sm text-white w-4/5 ">"{data.content}"</p>
        </motion.article>
    );
};

export default CardTestimonials;
