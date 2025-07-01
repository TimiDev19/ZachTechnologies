import React from 'react'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from 'next/link';
import Logo from "@/assets/zachtechindustries_logo.jpeg"
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import techstack from '@/helpers/helpers'
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const Projects = () => {
    const ecommerce_projects = techstack.projects.filter((project) => {
        return project.category === "ecommerce"
    })
    const management_projects = techstack.projects.filter((project) => {
        return project.category === "management"
    })
    const portfolio_projects = techstack.projects.filter((project) => {
        return project.category === "portfolio"
    })
    return (
        <div id="projects" className=' bg-white w-full min-h-[100vh] pt-[90px] flex flex-col items-center justify-center'>
            <div className=' w-[95%] mx-auto flex items-center justify-center mb-[20px]'>
                <h1 className=' z-[3] flex items-center justify-center uppercase font-bold text-white text-lg lg:text-4xl p-2 bg-gradient-to-tr from-blue-700 to-blue-300 w-full mx-auto lg:mx-0 lg:w-fit rounded-xl box-shadow'>
                    <Image
                        src={Logo}
                        alt="Zach Technologies Industries Logo"
                        className=' w-[50px] h-[50px] rounded-full mr-3'
                    />
                    Our Projects
                </h1>
            </div>
            <div id='ecommerce' className=' mb-[40px]'>
                <h1 className=' font-bold text-5xl mb-6'>eCommerce</h1>
                <div className=" w-full">
                    {
                        ecommerce_projects.map((project, index) => (
                            <div key={index} className=" border-2 border-blue-900 w-[95%] mx-auto mb-4 duration-500 flex flex-col lg:flex-row items-center justify-center cursor-pointer">
                                <Image
                                    src={project.image}
                                    alt=""
                                    className=' h-auto w-full lg:w-[50%]'
                                />
                                <div className=' w-full lg:w-[50%] p-4'>
                                    <h1 className=" font-bold text-xl capitalize"> {project.title}</h1>
                                    <p className=" font-light">{project.description}</p>
                                    {/* <h1 className=" font-bold mt-4 italic"> {project.tech}</h1> */}
                                    <div className=" w-full flex items-center justify-center mt-5">
                                        <Link target="blank" href={project.liveLink} className=" mx-3 px-6 py-2 rounded-md hover:bg-blue-900 border-blue-900 border-2 text-blue-900 hover:text-[#fff] hover:border-2 hover:border-blue-900 bg-transparent duration-500 font-semibold flex items-center justify-center"><OpenInNewOutlinedIcon className="mr-3" /> Live Site</Link>
                                        {/* <Link target="blank" href={project.github} className=" mx-3 px-6 py-2 rounded-md hover:bg-blue-900 border-blue-900 border-2 text-blue-900 hover:text-[#fff] hover:border-2 hover:border-blue-900 bg-transparent duration-500 font-semibold flex items-center justify-center"><GitHubIcon className="mr-3" /> GitHub</Link> */}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div id='management' className=' mb-[40px]'>
                <h1 className=' font-bold text-5xl mb-6'>Management Systems</h1>
                <div className=" w-full">
                    {
                        management_projects.map((project, index) => (
                            <div key={index} className=" border-2 border-blue-900 w-[95%] mx-auto mb-4 duration-500 flex flex-col lg:flex-row items-center justify-center cursor-pointer">
                                <Image
                                    src={project.image}
                                    alt=""
                                    className=' h-auto w-full lg:w-[50%]'
                                />
                                <div className=' w-full lg:w-[50%] p-4'>
                                    <h1 className=" font-bold text-xl capitalize"> {project.title}</h1>
                                    <p className=" font-light">{project.description}</p>
                                    {/* <h1 className=" font-bold mt-4 italic"> {project.tech}</h1> */}
                                    <div className=" w-full flex items-center justify-center mt-5">
                                        <Link target="blank" href={project.liveLink} className=" mx-3 px-6 py-2 rounded-md hover:bg-blue-900 border-blue-900 border-2 text-blue-900 hover:text-[#fff] hover:border-2 hover:border-blue-900 bg-transparent duration-500 font-semibold flex items-center justify-center"><OpenInNewOutlinedIcon className="mr-3" /> Live Site</Link>
                                        {/* <Link target="blank" href={project.github} className=" mx-3 px-6 py-2 rounded-md hover:bg-blue-900 border-blue-900 border-2 text-blue-900 hover:text-[#fff] hover:border-2 hover:border-blue-900 bg-transparent duration-500 font-semibold flex items-center justify-center"><GitHubIcon className="mr-3" /> GitHub</Link> */}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div id='portfolio' className=' mb-[40px]'>
                <h1 className=' font-bold text-5xl mb-6'>Company Portfolio</h1>
                <div className=" w-full">
                    {
                        portfolio_projects.map((project, index) => (
                            <div key={index} className=" border-2 border-blue-900 w-[95%] mx-auto mb-4 duration-500 flex flex-col lg:flex-row items-center justify-center cursor-pointer">
                                <Image
                                    src={project.image}
                                    alt=""
                                    className=' h-auto w-full lg:w-[50%]'
                                />
                                <div className=' w-full lg:w-[50%] p-4'>
                                    <h1 className=" font-bold text-xl capitalize"> {project.title}</h1>
                                    <p className=" font-light">{project.description}</p>
                                    {/* <h1 className=" font-bold mt-4 italic"> {project.tech}</h1> */}
                                    <div className=" w-full flex items-center justify-center mt-5">
                                        <Link target="blank" href={project.liveLink} className=" mx-3 px-6 py-2 rounded-md hover:bg-blue-900 border-blue-900 border-2 text-blue-900 hover:text-[#fff] hover:border-2 hover:border-blue-900 bg-transparent duration-500 font-semibold flex items-center justify-center"><OpenInNewOutlinedIcon className="mr-3" /> Live Site</Link>
                                        {/* <Link target="blank" href={project.github} className=" mx-3 px-6 py-2 rounded-md hover:bg-blue-900 border-blue-900 border-2 text-blue-900 hover:text-[#fff] hover:border-2 hover:border-blue-900 bg-transparent duration-500 font-semibold flex items-center justify-center"><GitHubIcon className="mr-3" /> GitHub</Link> */}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects