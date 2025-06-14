// import Link from 'next/link'
// import React from 'react'

// const About = () => {
//     return (
//         <div
//             id='about'
//             className=' w-full min-h-[80vh] lg:h-[100vh] px-[2.5%] bg-blue-900 text-[#FFD700] pt-[100px] flex items-center justify-center'
//         >
//             <div className=' w-full lg:w-[50%] flex flex-col items-center justify-center'>
//                 <h1 className=' text-4xl font-extrabold uppercase mb-4'>About Us</h1>
//                 <p className=' text-justify mb-4'>
//                     At ZachTech Industries, we transform ideas into impactful technology.
//                     From custom software and AI to IoT and embedded systems, we deliver
//                     innovative, scalable solutions that empower startups, SMEs, and
//                     enterprises to thrive in a digital world. With a focus on creativity,
//                     technical excellence, and real-world results, we’re not just
//                     building technology — we’re building the future.
//                 </p>
//                 <Link
//                     href={'/about'}
//                     className=' p-2 border-2 border-[#FFD700] rounded-2xl backdrop-blur-2xl bg-white/20 hover:bg-transparent duration-300'
//                 >
//                     Read More
//                 </Link>
//             </div>
//         </div>
//     )
// }

// export default About

import RollingBall from '@/components/RollingBall'
import React from 'react'

const About = () => {
    return (
        <div id="about" className=''>
            <RollingBall />
            {/* <div className=' h-[20vh] lg:h-[60vh] w-screen banner2'></div> */}
            {/* <div className=' w-screen h-[100vh]'></div> */}
        </div>
    )
}

export default About