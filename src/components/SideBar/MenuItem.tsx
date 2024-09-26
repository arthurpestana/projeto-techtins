'use client'

import React from "react";
import Link from "next/link";

import './style.css'

interface MenuProps {
    text?: string;
    active?: boolean;
    Icon?: React.ElementType;
    href: string;
    onClick?: (url: string) => void
}

const MenuItem: React.FC<MenuProps> = ({text, active, Icon, href, onClick}) => {
    return (
        <Link onClick={() => {if(onClick) {onClick(href)}}} href={href} className={active?"container__item item--active":"container__item"}>
            {Icon&&<Icon stroke={active?"#7152F3":"#A2A1A8"} width="24" height="24"/>}
            <span className={active?'item__text text--active':"item__text"}>{text}</span>
        </Link>
    )
}

export default MenuItem