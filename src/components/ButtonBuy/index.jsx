const ButtonBuy = ({ titulo }) => {
    return (
        <a
            href="https://pay.kiwify.com.br/s8J1u2t"
            target="_blank"
            className="w-56 h-14 bg-nbGreenPrimary flex items-center justify-center rounded-md hover:bg-green-500"
        >
            <button className="text-xl text-white w-full h-full">
                {titulo}
            </button>
        </a>
    );
};
export default ButtonBuy;
