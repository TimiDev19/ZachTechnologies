import React from 'react'
import { Goldman } from 'next/font/google';
import Image from 'next/image';

const goldman = Goldman({
    subsets: ['latin'],
    weight: ['400', '700'], // Available weights
    display: 'swap',
});

const Mission = () => {
    return (
        <div className={`${goldman.className}  h-screen max-sm:h-auto  w-screen px-[2.5%]`}>
            <h1 className={`${goldman.className} text-center text-[#000033] text-[45px] mb-4`}>Our <span className=' text-[#EEAD0E]'>Mission</span></h1>
            <div className=' w-full h-[70vh]'>
                <div className=' w-full h-full hidden lg:block relative p-[2.5%]'>
                    <div className='h-[85%] w-[60%] mission-bg rounded-3xl absolute'></div>
                    <div className=' h-[75%] w-[60%] bg-slate-400/50 text-white rounded-4xl backdrop-blur-2xl absolute z-[30] justify-self-end mt-[10%] px-[2.5%] flex items-center justify-center'>
                        <h1 className='text-2xl max-sm:text-[16px]'>
                            To empower individuals and organizations by delivering innovative, future-ready technology solutions that drive growth, unlock potential, and create lasting impact.
                        </h1>
                    </div>
                </div>
                <div className=' w-full h-full lg:hidden flex items-center justify-center'>
                    <div className='h-[85%] w-[90%] mission-bg-res rounded-3xl flex items-center justify-center text-white p-2'>
                        <h1 className='text-2xl max-sm:text-[16px]'>
                            To empower individuals and organizations by delivering innovative, future-ready technology solutions that drive growth, unlock potential, and create lasting impact.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission