// eslint-disable-next-line react/prop-types
import { motion } from "framer-motion";

const CardBenefits = ({ imagemCard, textoCard, index, delay }) => {
    const estilizacaoPersonalizada1 = `
    w-96 h-24 flex items-center justify-center gap-3
    ${
        index === 0 || index === 2 || index === 4
            ? "s1080:flex-row-reverse s1080:w-3/4 s1080:mr-96"
            : "s1080:w-3/4 s1080:ml-marginPersonalizada"
    }
    `;
    const estilizacaoPersonalizada2 = `
    h-3/4 s1080:h-14
    ${index === 0 || index === 2 || index === 4 ? "" : ""}
    `;

    return (
        <div className={estilizacaoPersonalizada1}>
            <img src={imagemCard} className={estilizacaoPersonalizada2}></img>
            <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: delay }}
                className="border-2 rounded-xl h-3/4 w-64 flex items-center justify-center justify bg-nbBlackSecundary s680:h-20 s680:w-80"
            >
                <p className="text-center text-sm text-white s380:w-56 s680:w-60 s1080:text-base">
                    {textoCard}
                </p>
            </motion.div>
        </div>
    );
};

export default CardBenefits;
