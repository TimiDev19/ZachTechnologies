import React from "react";
import { Goldman } from "next/font/google";
import Image from "next/image";
import techstack from "@/helpers/helpers";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import BusinessIcon from "@mui/icons-material/Business";
import Link from "next/link";

const goldman = Goldman({
  subsets: ["latin"],
  weight: ["400", "700"], // Available weights
  display: "swap",
});

const Contact = () => {
  return (
    <div id="contact" className={`${goldman.className} pt-[100px]`}>
      <h1
        className={`${goldman.className} text-center text-[#000033] text-[45px] mb-4`}
      >
        Contact <span className=" text-[#EEAD0E]">Us</span>
      </h1>
      <div className=" h-[50vh] max-sm:h-auto w-screen mb-[50px] ">
        <form
          action=""
          className=" flex items-center justify-between w-[90%] mx-auto h-full max-sm:flex-col"
        >
          <div className=" h-full w-[45%] flex-col items-center justify-between max-sm:w-full ">
            <input
              type="text"
              placeholder="Name"
              className=" w-full border-b-2 border-b-[#eead0e] text-black mb-[90px] h-[50px]"
            />
            <input
              type="email"
              placeholder="Email"
              className=" w-full border-b-2 border-b-[#eead0e] text-black mb-[90px] h-[50px]"
            />
            <input
              type="text"
              placeholder="Phone"
              className=" w-full border-b-2 border-b-[#eead0e] text-black mb-[90px] h-[50px]"
            />
            <Link
              href={"/#contact"}
              className={`${goldman.className} text-white text-2xl px-[10px] py-[6px] rounded-md bg-[#EEAD0E]`}
            >
              Contact Us
            </Link>
          </div>
          <div className=" h-full w-[45%] flex-col items-center  max-sm:w-full justify-between ">
            <textarea
              className="w-full h-full resize-none p-2 rounded border border-[#eead0e] focus:outline-none focus:shadow-[#eead0e] focus:shadow-sm"
              placeholder="Leave message..."
            />
          </div>
        </form>
      </div>

      <div className=" h-[90vh] max-sm:h-auto w-screen mb-[50px] flex max-sm:flex-col items-center justify-between px-[2.5%]">
        <div className=" w-[45%] max-sm:w-full  h-full">
          <h1 className=" text-6xl max-sm:text-3xl mb-5">
            Make sure to keep in touch with us!
          </h1>
          <p className=" mb-[20px]">
            Every project we take on is approached with creativity, technical
            excellence, and a clear focus on delivering real-world impact.
            Whether you're looking to launch a new product, streamline
            operations, or gain deeper insights from your data, we're here to
            make it happen.
          </p>
          <div className=" w-full border-b border-b-black">
            <div className=" flex items-center justify-between max-sm:justify-start  text-3xl mb-[20px]">
              <CallIcon className="text-[#eead0e]" />
              <h1 className="max-sm:text-xl">( +234 ) 9076827649</h1>
            </div>
            <div className=" max-sm:justify-start flex items-center justify-between text-3xl mb-[20px]">
              <MailIcon className="text-[#eead0e]" />
              <h1 className="max-sm:text-xl" >Zachtech56@gmail.com</h1>
            </div>
            <div className=" max-sm:justify-start flex items-center justify-between text-3xl mb-[20px]">
              <BusinessIcon className="text-[#eead0e]" />
              <h1 className="max-sm:text-[14px]">123 mile stree opposite, long road.</h1>
            </div>
          </div>

          <div className=" w-full flex items-center justify-between pt-[30px]">
            <ol className=" w-[45%] max-sm:w-full">
              <li className=" mb-[30px]">
                <Link href="/#home" className="relative group ml-[25px]">
                  Home
                  <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>
              </li>
              <li className=" mb-[30px]">
                <Link href="/#service" className="relative group ml-[25px]">
                  Service
                  <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>
              </li>
              <li className=" mb-[30px]">
                <Link href="/#whyus" className="relative group ml-[25px]">
                  Why Us?
                  <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>
              </li>
              <li className=" mb-[30px]">
                <Link href="/#about" className="relative group ml-[25px]">
                  About
                  <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>
              </li>
            </ol>
            <ol className=" w-[45%] max-sm:w-full">
              <li className=" mb-[30px]">
                <Link href="/#projects" className="relative group ml-[25px]">
                  Projects
                  <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>
              </li>
              <li className=" mb-[30px]">
                <Link href="/#team" className="relative group ml-[25px]">
                  Team
                  <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>
              </li>
              <li className=" mb-[30px]">
                <Link href="/#clients" className="relative group ml-[25px]">
                  Clients
                  <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>
              </li>
              <li className=" mb-[30px]">
                <Link
                  href="/#contact"
                  className="relative group ml-[25px] mr-[25px]"
                >
                  Contact
                  <span className="absolute left-blackottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>
              </li>
            </ol>
          </div>
        </div>
        <div className=" w-[50%] h-full contact-bg"></div>
      </div>
    </div>
  );
};

export default Contact;
