import { useTranslation } from "react-i18next";
import "../index.css";
import Button from "./Button";
import { Link } from "react-router-dom";

export const DiscoverSyria = () => {
    const { t } = useTranslation();
    return (
        <div className="flex select-none">
            <div id="discover" className="border-2 border-black slider items-center m-4 flex justify-end p-10 rounded-lg shadow-2xl">
                <img src="/2.jpg" alt="Image 2" />
                <img src="/3.jpg" alt="Image 3" />
                <img src="/4.jpg" alt="Image 4" />
                <img src="/1.jpg" alt="Image 1" />
                <img src="/5.jpg" alt="Image 5" />
                <img src="/6.jpg" alt="Image 6" />
                <div className="flex flex-col justify-center items-end gap-5  z-[1] text-right">
                    <p className="animate-[animationRight_2s_ease-out] text-white font-Amiri leading-[1.45] font-extrabold text-lg sm:text-lg md:text-3xl">{t('welcome')}</p>
                    <p className="animate-[animationLeft_2s_ease-out]  text-white font-Amiri leading-[1.45] font-extrabold text-lg sm:text-lg md:text-3xl">{t('des')}</p>
                    <Link to="/discover"><Button text={`<< ${t('discover')}`} /></Link>
                </div>
            </div></div>

    )
}
