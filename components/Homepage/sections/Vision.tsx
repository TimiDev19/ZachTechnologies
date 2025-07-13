import React from 'react'
import { Goldman } from 'next/font/google';
import Image from 'next/image';

const goldman = Goldman({
    subsets: ['latin'],
    weight: ['400', '700'], // Available weights
    display: 'swap',
});

const Vision = () => {
    return (
        <div className={`${goldman.className} h-screen w-screen px-[2.5%]`}>
            <h1 className={`${goldman.className} text-center text-[#000033] text-[45px] mb-4`}>Our <span className=' text-[#EEAD0E]'>Vision</span></h1>
            <div className=' w-full h-[70vh]'>
                <div className=' w-full h-full relative p-[2.5%]'>
                    <div className='h-[85%] w-[60%] vision-bg rounded-3xl absolute'></div>
                    <div className=' h-[75%] w-[60%] bg-slate-400/50 text-white rounded-4xl backdrop-blur-3xl absolute z-[30] justify-self-end mt-[10%] px-[2.5%] flex items-center justify-center'>
                        <h1 className=' text-2xl'>
                            To be a leading force in global technology transformation—pushing the boundaries of possibility, fostering innovation, and shaping a smarter, more connected world.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision