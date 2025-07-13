"use client";
import React, { useState } from 'react'
import { Nunito_Sans, Tektur } from 'next/font/google';
import Logo from "@/assets/zachtechindustries_logo.jpeg"
import transparentLogo from "@/assets/zach-transparent-logo.png"
import Link from 'next/link';
import Image from 'next/image';
// import FadeIn from './FadeIn';
import { motion } from "framer-motion";
// import XIcon from '@mui/icons-material/X';
// import TelegramIcon from '@mui/icons-material/Telegram';
import { Goldman } from 'next/font/google';

const goldman = Goldman({
    subsets: ['latin'],
    weight: ['400', '700'], // Available weights
    display: 'swap',
});

const tektur = Tektur({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const nunitoSans = Nunito_Sans({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'],
});

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={goldman.className}>
            <div className=' fixed z-50 w-screen h-[80px] text-white'>
                {/* <FadeIn> */}
                <div className=' w-full min-h-[80px] flex items-center justify-between px-[10px] py-[2px]  bg-black/15 backdrop-blur-xs'>
                    {/* Left Container */}
                    <div className=' max-w-[30%]'>
                        <div className={goldman.className}>
                            <div className=' flex flex-col items-center justify-center'>
                                <Image
                                    src={transparentLogo}
                                    alt='Zach Technologies Industries Logo'
                                    className=' w-[50px] h-[50px]'
                                />
                                <h1 className=' text-[#000033] uppercase text-xl lg:text-md ml-3 hidden lg:block'>Zach Technologies</h1>
                            </div>
                        </div>
                    </div>

                    {/* Middle Container */}
                    <div className=' w-fit hidden lg:flex items-center justify-center goldman-regular goldman'>
                        <div className={goldman.className}>
                            <div className={'flex items-center justify-center'}>
                                <nav className="space-x-4">
                                    <Link
                                        href="/#home"
                                        className="relative group ml-[25px]"
                                    >
                                        Home
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>

                                    <Link
                                        href="/#service"
                                        className="relative group ml-[25px]"
                                    >
                                        Service
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>

                                    <Link
                                        href="/#whyus"
                                        className="relative group ml-[25px]"
                                    >
                                        Why Us?
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>

                                    <Link
                                        href="/#about"
                                        className="relative group ml-[25px]"
                                    >
                                        About
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>

                                    <Link
                                        href="/#projects"
                                        className="relative group ml-[25px]"
                                    >
                                        Projects
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>

                                    <Link
                                        href="/#team"
                                        className="relative group ml-[25px]"
                                    >
                                        Team
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>

                                    <Link
                                        href="/#clients"
                                        className="relative group ml-[25px]"
                                    >
                                        Clients
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>

                                    <Link
                                        href="/#contact"
                                        className="relative group ml-[25px] mr-[25px]"
                                    >
                                        Contact
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                </nav>

                            </div>
                        </div>
                    </div>

                    {/* Right Container */}
                    {/* <div className=' lg:w-[30%] flex items-center justify-end'>
                    <div className={nunitoSans.className}>
                        <div className=' flex items-center justify-center'>
                            <Link target='blank' href={"https://t.me/ApexiumWorkforce"} className=' focus:outline-none text-sm lg:text-lg mx-2 p-2 border border-white rounded-2xl flex items-center justify-center font-extrabold bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700'>
                                <Image
                                    src={Logo}
                                    alt='Apexium Logo'
                                    className=' w-[20px] h-[20px] lg:h-[30px] lg:w-[30px] rounded-full border border-[#ffffff1a] lg:mr-4 mr-2'
                                />
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div> */}

                    <button
                        aria-label="Open menu"
                        className="relative w-12 h-12 flex items-center justify-center cursor-pointer lg:hidden"
                        onClick={toggleSidebar}
                    >
                        {/* Top Line */}
                        <div
                            className={`absolute w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "rotate-45" : "-translate-y-1.5"
                                }`}
                        ></div>

                        {/* Bottom Line */}
                        <div
                            className={`absolute w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "-rotate-45" : "translate-y-1.5"
                                }`}
                        ></div>
                    </button>

                    <motion.div
                        initial={{ width: 0 }} // Initial width of sidebar when closed
                        animate={{ width: isOpen ? "100vw" : 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            duration: 0.5,
                        }} // Smooth transition
                        style={{
                            height: "100vh",
                            backgroundColor: "",
                            color: "black",
                            overflow: "hidden",
                            position: "fixed",
                            top: 0,
                            left: 0,
                        }}
                        className=' shadow-md shadow-black bg-black navbar-bg text-white'
                    >
                        {/* Sidebar content */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isOpen ? 1 : 0 }}
                            transition={{ delay: 0.2 }}
                            style={{ padding: "20px" }}
                        >
                            <div className={nunitoSans.className}>
                                <div className=' flex w-full items-center justify-between mb-8 text-white'>
                                    <h3 className=' text-xl text-white font-bold'>
                                        <Image
                                            src={Logo}
                                            alt='Apexium Logo'
                                            className=' w-[50px] h-[50px] rounded-full'
                                        />
                                    </h3>
                                    <button
                                        aria-label="Open menu"
                                        className="relative w-12 h-12 flex items-center justify-center cursor-pointer lg:hidden"
                                        onClick={toggleSidebar}
                                    >
                                        {/* Top Line */}
                                        <div
                                            className={`absolute w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "rotate-45" : "-translate-y-1.5"
                                                }`}
                                        ></div>

                                        {/* Bottom Line */}
                                        <div
                                            className={`absolute w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "-rotate-45" : "translate-y-1.5"
                                                }`}
                                        ></div>
                                    </button>
                                </div>
                            </div>

                            <div className={nunitoSans.className}>
                                <ul style={{ listStyle: "none", padding: 0 }}>
                                    <Link
                                        href="/#home"
                                        className="relative group text-white block w-fit mb-4 text-3xl"
                                        onClick={toggleSidebar}
                                    >
                                        Home
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                    <Link
                                        href="/#about"
                                        className="relative group text-white block w-fit mb-4 text-3xl"
                                        onClick={toggleSidebar}
                                    >
                                        About
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                    <Link
                                        href="/#services"
                                        className="relative group text-white block w-fit mb-4 text-3xl"
                                        onClick={toggleSidebar}
                                    >
                                        Services
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                    <Link
                                        href="/#projects"
                                        className="relative group text-white block w-fit mb-4 text-3xl"
                                        onClick={toggleSidebar}
                                    >
                                        Projects
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                    <Link
                                        href="/#partnerships"
                                        className="relative group text-white block w-fit mb-4 text-3xl"
                                        onClick={toggleSidebar}
                                    >
                                        Partnerships
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>

                                    {/* <div className=' w-full flex items-center justify-center mt-6'>
                                    <Link
                                        target='blank'
                                        href={"https://x.com/ApexiumAgency"}
                                        className=' text-white text-2xl mx-2 lg:text-6xl p-2 border-2 border-white rounded-full flex items-center justify-center bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700'
                                    >
                                        {/* <XIcon />
                                    </Link>
                                    <Link
                                        target='blank'
                                        href={"https://t.me/ApexiumWorkforce"}
                                        className=' text-white text-2xl mx-2 lg:text-6xl p-2 border-2 border-white rounded-full flex items-center justify-center bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700'
                                    >
                                        {/* <TelegramIcon /> 
                                    </Link>
                                </div> */}

                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
                {/* </FadeIn> */}
            </div>
        </div>
    )
}

export default Navbar
