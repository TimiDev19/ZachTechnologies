import React from 'react'
import ceo from "@/assets/Paulzack.jpg"
import { Goldman } from 'next/font/google';
import Image from 'next/image';

const goldman = Goldman({
    subsets: ['latin'],
    weight: ['400', '700'], // Available weights
    display: 'swap',
});

const MeetCEO = () => {
    return (
        <div id="about" className=' w-screen h-auto p-[2.5%]'>
            <h1 className={`${goldman.className} text-center text-[#000033] text-[45px] mb-4`}>Meet The <span className=' text-[#EEAD0E]'>CEO</span></h1>
            <div className=' min-h-[90vh] flex items-center justify-between max-sm:flex-col'>
                <div className=' h-[50vh] lg:h-full w-[45%] max-sm:w-full'>
                    <Image
                        src={ceo}
                        alt=''
                        className=' rounded-2xl shadow-sm shadow-slate-700'
                    />
                </div>
                <div className=' w-[45%] max-sm:w-full'>
                    <p className={`${goldman.className} text-black mb-[10px]`}>
                        At the heart of our company is a leader who blends engineering precision with creative problem-solving. With a degree in Mechatronics Engineering, love for Artificial intelligence systems and over five(5) years of hands-on experience in mobile development, Udah Paul-zack has led the creation of innovative solutions across fintech, autonomous system, Artificial intelligence, Machine learning, ride-sharing, and custom enterprise applications.
                        Driven by a passion for impactful technology, he has overseen the development of scalable softwares application platforms, embedded systems, artificial intelligence systems and seamless payment integrations. His approach is rooted in a deep understanding of the product lifecycle from concept to deployment and a clear vision for building user-centric, future-ready tech.
                        Under Udah Paul-zack's leadership, our team thrives on agility, collaboration, and a shared commitment to building products that matter and together we a changing lives.
                    </p>
                    <div className={`${goldman.className} flex items-start justify-between w-full max-sm:flex-col`}>
                        <ol className=' w-[45%] max-sm:w-full'>
                            <li className=' font-semibold text-3xl'>Personal Skills</li>
                            <li>Problem solving and debugging</li>
                            <li>State Management (provider and stack)</li>
                            <li>Excellent interpersonal and communication skills</li>
                            <li>Firebase</li>
                            <li>Version control (GitHub, Bitbucket)</li>
                            <li>Leadership</li>
                        </ol>

                        <ol className=' w-[45%] max-sm:w-full type-circle'>
                            <li>Flutter and dart</li>
                            <li>Matlab</li>
                            <li>Agile and SCRUM</li>
                            <li>REST APIs</li>
                            <li>Fun and energetic</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetCEO