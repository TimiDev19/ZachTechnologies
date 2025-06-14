
import { HoverEffect } from '@/components/ui/HoverEffect';
import Image from 'next/image';
import React from 'react'
import Logo from "@/assets/zachtechindustries_logo.jpeg"

const Services = () => {
    return (
        <div id="services" className=' w-full flex flex-col items-center justify-center bg-blue-900'>
            <div className=' w-[95%] mx-auto flex items-center justify-center mb-[20px]'>
                <h1 className=' z-[3] flex items-center justify-center uppercase font-bold text-white text-lg lg:text-4xl p-2 bg-gradient-to-tr from-blue-700 to-blue-300 w-full mx-auto lg:mx-0 lg:w-fit rounded-xl box-shadow'>
                    <Image
                        src={Logo}
                        alt="Zach Technologies Industries Logo"
                        className=' w-[50px] h-[50px] rounded-full mr-3'
                    />
                    Our Services
                </h1>
            </div>
            <HoverEffect items={services} />
        </div>
    )
}

export default Services

const services = [
    {
        title: "Web Development",
        description:
            "We offer professional web development services designed to bring your ideas to life. Whether you need a sleek business website, a dynamic web app, or a powerful e-commerce platform, we build responsive, fast, and secure solutions tailored to your goals. From concept to launch, we focus on user experience, modern design, and scalable performance to help you succeed online.",
        link: "/#services",
    },
    {
        title: "Mobile Development",
        description:
            "We provide end-to-end mobile development services to turn your vision into high-performing mobile apps. Whether it's iOS, Android, or cross-platform solutions, we build intuitive, responsive, and scalable applications that deliver seamless user experiences. From initial design to final deployment, we ensure your app meets modern standards, performs smoothly, and stands out in today’s competitive mobile landscape.",
        link: "/#servicesss",
    },
    {
        title: "Ui/Ux Design",
        description:
            "We craft intuitive and engaging UI/UX designs that put users first. Our design process focuses on understanding your audience, simplifying user journeys, and creating visually appealing interfaces that enhance usability. From wireframes to final prototypes, we ensure every detail aligns with your brand and goals—resulting in digital experiences that are both functional and memorable.",
        link: "/#servicess",
    },
    {
        title: "Graphics Design",
        description:
            "We offer creative and impactful graphic design services to help your brand stand out. From logos, marketing materials, and social media visuals to complete brand identities, we deliver designs that communicate your message clearly and effectively. With a focus on aesthetics, consistency, and purpose, we turn ideas into visuals that leave a lasting impression.",
        link: "/#servicessss",
    },
    {
        title: "Tech Consultancy",
        description:
            "We provide expert tech consultancy to help you make informed, strategic technology decisions. Whether you're planning a new project, optimizing existing systems, or navigating digital transformation, we offer clear guidance tailored to your business goals. With a focus on innovation, scalability, and efficiency, we help you choose the right tools, architecture, and approach to move forward with confidence.",
        link: "/#servicesssss",
    },
    {
        title: "Tech Training",
        description:
            "We offer hands-on tech training designed to empower teams and individuals with the skills needed to thrive in today’s digital world. From coding and software tools to best practices in development, design, and project management, our training sessions are practical, up-to-date, and customizable. Whether you're upskilling your workforce or starting from scratch, we help you build real-world expertise and confidence in technology.",
        link: "/#servicessssss",
    },
];