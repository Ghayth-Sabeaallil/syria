import { useState } from "react";

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-transparent backdrop-blur-lg shadow text-xl text-black font-bold bg-gradient-to-r from-[#076f2c] to-[#6f4b07]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a className="flex justify-between items-center" href="/"><img src="./syria.png" alt="logo" /></a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-4">
                        <a href="#" className="hover:text-blue-400 hover:underline hover:scale-110">الرئيسية</a>
                        <a href="#" className="hover:text-blue-400 hover:underline hover:scale-110">حول</a>
                        <a href="#" className="hover:text-blue-400 hover:underline hover:scale-110">خدمات</a>
                        <a href="#" className="hover:text-blue-400 hover:underline hover:scale-110">اتصل بنا</a>
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
                <div className="md:hidden bg-transparent w-full backdrop-blur-lg object-right shadow absolute text-right z-50">
                    <a href="#" className="block px-4 py-2 hover:text-blue-400 hover:underline">
                        الرئيسية
                    </a>
                    <a href="#" className="block px-4 py-2 hover:text-blue-400 hover:underline">
                        حول
                    </a>
                    <a href="#" className="block px-4 py-2 hover:text-blue-400 hover:underline">
                        خدمات
                    </a>
                    <a href="#" className="block px-4 py-2 hover:text-blue-400 hover:underline">
                        اتصل بنا
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Header;
