import partner1 from "@/public/images/img1.png"
import partner2 from "@/public/images/img2.png"
import partner3 from "@/public/images/img3.png"
import partner4 from "@/public/images/img4.png"
import ImageSlider from '@/components/ImageSlider'
import InfiniteCarousel from '@/components/InfiniteCarousel'
import { ArrowBigRightDash, LinkIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Logo from "@/assets/zachtechindustries_logo.jpeg"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Nunito_Sans, Open_Sans, Tektur } from 'next/font/google';
import Link from 'next/link'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import amugo from "@/assets/amugo.jpg"
import desina from "@/assets/desina.jpg"

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});


const Partnerships = () => {
    return (
        <div id="partnerships" className=' bg-blue-900 w-full min-h-[100vh] pt-[90px] flex flex-col items-center justify-center'>
            <div className=' w-[95%] mx-auto flex items-center justify-center mb-[20px]'>
                <h1 className=' z-[3] flex items-center justify-center uppercase font-bold text-white text-lg lg:text-4xl p-2 bg-gradient-to-tr from-blue-700 to-blue-300 w-full mx-auto lg:mx-0 lg:w-fit rounded-xl box-shadow'>
                    <Image
                        src={Logo}
                        alt="Zach Technologies Industries Logo"
                        className=' w-[50px] h-[50px] rounded-full mr-3'
                    />
                    Our Partners
                </h1>
            </div>

            <div className=" w-[80%] flex flex-col lg:flex-row items-center justify-between">
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] text-blue-900 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold"
                        >
                            AMUFU AGRO PROCESSING INDUSTRY
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className=" text-sm max-w-sm mt-2"
                        >
                            Dedicated and detail-oriented professional with hands-on experience in food production and processing services. Skilled in managing quality control, inventory handling, and process optimization to ensure safe, efficient, and high-standard food operations. Passionate about maintaining food safety compliance and streamlining workflows across production stages.
                        </CardItem>
                        <CardItem
                            translateZ="100"
                            rotateX={20}
                            rotateZ={-10}
                            className="w-full mt-4"
                        >
                            <Image
                                src={amugo}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-blue-900"
                                alt="thumbnail"
                            />
                        </CardItem>
                    </CardBody>
                </CardContainer>

                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] text-blue-900 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold "
                        >
                            DESINA CAPITAL
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className=" text-sm max-w-sm mt-2"
                        >
                            Desina Capital provides Forex trading and portfolio management services tailored to investors and high-net-worth individuals. Backed by a strong track record and a transparent process, we focus on delivering consistent, risk-managed growth.
                        </CardItem>
                        <CardItem
                            translateZ="100"
                            rotateX={20}
                            rotateZ={-10}
                            className="w-full mt-4"
                        >
                            <Image
                                src={desina}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-blue-900"
                                alt="thumbnail"
                            />
                        </CardItem>
                    </CardBody>
                </CardContainer>
            </div>
        </div>
    )
}

export default Partnerships