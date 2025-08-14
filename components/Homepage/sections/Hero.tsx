import { ContainerScroll } from "@/components/ui/ContainerScrollAnimation";
import Image from "next/image";
import React from "react";
import transparentLogo from "@/assets/zach-transparent-logo.png";
import service from "@/assets/UI.png";
import service2 from "@/assets/hugeicons_developer.png";
import service3 from "@/assets/streamline-freehand-color_graphic-tablet-draw-1.png";
import service4 from "@/assets/material-symbols_developer-mode.png";
import service5 from "@/assets/material-symbols_developer-mode-tv.png";
import { Goldman } from "next/font/google";
import { Island_Moments } from "next/font/google";
import laptop from "@/assets/Frame 26.png";
import Link from "next/link";

const islandMoments = Island_Moments({
  weight: "400", // only 400 is available for this font
  subsets: ["latin"],
});

const goldman = Goldman({
  subsets: ["latin"],
  weight: ["400", "700"], // Available weights
  display: "swap",
});

const Hero = () => {
  return (
    <div
      id="home"
      className="z-[3] h-auto   w-[100vw] relative flex flex-col items-center justify-end"
    >
      <div className="relative w-full h-full">
        {/* Top Section (overlapping) */}
        <div
          id="home"
          className="relative z-10 overflow-y-visible  min-h-[100vh] h-[150vh] w-[100vw] flex items-center justify-start background px-[2.5%]"
        >
          <div className=" w-[40%]">
            <h1
              className={`${goldman.className} text-white text-[45px] capitalize mb-4`}
            >
              Build your <span className="text-[#EEAD0E]">dream</span> website
              today
            </h1>
            <h1
              className={`${goldman.className} text-[40px] text-[#000033]`}
            >
              Technologies beyond possibility
            </h1>
            {/* <h1
              className={`${goldman.className} text-whit max-sm:text-[] max-sm: text-[#000033] [45px] capitalize mb-4`}
            >
              for better business
            </h1> */}
          </div>
        </div>

        {/* Bottom Section (pushed up behind the top) */}
        <div
          id="service"
          className="-mt-40  z-0 bg-white pt-0 h-auto  w-full text-xl max-sm:mt-0"
        >
          <h1
            className={`${goldman.className} text-center text-[#000033] text-[45px]`}
          >
            Our <span className=" text-[#EEAD0E]">Service</span>
          </h1>
          <div className=" h-auto max-sm:h-auto w-full bg-transparent flex items-center justify-between px-[2.5%] max-sm:flex-col">
            <div className=" w-[30%] max-sm:w-full h-full flex flex-col items-center justify-between">
              <div className=" w-full flex items-center justify-between mb-4">
                <div
                  className={`${goldman.className} w-[calc(100%-60px)] text-black`}
                >
                  <h1>UI/UX Design</h1>
                  <p className=" text-[16px]">
                    Wireframing, UI design (mobile and website), UX design
                    (mobile and website),
                    Rebranding, Graphic design ,Motion pictures
                  </p>
                </div>

                <div className=" h-[50px] w-[50px] p-2 rounded-full bg-[#EEAD0E] flex items-center justify-center">
                  <Image src={service} alt="" />
                </div>
              </div>
              {/* <div className=" w-full flex items-center justify-between mb-4">
                <div
                  className={`${goldman.className} w-[calc(100%-60px)] text-black`}
                >
                  <h1>Font End</h1>
                  <p className=" text-[16px]">
                    REACT JS, HTML5, CSS, TAILWIND, CRUD, WEB HOSTING etc
                  </p>
                </div>
                <div className=" h-[50px] w-[50px] p-2 rounded-full bg-[#EEAD0E] flex items-center justify-center">
                  <Image src={service2} alt="" />
                </div>
              </div> */}
              <div className=" w-full flex items-center justify-between mb-4">
                <div
                  className={`${goldman.className} w-[calc(100%-60px)] text-black`}
                >
                  <h1>Graphics Designs</h1>
                  <p className=" text-[16px]">
                    Figma, Coral draw, Photoshop Rebranding, Graphic design,
                    Polotno studio, Motion pictures
                  </p>
                </div>
                <div className=" h-[50px] w-[50px] p-2 rounded-full bg-[#EEAD0E] flex items-center justify-center">
                  <Image src={service3} alt="" />
                </div>
              </div>
            </div>

            <div className=" w-[30%] max-sm:w-50% max-sm:mt-5  max-sm:mb-5 h-full flex items-center justify-center ">
              <Image src={transparentLogo} alt="zach tech logo" />
            </div>

            <div className=" w-[30%] max-sm:w-full h-full flex flex-col items-center justify-center">
              <div className=" w-full flex flex-row-reverse items-center justify-between mb-4">
                <div
                  className={`${goldman.className} w-[calc(100%-60px)] text-black`}
                >
                  <h1>Back End</h1>
                  <p className=" text-[16px]">
                    Server maintenance,web hosting,server migration and much more.
                  </p>
                </div>
                <div className=" h-[50px] w-[50px] p-2 rounded-full bg-[#EEAD0E] flex items-center justify-center">
                  <Image src={service2} alt="" />
                </div>
              </div>
              <div className=" w-full flex flex-row-reverse items-center justify-between mb-4">
                <div
                  className={`${goldman.className} w-[calc(100%-60px)] text-black`}
                >
                  <h1>Mobile Development</h1>
                  <p className=" text-[16px]">
                    maintenance,optimization, development and many more world class services
                  </p>
                </div>
                <div className=" h-[50px] w-[50px] p-2 rounded-full bg-[#EEAD0E] flex items-center justify-center">
                  <Image src={service4} alt="" />
                </div>
              </div>

              <div className=" w-full flex flex-row-reverse items-center justify-between mb-4">
                <div
                  className={`${goldman.className} w-[calc(100%-60px)] text-black`}
                >
                  <h1>Web Development</h1>
                  <p className=" text-[16px] ">
                    Blog website, serach engine optimization (SEO), corpoare website, Real estate website, SME website, eCommerce website, dating website, website upgrading and scaling, host migration.
                  </p>
                </div>
                <div className=" h-[50px] w-[50px] p-2 rounded-full bg-[#EEAD0E] flex items-center justify-center">
                  <Image src={service5} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="relative">
        {/* Top Section (overlapping) */}
        <div
          id="whyus"
          className="relative max-sm:h-[150vh] max-sm:flex-col z-10 overflow-y-visible flex items-center justify-center px-[2.5%]"
        >
          {/* <div className=' w-[40%]'>
                        <h1 className={`${goldman.className} text-white text-[45px] capitalize mb-4`}>Build your <span className='text-[#EEAD0E]'>dream</span> website today</h1>
                        <h1 className={`${islandMoments.className} text-[40px] text-[#000033]`}>Technologies beyond possibility</h1>
                        <h1 className={`${goldman.className} text-white text-[45px] capitalize mb-4`}>for better business</h1>
                    </div> */}
          <Image
            src={laptop}
            alt=""
            className=" hidden lg:flex w-full -translate-x-2/5 absolute"
          />

          <div className=" z-[10] relative h-full w-full flex flex-col items-center justify-center bg-transparent">
            <div className=" h-[auto]">
              <h1
                className={`${goldman.className} text-center text-[#000033] text-[45px] mb-4`}
              >
                Why Us?
              </h1>
              <p
                className={`${goldman.className} text-center text-[#000033] text-[20px] w-[75%] mx-auto`}
              >
                Welcome to ZachTech Industries, where we convert your business
                ideas into reality, using modern technology tools and
                techniques. We don't just build technology we build
                possibilities.
              </p>
            </div>

            <div className=" h-[90vh] w-full flex items-center justify-end px-[2.5%] max-sm:h-[auto] max-sm:flex-col">
              <div className=" w-[35%] flex flex-col items-start justify-center max-sm:w-full">
                <h1
                  className={`${goldman.className} text-[#000033] text-center text-[35px] mb-4 max-sm:text-[28px] max-sm:text-[#000033] max-sm:mt-10`}
                >
                  Zachtech industries
                </h1>
                <p
                  className={`${goldman.className} text-[#000033] text-[16px] w-[75%] mb-4 max-sm:w-full`}
                >
                  is a tech startup, redefining how businesses and individuals
                  harness the power of technology to achieve meaningful
                  progress. As a forward-thinking technology firm, we specialize
                  in delivering innovative, scalable solutions that empower
                  startups, SMES, and large enterprises to thrive in today's
                  digital world.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="service"
          className="-mt-[170px] z-0 bg-white pt-0 h-[130vh] w-full text-xl background-vid"
        ></div>
      </div>
    </div>
  );
};

export default Hero;
