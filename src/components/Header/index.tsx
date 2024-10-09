'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";

import './style.css'

import UserIcon from '@/../public/icons/user-icon.svg'
import ChevronIcon from '@/../public/icons/chevron-icon.svg'
//import BellIcon from '@/../public/icons/bell-icon.svg'
import LogoutIcon from '@/../public/icons/arrow-right-start-on-rectangle.svg'

import Button from "../Button";

const Header = () => {
    interface TokenPayload {
        sub: string; // O nome de usuário, geralmente armazenado no campo 'sub'
        username: string; // O e-mail do administrador
        exp: number; // Data de expiração do token (opcional)
        groups: string[]; // Grupos aos quais o usuário pertence (opcional)
    }

    const [userAdmin, setUserAdmin] = useState<TokenPayload | null>(null)
    const [isOpen, setIsOpen] = useState(false);

    function getAdminDetailsFromToken(): TokenPayload | null | undefined {
        try {
          const token = localStorage.getItem('token');
      
          if (!token) {
            throw new Error('Token não encontrado.');
          }
    
          const tokenPayload = JSON.parse(atob(token.split('.')[1])) as TokenPayload;
          console.log(tokenPayload)
          const { sub: email, username, groups } = tokenPayload;
      
          console.log(`Username: ${username}, Email: ${email}`, groups);
      
          setUserAdmin(tokenPayload);
        } 
        catch (err) {
          console.error('Erro ao decodificar o token:', err);
          return null;
        }
    }

    function handleDropdown() {
        setIsOpen(!isOpen)
    }

    function handleLogout() {
        localStorage.removeItem('token')
        window.location.href = '/auth/login'
    }

    useEffect(()=> {
        getAdminDetailsFromToken()
    }, [])

    return(
        <div className="container__header">
            <div className="header__logo">
                <Image src={'/images/logo.png'} alt='Logo' layout="intrinsic" width={32} height={32}/>
                <h2>SneakerShop</h2>
                {/*<ChevronIcon width={20} height={20} stroke="#16151C" style={{cursor: 'pointer'}}/>*/}
            </div>
            <div className="header__user">
                {/*<div className="user__bell">
                    <BellIcon width={20} height={20} stroke="#16151C" style={{cursor: 'pointer'}}/>
                </div>*/}
                <div className="user__info">
                    <div className="user__icon">
                        <UserIcon width={20} height={20} stroke="#16151C"/>
                    </div>
                    <div className="user__name">
                        <span className="name__title">{userAdmin?.username}</span>
                        <span className="name__func">{userAdmin?.groups[0]}</span>
                    </div>
                    <button onClick={handleDropdown} className={`dropdown_button ${isOpen ? 'button--active' : ''}`}>
                        <ChevronIcon width={20} height={20} stroke="#16151C"/>
                    </button>
                    <div className={`dropdown_options ${isOpen ? 'dropdown--active' : ''}`}>
                        <Button Icon={LogoutIcon} text="Logout" type="button" outline onClick={handleLogout}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header