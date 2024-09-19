import React, { act } from "react";
import Image from "next/image";


import './style.css'

interface MenuProps {
    text?: string;
    active: boolean;
    Icon?: React.ElementType;
    href?: string;
}

const MenuItem: React.FC<MenuProps> = ({text, active, Icon, href}) => {
    return (
        <div className={active?"container__item active-item":"container__item"}>
            {Icon&&<span><Icon stroke={active?"#7152F3":"#A2A1A8"}/></span>}
            <a href={href} className={active?'item__text text-active':"item__text"}>{text}</a>
        </div>
    )
}

export default MenuItem