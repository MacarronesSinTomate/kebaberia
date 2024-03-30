'use client'

import { FaHouseUser, FaUsers } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { FaListUl } from "react-icons/fa6";
import { useState } from "react";

const icons = [
    {
        icon: <FaHouseUser size={23} color="white" />,
        route: ''
    },
    {
        icon: <FaListUl size={23} color="white" />,
        route: ''
    },
    {
        icon: <FaUsers size={23} color="white" />,
        route: ''
    },
    {
        icon: <CiShoppingCart size={23} color="white" />,
        route: ''
    }
]

export default function NavBar() {

    const [active, setActive] = useState(0);

    return <div className="fixed">
        <div className="sm:flex h-[50px] mt-10 items-center pl-10">

            {icons.map( ( _x, _indx ) => {
                return <div 
                    className={`w-min p-3 ${ active === _indx ? "bg-[#111111]" : "" } ${ !_indx ? "mr-16 max-sm:mb-16" : "mr-5 max-sm:mb-5" } rounded-full`}
                    onClick={() => {
                        setActive(_indx);
                        // navigate(_x.route);
                    }}
                > 
                    { _x.icon } 
                </div>
            })}

        </div>
    </div>

}