import React from 'react'
import { Goldman } from 'next/font/google';
import Image from 'next/image';
import techstack from '@/helpers/helpers';

const goldman = Goldman({
    subsets: ['latin'],
    weight: ['400', '700'], // Available weights
    display: 'swap',
});

const Client = () => {
    return (
        <div id="clients" className='pt-[100px] relative'>
            <h1 className={`${goldman.className} text-center text-[#000033] text-[45px] mb-4`}>Our <span className=' text-[#EEAD0E]'>Clients</span></h1>
            <div className='w-full overflow-x-auto flex items-start justify-center flex-nowrap whitespace-nowrap p-[2.5%]'>
                {
                    techstack.clients.map((person, index) => (
                        <div
                            key={index}
                            className={`${goldman.className} flex-shrink-0 inline-block w-[100px] bg-transparent  mx-[10px]`}
                        >
                            <Image
                                src={person.image}
                                alt=''
                                className='w-full h-auto mb-2 object-cover shadow-lg shadow-slate-500 rounded-full mx-[10px]'
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Client