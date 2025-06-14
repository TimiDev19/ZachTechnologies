"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Logo from "@/assets/zachtechindustries_logo.jpeg"
import Link from "next/link";
import { Book, BookOpenText } from "lucide-react";

const RollingBall = () => {
    const [showText, setShowText] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: false });
    const [fullText, setFullText] = useState(false)
    // const { rel, inVie } = useInView({ triggerOnce: false });

    // Reset text visibility when the component enters the viewport again
    useEffect(() => {
        if (inView) {
            setShowText(false);
        }
    }, [inView]);

    return (
        <>
            <div ref={ref} className="pt-[90px] flex relative flex-col items-center justify-center min-h-screen bg-blue-900 overflow-hidden py-[10px]">
                {/* Text that will be revealed */}
                <AnimatePresence>
                    <motion.h1
                        className={` text-2xl font-bold relative z-10 transition-colors duration-500 ${showText ? "text-black" : "text-green-700"
                            }`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={showText ? { opacity: 1, y: 0 } : {}}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <div className=" w-[95%] lg:w-[65%] mx-auto">
                            <span className=" w-[95%] lg:w-[65%] mx-auto text-xl lg:text-4xl">Time to learn</span>
                            <span className=' mb-4 flex items-center justify-center uppercase font-bold text-black text-2xl lg:text-6xl p-2 bg-gradient-to-tr from-blue-700 to-blue-300 w-fit rounded-xl'>
                                <Image
                                    src={Logo}
                                    alt="Apexium Logo"
                                    className=' w-[50px] h-[50px] rounded-full mr-3'
                                />
                                About Zach Technologies Industries
                            </span>
                            <span className={` ${fullText && "hidden"} text-xl font-medium mb-4 text-white`}>
                                At ZachTech Industries, we transform ideas into impactful technology.
                                From custom software and AI to IoT and embedded systems, we deliver
                                innovative, scalable solutions that empower startups, SMEs, and
                                enterprises to thrive in a digital world. With a focus on creativity,
                                technical excellence, and real-world results, we’re not just
                                building technology — we’re building the future.
                            </span>
                            <span className={` ${fullText ? "block" : "hidden"} text-xl font-medium mb-4 text-white`}>
                                ZachTech Industries is a visionary technology firm committed to helping businesses and individuals unlock the full potential of digital innovation. By blending technical expertise with a passion for progress, ZachTech delivers tailored solutions that drive efficiency, enhance performance, and open new avenues for growth across industries. Their mission is to redefine how technology is developed and applied—transforming ideas into scalable, real-world impact.
                                <br /><br />

                                In a recent initiative, ZachTech collaborated with a fast-growing logistics startup to develop a custom AI-powered analytics platform. This solution enabled the client to gain real-time insights into their operations, leading to smarter decision-making and significant cost savings. Projects like these reflect ZachTech’s dedication to delivering practical innovation through a user-focused approach, while also pushing the boundaries of what’s possible with modern tech.
                                <br /><br />

                                As businesses continue to evolve in a digital-first world, ZachTech Industries remains a trusted partner in navigating change. Their wide-ranging capabilities—spanning software development, AI/ML, data analytics, IoT, embedded systems, and training—ensure that clients are equipped with the tools and expertise needed to lead in their respective fields. By focusing on both innovation and impact, ZachTech is helping shape the future—one project at a time.


                            </span>
                            {/* <button
                                // target="blank"
                                // href={"https://x.com/ApexiumAgency"}
                                onClick={() => setFullText(!fullText)}
                                className=" flex items-center justify-center w-fit text-sm mt-4 lg:text-lg p-2 border border-green-500 rounded-2xl font-extrabold bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700'"
                            >
                                <BookOpenText className=" mr-2" /> Learn More
                            </button> */}
                            {
                                fullText ?
                                    <button
                                        // target="blank"
                                        // href={"https://x.com/ApexiumAgency"}
                                        onClick={() => setFullText(!fullText)}
                                        className=" flex items-center justify-center w-fit text-sm mt-4 lg:text-lg text-white p-2 border border-blue-500 rounded-2xl font-extrabold bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700'"
                                    >
                                        <BookOpenText className=" mr-2" /> See Less
                                    </button>
                                    :
                                    <button
                                        // target="blank"
                                        // href={"https://x.com/ApexiumAgency"}
                                        onClick={() => setFullText(!fullText)}
                                        className=" flex items-center justify-center w-fit text-sm mt-4 lg:text-lg text-white p-2 border border-blue-500 rounded-2xl font-extrabold bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700'"
                                    >
                                        <BookOpenText className=" mr-2" /> Learn More
                                    </button>
                            }
                        </div>
                    </motion.h1>
                </AnimatePresence>

                {/* Rolling Ball (overlay effect) */}
                {inView && (
                    <div>
                        <motion.div
                            key={inView ? "rolling" : "reset"} // Forces re-mount on re-entry
                            className=" hidden lg:block w-[50vh] h-[50vh] logo-bg bg-black rounded-full absolute top-0 lg:top-1/4 left-0"
                            initial={{ x: "-100vw", rotate: 0 }}
                            animate={{ x: "100vw", rotate: 720 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            onAnimationComplete={() => setShowText(true)}
                        />
                        <motion.div
                            key={inView ? "rolling-lg" : "reset"} // Forces re-mount on re-entry
                            className=" lg:hidden w-[50vh] h-[50vh] logo-bg bg-black rounded-full absolute top-0 lg:top-1/4 left-0"
                            initial={{ y: "-100vh", rotate: 0 }}
                            animate={{ y: "200vh", rotate: 720 }}
                            transition={{ duration: 3, ease: "easeInOut" }}
                            onAnimationComplete={() => setShowText(true)}
                        />
                    </div>
                )}
            </div>
            {/*  */}
        </>
    );
};

export default RollingBall;
