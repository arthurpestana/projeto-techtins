'use client';

import React, { useState, useEffect} from "react";

import './style.css'

import MenuItem from './MenuItem'
import UserIcon from '@/../public/icons/users-icon.svg'
import SettingIcon from '../../../public/icons/setting-icon.svg'
import HomeIcon from '../../../public/icons/home-icon.svg'


const SideBar = () => {
    const [activePath, setActivePath] = useState<string>("");

    function handleOnClick(url: string) {
        setActivePath(url);
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            handleOnClick(window.location.pathname);
        }
    }, []);

    return (
        <div className="container__sidebar">
            <MenuItem Icon={HomeIcon} text={"Home"} active={activePath.startsWith("/dashboard/home")} onClick={handleOnClick} href={"/dashboard/home"}/>
            <MenuItem Icon={UserIcon} text={"Usuários"} active={activePath.startsWith("/dashboard/users")} onClick={handleOnClick} href={"/dashboard/users"}/>
            {/*<MenuItem Icon={SettingIcon} text={"Configurações"} active={activePath.startsWith("/dashboard/settings")} onClick={handleOnClick} href={"/dashboard/settings"}/>*/}
        </div>
    )
}

export default SideBar