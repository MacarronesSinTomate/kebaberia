'use client'

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {

    return <div className="flex sm:pl-10 sm:pr-10 max-sm:flex-col mt-20 w-full h-[100px] max-sm:h-[120px] justify-between items-center border-t-[1px] border-[#272727]">
        <div className="flex justify-center w-1/6 text-white"> LUMIDEV </div>
        <div className="flex justify-center w-4/6 text-current">
            <div className="p-3 rounded-full bg-[#111111] cursor-pointer"> <FaFacebookF color="white"/> </div>
            <div className="p-3 mr-3 ml-3 rounded-full bg-[#111111] cursor-pointer"> <FaInstagram color="white"/> </div>
            <div className="p-3 rounded-full bg-[#111111] cursor-pointer"> <FaXTwitter color="white"/> </div>
        </div>
        <div className="flex justify-center w-1/6 text-white max-sm:mb-3">
            <div className="mr-4 whitespace-nowrap "> ABOUT US </div>
            <div className="mr-4"> TERMS </div>
        </div>
    </div>

}