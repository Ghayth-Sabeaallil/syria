import { useState } from "react";
import { FaHeadphones } from "react-icons/fa";
import { GoHome, } from "react-icons/go";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineTravelExplore } from "react-icons/md";
const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);



    return (
        <nav className="text-black font-bold backdrop-blur bg-transparent border-2 border-black shadow-xl rounded-lg m-4 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a className="flex justify-between items-center" href="/"><img src="./syria.png" alt="logo" /></a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-10">
                        <div className="text-xl font-mono cursor-pointer p-3 text-black border-black font-bold duration-500 hover:scale-125 hover:font-extrabold flex gap-2">حول <IoMdInformationCircleOutline size={30} /></div>
                        <div className="text-xl font-mono cursor-pointer p-3 text-black border-black font-bold duration-500 hover:scale-125 hover:font-extrabold flex gap-2">اتصل بنا <FaHeadphones size={30} /></div>
                        <div className="text-xl font-mono cursor-pointer p-3 text-black border-black font-bold duration-500 hover:scale-125 hover:font-extrabold flex gap-2">السياحة <MdOutlineTravelExplore size={30} /></div>
                        <div className="text-xl font-mono cursor-pointer p-3 text-black border-black font-bold duration-500 hover:scale-125 hover:font-extrabold flex gap-2">الرئيسية <GoHome size={30} /> </div>
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
                <div className="w-full absolute text-white text-right z-50 rounded-lg flex flex-col items-end mr-4 backdrop-blur-lg bg-transparent text-black p-2">
                    <div className="text-xl font-mono cursor-pointer p-3 font-bold duration-500 flex gap-2 text-black hover:scale-125">الرئيسية <GoHome size={30} /> </div>
                    <div className="text-xl font-mono cursor-pointer p-3 font-bold duration-500 flex gap-2 text-black hover:scale-125">السياحة <MdOutlineTravelExplore size={30} /></div>
                    <div className="text-xl font-mono cursor-pointer p-3 font-bold duration-500 flex gap-2 text-black hover:scale-125">اتصل بنا <FaHeadphones size={30} /></div>
                    <div className="text-xl font-mono cursor-pointer p-3 font-bold duration-500 flex gap-2 text-black hover:scale-125">حول <IoMdInformationCircleOutline size={30} /></div>
                </div>
            )}
        </nav>
    );
};

export default Header;
