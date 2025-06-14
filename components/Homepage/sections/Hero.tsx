import { ContainerScroll } from '@/components/ui/ContainerScrollAnimation'
import Image from 'next/image'
import React from 'react'
import Logo from "@/assets/zachtechindustries_logo.jpeg"

const Hero = () => {
    return (
        <div
            id="home"
            className=' min-h-[100vh] lg:h-[100vh] w-[100vw] background flex flex-col lg:flex-row items-center justify-center pt-[100px] px-[2.5%]'
        >
            <div className=' max-w-[95%] lg:w-[50%] text-white text-center lg:text-left'>
                <h1 className=' text-4xl lg:text-6xl mb-2'>Welcome To</h1>
                <h1 className=' font-extrabold text-4xl lg:text-6xl uppercase text-[#FFD700] mb-2'>Zach Technologies Industries</h1>
                <p className=' font-thin italic text-2xl lg:text-4xl mb-6'>"Technology Beyound Possibilities"</p>
            </div>

            <div className=' w-full lg:w-[55%] flex items-center justify-center animate-pulse'>
                <Image
                    src={Logo}
                    alt=''
                    className=' w-[95%] lg:w-[65%] rounded-full'
                />
            </div>
        </div>
    )
}

export default Hero