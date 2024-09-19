import React from "react";
import Image from "next/image";

import './style.css'

import UserIcon from '@/../public/icons/user-icon.svg'
import ChevronIcon from '@/../public/icons/chevron-icon.svg'
import BellIcon from '@/../public/icons/bell-icon.svg'

const Header = () => {
    return(
        <div className="container__header">
            <div className="header__logo">
                <Image src={'/images/logo.png'} alt='Logo' layout="intrinsic" width={32} height={32}/>
                <h2>SneakerShop</h2>
                <ChevronIcon width={20} height={20} stroke="#16151C" style={{cursor: 'pointer'}}/>
            </div>
            <div className="header__user">
                <div className="user__bell">
                    <BellIcon width={20} height={20} stroke="#16151C" style={{cursor: 'pointer'}}/>
                </div>
                <div className="user__info">
                    <div className="user__icon">
                        <UserIcon width={20} height={20} stroke="#16151C" style={{cursor: 'pointer'}}/>
                    </div>
                    <div className="user__name">
                        <span className="name__title">Ricardo Lopes</span>
                        <span className="name__func">Admin</span>
                    </div>
                    <ChevronIcon width={20} height={20} stroke="#16151C" style={{cursor: 'pointer'}}/>
                </div>
            </div>
        </div>
    )
}

export default Header