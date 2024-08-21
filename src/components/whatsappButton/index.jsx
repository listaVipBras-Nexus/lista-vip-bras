import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const WhatsappButton = () => {
    const [showSpan, setShowSapn] = useState(false);
    return (
        <a
            className="flex justify-center items-center bg-green-500 rounded-full w-16 h-16 fixed bottom-10 right-10 z-50 cursor-pointer transition-all duration-200 ease-out hover:bg-green-600"
            onMouseEnter={() => setShowSapn(true)}
            onMouseLeave={() => setShowSapn(false)}
            href="https://wa.me/message/QFSXNHUFGNSCB1" target="_blank"
        >
            <FaWhatsapp color="#fff" size={30} />
            <AnimatePresence>
                {showSpan && (
                    <motion.span
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute -top-16 right-1/4 w-32 flex items-center justify-center bg-white p-3 shadow-md rounded-sm"
                    >
                        Fale Comigo!
                    </motion.span>
                )}
            </AnimatePresence>
        </a>
    );
};

export default WhatsappButton;
