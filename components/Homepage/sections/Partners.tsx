import React from 'react'
import { Goldman } from 'next/font/google';
import Image from 'next/image';
import techstack from '@/helpers/helpers';

const goldman = Goldman({
    subsets: ['latin'],
    weight: ['400', '700'], // Available weights
    display: 'swap',
});


const Partners = () => {
    return (
        <div id="partners" className='pt-[100px]'>
            <h1 className={`${goldman.className} text-center text-[#000033] text-[45px] mb-4`}>Our <span className=' text-[#EEAD0E]'>Partners</span></h1>
            <div className='w-full overflow-x-auto flex flex-col lg:flex-row items-center lg:items-start justify-center flex-nowrap whitespace-nowrap p-[2.5%]'>
                {
                    techstack.partners.map((person, index) => (
                        <div
                            key={index}
                            className={`${goldman.className} flex-shrink-0 inline-block w-[300px] bg-transparent  mx-[10px]`}
                        >
                            <Image
                                src={person.image}
                                alt=''
                                className='w-full h-auto mb-2 object-cover'
                            />
                            <h1 className='text-black text-center text-xl break-words whitespace-normal w-full'>{person.name}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Partners