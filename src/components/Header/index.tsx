import React from "react";
import Image from "next/image";

import './style.css'

const Header = () => {
    return(
        <div className="container__header">
            <div className="header__logo">
                <Image src={'/images/logo.png'} alt='Logo' layout="intrinsic" width={32} height={32}/>
                <h2>SneakerShop</h2>
                <Image src={"/icons/chevron-icon.svg"} alt="User Icon" layout="intrinsic" width={20} height={20} color="#16151C" style={{cursor: 'pointer'}}/>
            </div>
            <div className="header__user">
                <div className="user__bell">
                    <Image src={'/icons/bell-icon.svg'} alt='Bell-Icon' layout="intrinsic" width={20} height={20} style={{cursor: 'pointer'}}/>
                </div>
                <div className="user__info">
                    <div className="user__icon">
                        <Image src={"/icons/user-icon.svg"} alt="User Icon" layout="intrinsic" width={20} height={20}/>
                    </div>
                    <div className="user__name">
                        <span className="name__title">Ricardo Lopes</span>
                        <span className="name__func">Admin</span>
                    </div>
                    <Image src={"/icons/chevron-icon.svg"} alt="Chevron Icon" layout="intrinsic" width={20} height={20} style={{cursor: 'pointer'}}/>
                </div>
            </div>
        </div>
    )
}

export default Header