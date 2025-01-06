import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PiCastleTurretFill } from "react-icons/pi";
import { FaMosque } from "react-icons/fa";
import { MdChurch } from "react-icons/md";
import { GiForest } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

type castleListProps = {
    name?: string;
};
const InfoContainer = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { t } = useTranslation();
    const castleList = t('castlesList', { returnObjects: true }) as castleListProps[];

    const handleClick = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 md:grid-cols-4 m-auto h-screen p-2 justify-items-center">
            {[
                { icon: <PiCastleTurretFill size={50} />, label: t("castles") },
                { icon: <FaMosque size={50} />, label: t("mosques") },
                { icon: <MdChurch size={50} />, label: t("churches") },
                { icon: <GiForest size={50} />, label: t("nature") },
            ].map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center w-full relative"
                >
                    {/* Main clickable div */}
                    <div
                        onClick={() => handleClick(index)}
                        className="group flex flex-col gap-3 justify-center items-center bg-white rounded-tl-lg rounded-tr-lg shadow-lg w-4/6 h-[25vh] text-lg sm:text-lg md:text-3xl font-bold text-gray-800 cursor-pointer"
                    >
                        <div className="transform transition-transform duration-200 group-hover:scale-125">
                            {item.icon}
                        </div>
                        {item.label}
                        <IoIosArrowDown
                            className={`transform transition-transform duration-500 ${activeIndex === index ? "rotate-180" : ""
                                }`}
                        />
                    </div>

                    {/* Sliding div below */}
                    <div
                        className={`flex flex-col items-center w-4/6 transition-all duration-500 overflow-hidden rounded-bl-lg rounded-br-lg bg-gray-100 shadow-lg ${activeIndex === index ? "max-h-[10rem] p-4" : "max-h-0 p-0"
                            }`}
                    >
                        {castleList.map((cas) => <div className="select-none w-full cursor-pointer hover:bg-slate-300 text-lg text-gray-600 p-2">{cas.name}</div>)}

                    </div>
                </div>
            ))}
        </div>
    );
};

export default InfoContainer;
