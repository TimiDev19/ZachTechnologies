import React from 'react'
import { Goldman } from 'next/font/google';
import Image from 'next/image';

const goldman = Goldman({
    subsets: ['latin'],
    weight: ['400', '700'], // Available weights
    display: 'swap',
});

const CoreValue = () => {
    return (
        <div className={`${goldman.className} h-screen w-screen border-none px-[2.5%] max-sm:h-auto`}>
            <h1 className={`${goldman.className} text-center text-[#000033] text-[45px] mb-4`}>Core <span className=' text-[#EEAD0E]'>Value</span></h1>
            <div className=' w-full h-[70vh]'>
                <div className=' w-full h-full relative p-[2.5%]'>
                    <div className='h-[85%] w-[50%] core-bg rounded-3xl absolute shadow-lg shadow-slate-500'></div>
                    <div className=' h-[75%] w-[60%] bg-amber-300/50 text-white rounded-4xl backdrop-blur-3xl absolute z-[30] justify-self-end mt-[10%] px-[2.5%] flex items-center justify-center'>
                        <h1 className=' text-2xl max-sm:text-[16px]'>
                            At ZachTech Industries, we are driven by innovation, excellence, and integrity — putting our clients first, embracing collaboration, and continuously learning to deliver impactful technology solutions that shape the future.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoreValue