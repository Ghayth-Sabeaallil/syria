import { useTranslation } from "react-i18next";
import { FaMosque } from "react-icons/fa";
import { GiForest } from "react-icons/gi";
import { MdChurch } from "react-icons/md";
import { PiCastleTurretFill } from "react-icons/pi";

function InfoContainer() {
    const { t } = useTranslation();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 md:grid-cols-4 m-auto h-auto p-4 justify-items-center">
            <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-lg shadow-lg w-6/12 h-[25vh] text-lg sm:text-lg md:text-3xl font-bold text-gray-800"><PiCastleTurretFill size={50} />{t('castles')}</div>
            <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-lg shadow-lg w-6/12 h-[25vh] text-lg sm:text-lg md:text-3xl font-bold text-gray-800"><FaMosque size={50} />{t('mosques')}</div>
            <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-lg shadow-lg w-6/12 h-[25vh] text-lg sm:text-lg md:text-3xl font-bold text-gray-800"><MdChurch size={50} />{t('churches')}</div>
            <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-lg shadow-lg w-6/12 h-[25vh] text-lg sm:text-lg md:text-3xl font-bold text-gray-800"><GiForest size={50} />{t('nature')}</div>
        </div>

    )
}

export default InfoContainer