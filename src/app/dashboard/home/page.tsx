'use client'

import React, { ReactElement } from 'react'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import axios from 'axios'

import Card from '@/components/Card/index'
import UserItem from '@/components/UserItem'

import UserIcon from '../../../../public/icons/user-icon.svg'
import UsersIcon from '@/../public/icons/users-icon.svg'
import UserAddIcon from '@/../public/icons/user-add-icon.svg'
import UserDelIcon from '@/../public/icons/user-minus-icon.svg'

import './style.css'

interface UserHistory {
  adminName: string;
  adminEmail: string;
  createdUserName: string;
  createdDate: string;
  actionType: string;
  createdUserEmail: string;
}

interface UserQuantity {
  total: number;
  active: number;
  inactive: number;
  data: Date;
}

interface User {
  id: number;
  name: string;
  role: string;
  createdAt: Date;
  status: string;
}

export default function Home() {
  const [usersHistory, setUsersHistory] = useState<UserHistory | []>([])
  const [quantityUsers, setQuantityUsers] = useState<UserQuantity | null>(null)

  async function getHistoryUsers() {
    try {
      const response = await axios.get('http://localhost:8080/users/history');
      setUsersHistory(response.data)
    } 
    catch (err) {
      console.log(err)
    }
  }

  async function getAllUsers() {
    try {
      const response = await axios.get('http://localhost:8080/users');
      const currentDate = new Date();
      const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, "0")}/${currentDate.getFullYear()}`;

      const quantUsers = {
        total: await response.data.length,
        active: await response.data.filter((user: User) => user.status == "Ativo").length,
        inactive: await response.data.filter((user: User) => user.status == "Inativo").length,
        data: formattedDate
      }
      setQuantityUsers(quantUsers)
    } 
    catch (err) {
      console.log(err)
    }
  }
  
  

  useEffect(() => {
    getHistoryUsers()
    getAllUsers()
  }, [])


  return(
    <div className='container__main'>
      <div className='main__header'>
        <div className='header__info'>
          <h1>Gerenciamento de Usuários</h1>
          <p>O Sistema de Gerenciamento de Usuários da SneakerShop é uma plataforma simples e intuitiva desenvolvida para otimizar o controle e a administração de administradores, clientes e funcionários da loja. Com ele, a SneakerShop pode gerenciar todas as interações dos usuários em um único lugar, proporcionando uma visão clara do comportamento dos clientes e facilitando a operação de gestão interna.</p>
        </div>
        <div className='header__image'>
          <Image src="/images/geometric-models.png" alt='' layout='fill'/>
        </div>
      </div>
      <div className='main__dashboard'>
        <Card Icon={UsersIcon} userIcon title={"Total de Usuários"} value={quantityUsers?.total} date={quantityUsers?.data.toString()}/>
        <Card Icon={UserAddIcon} title={"Usuários Ativos"} value={quantityUsers?.active} date={quantityUsers?.data.toString()}/>
        <Card Icon={UserDelIcon} title={"Usuários Inativos"} value={quantityUsers?.inactive} date={quantityUsers?.data.toString()}/>
      </div>
      <div className='main__recent-activities'>
        <div className='recent__title'>
          <h2>Atividades Recentes</h2>
        </div>
        <div className='recent__content'>
          {console.log(usersHistory)}
          <UserItem adminName='Administrador' userEmail='E-mail do Usuário' userName='Usuário' date='Data' funcHistory="Operação" placeholder/>
          {usersHistory.slice(-5).reverse().map((user: UserHistory, key: number) => {
            return(<UserItem key={key} Icon={UserIcon} adminName={user.adminName} userEmail={user.createdUserEmail} userName={user.createdUserName} date={user.createdDate} funcHistory={user.actionType}/>)
          })}
        </div>
      </div>
    </div>
  )
}