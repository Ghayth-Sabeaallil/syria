import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Card from "./Cards";
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface olds {
    name: string;
    des: string;
    img: string
}

export type CardContainerProps = {
    name?: string;
    des?: string,
    img?: string
};
function CardContainer() {
    const { t } = useTranslation();
    const old = t('old', { returnObjects: true }) as olds[];
    const [index, setIndex] = useState<number>(0);
    return (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 justify-center items-center m-auto h-screen">
            <div className="grid grid-cols-[auto_1fr_auto] items-center h-full rounded-md">
                <div id="prev1" className="text-2xl px-5 cursor-pointer select-none" onClick={() => { index > 0 ? setIndex(index - 1) : setIndex(2) }}><IoIosArrowBack size={25} color="white" /></div>
                <div id="card1" className="flex justify-center items-center h-5/6 bg-white rounded-lg shadow-lg text-xl font-bold text-gray-800"><Card name={old[index].name} description={old[index].des} image={old[index].img} /></div>
                <div id="next1" className="text-2xl px-5 cursor-pointer select-none" onClick={() => { index < 2 ? setIndex(index + 1) : setIndex(0) }}><IoIosArrowForward size={25} color="white" /></div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center h-full rounded-md">
                <div id="prev2" className="text-2xl px-5 cursor-pointer select-none"><IoIosArrowBack size={25} color="white" /></div>
                <div id="card2" className="flex justify-center items-center h-5/6 bg-white rounded-lg shadow-lg text-xl font-bold text-gray-800">Card</div>
                <div id="next2" className="text-2xl px-5 cursor-pointer select-none"><IoIosArrowForward size={25} color="white" /></div>
            </div>
        </div>

    )
}

export default CardContainer