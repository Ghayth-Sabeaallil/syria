

import { useState } from "react";
import { FaHeadphones } from "react-icons/fa";
import { GoHome, } from "react-icons/go";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineTravelExplore } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header = () => {
    const { t, i18n } = useTranslation();
    // Function to toggle language between English and Arabic
    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'ar' ? 'en' : 'ar'; // Toggle between 'ar' and 'en'
        i18n.changeLanguage(newLanguage); // Change the language
    };
    const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    return (
        <nav className="bg-white text-black font-bold border-2 border-black shadow-xl rounded-lg m-4 relative z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <a className="flex justify-between items-center" href="/"><img className="w-14 h-14" src="./logo.svg" alt="logo" /></a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-4">
                        <div className="text-xl font-mono cursor-pointer p-3 text-black border-black font-bold duration-500 hover:scale-125 hover:font-extrabold flex gap-2">{t('about')}<IoMdInformationCircleOutline size={30} /></div>
                        <div className="text-xl font-mono cursor-pointer p-3 text-black border-black font-bold duration-500 hover:scale-125 hover:font-extrabold flex gap-2">{t('contact')}<FaHeadphones size={30} /></div>
                        <Link to={"/discover"}> <div className="text-xl font-mono cursor-pointer p-3 text-black border-black font-bold duration-500 hover:scale-125 hover:font-extrabold flex gap-2">{t('tourism')}<MdOutlineTravelExplore size={30} /></div></Link>
                        <Link to={"/"}>
                            <div className="text-xl font-mono cursor-pointer p-3 text-black border-black font-bold duration-500 hover:scale-125 hover:font-extrabold flex gap-2">{t('home')}<GoHome size={30} /></div>
                        </Link>
                        <div onClick={toggleLanguage} className="text-xl font-mono cursor-pointer p-3 text-black border-black font-bold duration-500 hover:scale-125 hover:font-extrabold flex gap-2">{i18n.language === 'ar' ? <p>English</p> : <p>العربية</p>}</div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                            className="focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="w-full animate-[slideDown_1s_forwards] absolute text-right z-50 rounded-lg flex flex-col items-end backdrop-blur-lg bg-transparent text-black p-2">
                    <div className="text-xl font-mono cursor-pointer p-3 font-bold duration-500 flex gap-2 text-black hover:scale-125">{t('home')}<GoHome size={30} /> </div>
                    <div className="text-xl font-mono cursor-pointer p-3 font-bold duration-500 flex gap-2 text-black hover:scale-125">{t('tourism')}<MdOutlineTravelExplore size={30} /></div>
                    <div className="text-xl font-mono cursor-pointer p-3 font-bold duration-500 flex gap-2 text-black hover:scale-125">{t('contact')}<FaHeadphones size={30} /></div>
                    <div className="text-xl font-mono cursor-pointer p-3 font-bold duration-500 flex gap-2 text-black hover:scale-125">{t('about')}<IoMdInformationCircleOutline size={30} /></div>
                    <div onClick={toggleLanguage} className="text-xl font-mono cursor-pointer p-3 font-bold duration-500 flex gap-2 text-black hover:scale-125">{i18n.language === 'ar' ? <p>English</p> : <p>العربية</p>}</div>
                </div>
            )}
        </nav>
    );
};

export default Header;
