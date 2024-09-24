import React from "react";

import './style.css'

import MenuItem from './MenuItem'
import UserIcon from '@/../public/icons/users-icon.svg'
import SettingIcon from '../../../public/icons/setting-icon.svg'
import HomeIcon from '../../../public/icons/home-icon.svg'

const SideBar = () => {
    return (
        <div className="container__sidebar">
            <MenuItem Icon={HomeIcon} text={"Home"} active={true} href={"/dashboard/home"}/>
            <MenuItem Icon={UserIcon} text={"Usuários"} active={false} href={"/dashboard/users"}/>
            <MenuItem Icon={SettingIcon} text={"Configurações"} active={false} href={"/dashboard/users"}/>
        </div>
    )
}

export default SideBar