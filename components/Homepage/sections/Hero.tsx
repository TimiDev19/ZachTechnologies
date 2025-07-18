import { ContainerScroll } from '@/components/ui/ContainerScrollAnimation'
import Image from 'next/image'
import React from 'react'
import transparentLogo from "@/assets/zach-transparent-logo.png"
import service from "@/assets/UI.png"
import service2 from "@/assets/hugeicons_developer.png"
import service3 from "@/assets/streamline-freehand-color_graphic-tablet-draw-1.png"
import service4 from "@/assets/material-symbols_developer-mode.png"
import service5 from "@/assets/material-symbols_developer-mode-tv.png"
import { Goldman } from 'next/font/google';
import { Island_Moments } from 'next/font/google';
import laptop from '@/assets/Frame 26.png'
import Link from 'next/link'

const islandMoments = Island_Moments({
    weight: '400', // only 400 is available for this font
    subsets: ['latin'],
});

const goldman = Goldman({
    subsets: ['latin'],
    weight: ['400', '700'], // Available weights
    display: 'swap',
});

const Hero = () => {
    return (
        <div
            id="home"
            className=' z-[3] min-h-[100vh] w-[100vw] relative flex flex-col items-center justify-end'
        >
            <div className="relative w-full h-full">
                {/* Top Section (overlapping) */}
                <div id='home' className="relative z-10 overflow-y-visible  min-h-[100vh] h-[150vh] w-[100vw] flex items-center justify-start background px-[2.5%]">
                    <div className=' w-[40%]'>
                        <h1 className={`${goldman.className} text-white text-[45px] capitalize mb-4`}>Build your <span className='text-[#EEAD0E]'>dream</span> website today</h1>
                        <h1 className={`${islandMoments.className} text-[40px] text-[#000033]`}>Technologies beyond possibility</h1>
                        <h1 className={`${goldman.className} text-white text-[45px] capitalize mb-4`}>for better business</h1>
                    </div>
                </div>

                {/* Bottom Section (pushed up behind the top) */}
                <div id="service" className="-mt-40 z-0 bg-white pt-0 h-[100vh] w-full text-xl">
                    <h1 className={`${goldman.className} text-center text-[#000033] text-[45px]`}>Our <span className=' text-[#EEAD0E]'>Service</span></h1>
                    <div className=' min-h-[90vh] w-full bg-transparent flex items-center justify-between px-[2.5%]'>
                        <div className=' w-[30%] h-full flex flex-col items-center justify-between'>
                            <div className=' w-full flex items-center justify-between mb-4'>
                                <div className={`${goldman.className} w-[calc(100%-60px)] text-black`}>
                                    <h1>UI/UX Design</h1>
                                    <p className=' text-[16px]'>
                                        Wireframing, UI design (mobile and website),
                                        UX design (mobile and website),
                                        UI and UX design (mobile and website),
                                        Rebranding, Graphic design ,Motion pictures
                                    </p>
                                </div>
                                <div className=" h-[50px] w-[50px] p-2 rounded-full bg-[#EEAD0E] flex items-center justify-center">
                                    <Image
                                        src={service}
                                        alt=''
                                    />
                                </div>
                            </div>
                            <div className=' w-full flex items-center justify-between mb-4'>
                                <div className={`${goldman.className} w-[calc(100%-60px)] text-black`}>
                                    <h1>Font End</h1>
                                    <p className=' text-[16px]'>
                                        REACT JS, HTML5, CSS, TAILWIND, CRUD,
                                        WEB HOSTING etc
                                    </p>
                                </div>
                                <div className=" h-[50px] w-[50px] p-2 rounded-full bg-[#EEAD0E] flex items-center justify-center">
                                    <Image
                                        src={service2}
                                        alt=''
                                    />
                                </div>
                            </div>
                            <div className=' w-full flex items-center justify-between mb-4'>
                                <div className={`${goldman.className} w-[calc(100%-60px)] text-black`}>
                                    <h1>Graphics Designs</h1>
                                    <p className=' text-[16px]'>
                                        Figma, Coral draw, Photoshop
                                        Rebranding, Graphic design,
                                        Polotno studio, Motion pictures
                                    </p>
                                </div>
                                <div className=" h-[50px] w-[50px] p-2 rounded-full bg-[#EEAD0E] flex items-center justify-center">
                                    <Image
                                        src={service3}
                                        alt=''
                                    />
                                </div>
                            </div>
                        </div>

                        <div className=' w-[30%] h-full flex items-center justify-center'>
                            <Image
                                src={transparentLogo}
                                alt='zach tech logo'
                            />
                        </div>

                        <div className=' w-[30%] h-full flex flex-col items-center justify-center'>
                            <div className=' w-full flex flex-row-reverse items-center justify-between mb-4'>
                                <div className={`${goldman.className} w-[calc(100%-60px)] text-black`}>
                                    <h1>Back End</h1>
                                    <p className=' text-[16px]'>
                                        Mongo dB, JavaScript, SQL, Cloud services,
                                        Web hosting etc
                                    </p>
                                </div>
                                <div className=" h-[50px] w-[50px] p-2 rounded-full bg-[#EEAD0E] flex items-center justify-center">
                                    <Image
                                        src={service2}
                                        alt=''
                                    />
                                </div>
                            </div>
                            <div className=' w-full flex flex-row-reverse items-center justify-between mb-4'>
                                <div className={`${goldman.className} w-[calc(100%-60px)] text-black`}>
                                    <h1>MOBILE DEVELOPMENT</h1>
                                    <p className=' text-[16px]'>
                                        iOS Application, Android Application, App publication
                                        (playstore & apply store), App optimization,
                                        Cross platform applications (iOS and Android)
                                        Application updating and maintenance, Code revamp
                                    </p>
                                </div>
                                <div className=" h-[50px] w-[50px] p-2 rounded-full bg-[#EEAD0E] flex items-center justify-center">
                                    <Image
                                        src={service4}
                                        alt=''
                                    />
                                </div>
                            </div>
                            <div className=' w-full flex flex-row-reverse items-center justify-between mb-4'>
                                <div className={`${goldman.className} w-[calc(100%-60px)] text-black`}>
                                    <h1>WEB DEVELOPMENT</h1>
                                    <p className=' text-[16px]'>
                                        BLOG WEBSITE, SEARCH ENGINE OPTIMIZATION (SEO),
                                        CORPORATE WEBSITE, REAL ESTATE WEBSITE,
                                        SME WEBSITE, E-COMMERCE WEBSITE, DATING WEBSITE,
                                        WEBSITE UPGRADING N SCALING, HOST MIGRATION.
                                    </p>
                                </div>
                                <div className=" h-[50px] w-[50px] p-2 rounded-full bg-[#EEAD0E] flex items-center justify-center">
                                    <Image
                                        src={service5}
                                        alt=''
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="relative w-full h-full">
                {/* Top Section (overlapping) */}
                <div id='whyus' className="relative z-10 overflow-y-visible  min-h-[100vh] h-[150vh] w-[100vw] flex items-center justify-center px-[2.5%]">
                    {/* <div className=' w-[40%]'>
                        <h1 className={`${goldman.className} text-white text-[45px] capitalize mb-4`}>Build your <span className='text-[#EEAD0E]'>dream</span> website today</h1>
                        <h1 className={`${islandMoments.className} text-[40px] text-[#000033]`}>Technologies beyond possibility</h1>
                        <h1 className={`${goldman.className} text-white text-[45px] capitalize mb-4`}>for better business</h1>
                    </div> */}
                    <Image
                        src={laptop}
                        alt=''
                        className=' w-full -translate-x-2/5 absolute'
                    />
                    <div className=' absolute z-[10] h-full w-full flex flex-col items-center justify-center'>
                        <div className=' h-[10vh]'>
                            <h1 className={`${goldman.className} text-center text-[#000033] text-[45px] mb-4`}>Why Us?</h1>
                            <p className={`${goldman.className} text-center text-[#000033] text-[20px] w-[75%] mx-auto`}>
                                Welcome to ZachTech Industries, where we convert your business ideas into
                                reality, using modern technology tools and techniques. We don't just build technology we build possibilities.
                            </p>
                        </div>

                        <div className=' h-[90vh] w-full flex items-center justify-end px-[2.5%]'>
                            <div className=' w-[35%] flex flex-col items-start justify-center'>
                                <h1 className={`${goldman.className} text-[#000033] text-[35px] mb-4`}>Zachtech industries</h1>
                                <p className={`${goldman.className} text-[#000033] text-[20px] w-[75%] mb-4`}>
                                    is a tech startup, redefining
                                    how businesses and individuals harness the
                                    power of technology to achieve meaningful
                                    progress. As a forward-thinking technology firm,
                                    we specialize in delivering innovative, scalable
                                    solutions that empower startups, SMES,
                                    and
                                    large enterprises to thrive in today's digital world.
                                </p>
                                <Link 
                                href={"/#contact"}
                                className={`${goldman.className} text-white text-2xl px-[10px] py-[2px] rounded-md bg-[#EEAD0E]`}
                                >Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section (pushed up behind the top) */}
                <div id="service" className="-mt-64 z-0 bg-white pt-0 h-[130vh] w-full text-xl background-vid">
                </div>
            </div>
        </div>
    )
}

export default Hero