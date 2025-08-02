import React from 'react'
import { Goldman } from 'next/font/google';
import Image from 'next/image';
import techstack from '@/helpers/helpers';

const goldman = Goldman({
    subsets: ['latin'],
    weight: ['400', '700'], // Available weights
    display: 'swap',
});


const Team = () => {
    return (
        <div id="team" className='pt-[100px] w-screen h-screen'>
            <h1 className={`${goldman.className} text-center text-[#000033] text-[45px] mb-4`}>Meet <span className=' text-[#EEAD0E]'>Our</span> Team</h1>
            <div className='w-full overflow-x-auto flex items-start flex-nowrap whitespace-nowrap p-[2.5%] h-[60vh] max-sm:grid max-sm:grid-cols-2 max-sm:h-auto'>
                {
                    techstack.team.map((person, index) => (
                        <div
                            key={index}
                            className={`${goldman.className} flex-shrink-0 min-h-full inline-block w-[20vw] bg-[#000033] mx-[10px] max-sm:w-full max-sm:gap-10`}
                        >
                            <Image
                                src={person.image}
                                alt={person.name}
                                className='w-full h-auto mb-2 object-cover'
                            />
                            <div className=' flex items-center justify-center flex-col w-full h-full'>
                                <h1 className='text-white text-center text-xl break-words whitespace-normal w-full'>{person.name}</h1>
                                <h1 className='text-white text-center break-words whitespace-normal w-full'>{person.role}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Team