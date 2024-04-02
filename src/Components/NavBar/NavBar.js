'use client'

import { FaHouseUser, FaUsers } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useState } from "react";
import { VscPreview } from "react-icons/vsc";
import Link from "next/link";

const icons = [
    {
        icon: <FaHouseUser size={23} color="white" />,
        route: '/'
    },
    {
        icon: <MdOutlineRestaurantMenu size={23} color="white" />,
        route: '/menu'
    },
    {
        icon: <FaUsers size={23} color="white" />,
        route: '/aboutUs'
    },
    {
        icon: <VscPreview size={23} color="white" />,
        route: '/reviews'
    }
]

export default function NavBar() {

    const [active, setActive] = useState(0);

    return <div className="fixed z-10 left-0 top-0 sm:flex h-[50px] mt-10 items-center pl-10">

        {icons.map((_x, _indx) => {
            const color = active === _indx ? "bg-[#111111]" : "";
            const margin = !_indx ? "mr-16 max-sm:mb-16" : "mr-5 max-sm:mb-5";
            return <Link 
                key={_indx} 
                className={`w-min p-3 ${color} ${margin} rounded-full cursor-pointer`} 
                href={_x.route}
                onClick={() => setActive(_indx)}
            > 
                {_x.icon}
            </Link>
        })}

    </div>

}