import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PiCastleTurretFill } from "react-icons/pi";
import { FaMosque } from "react-icons/fa";
import { MdChurch } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

type ListProps = {
    name?: string;
};

const InfoContainer = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { t } = useTranslation();

    // Safely fetching data from `t`, ensuring it returns a list or empty array if undefined
    const getList = (key: string): ListProps[] => {
        const list = t(key, { returnObjects: true });
        return Array.isArray(list) ? (list as ListProps[]) : [];
    };

    // Data lists from `t`
    const castleList = getList('castlesList');
    const mosquesList = getList('mosquesList');
    const churchesList = getList('churchesList');

    // Mapping items with their respective lists
    const categories = [
        { icon: <FaMosque size={50} />, label: t("mosques"), list: mosquesList },
        { icon: <PiCastleTurretFill size={50} />, label: t("castles"), list: castleList },
        { icon: <MdChurch size={50} />, label: t("churches"), list: churchesList },
    ];

    const handleClick = (index: number, list: ListProps[]) => {
        if (list.length > 0) {
            setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
        }
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 md:grid-cols-3 m-auto p-2 justify-items-center">
            {categories.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center w-full relative"
                >
                    {/* Main clickable div */}
                    <div
                        onClick={() => handleClick(index, item.list)}
                        className={`group flex flex-col gap-3 justify-center items-center bg-white rounded-tl-lg rounded-tr-lg shadow-lg w-4/6 h-[25vh] text-lg sm:text-lg md:text-3xl font-bold text-gray-800 cursor-pointer ${item.list.length === 0 ? "opacity-50 cursor-not-allowed" : ""
                            }`}
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

                    {/* Dropdown list */}
                    <div
                        className={`flex flex-col items-center w-4/6 transition-all duration-500 overflow-hidden rounded-bl-lg rounded-br-lg bg-gray-100 shadow-lg ${activeIndex === index ? "max-h-full p-4" : "max-h-0 p-0"
                            }`}
                    >
                        {activeIndex === index &&
                            item.list.map((listItem, idx) => (
                                <div
                                    key={idx}
                                    className="select-none w-full text-center cursor-pointer hover:bg-slate-300 text-lg text-gray-600 p-2"
                                >
                                    {listItem.name}
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InfoContainer;
