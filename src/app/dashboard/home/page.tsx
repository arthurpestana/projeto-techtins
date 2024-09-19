'use client'

import React from 'react'
import Image from 'next/image'

import Card from '@/components/Card/index'
import UserItem from '@/components/UserItem'

import UserIcon from '../../../../public/icons/user-icon.svg'
import UsersIcon from '@/../public/icons/users-icon.svg'
import UserAddIcon from '@/../public/icons/user-add-icon.svg'
import UserDelIcon from '@/../public/icons/user-minus-icon.svg'

import './style.css'

export default function Home() {
  return(
    <div className='container__main'>
      <div className='main__header'>
        <div className='header__info'>
          <h1>Sistema de Gerenciamento de Usuários</h1>
          <p>O Sistema de Gerenciamento de Usuários da SneakerShop é uma plataforma simples e intuitiva desenvolvida para otimizar o controle e a administração de administradores, clientes e funcionários da loja. Com ele, a SneakerShop pode gerenciar todas as interações dos usuários em um único lugar, proporcionando uma visão clara do comportamento dos clientes e facilitando a operação de gestão interna.</p>
        </div>
        <div className='header__image'>
          <Image src="/images/geometric-models.png" alt='' layout='intrinsic' width={600} height={600}/>
        </div>
      </div>
      <div className='main__dashboard'>
        <Card Icon={UsersIcon} userIcon title={"Total de Usuários"} value={50000} date={"10 de Setembro de 2024"}/>
        <Card Icon={UserAddIcon} title={"Usuários Ativos"} value={48587} date={"10 de Setembro de 2024"}/>
        <Card Icon={UserDelIcon} title={"Usuários Inativos"} value={1413} date={"10 de Setembro de 2024"}/>
      </div>
      <div className='main__recent-activities'>
        <div className='recent__title'>
          <h2>Atividades Recentes</h2>
        </div>
        <div className='recent__content'>
          <UserItem adminName='Administrador' adminMail='E-mail Administrador' userName='Usuário Cadastrado' date='Data de Cadastro' placeholder={true}/>
          <UserItem Icon={UserIcon} adminName='Soares Souza' adminMail='soaressouza@gmail.com' userName='João Barreira' date='11/09/2024' placeholder={false}/>
          <UserItem Icon={UserIcon} adminName='Soares Souza' adminMail='soaressouza@gmail.com' userName='João Barreira' date='11/09/2024' placeholder={false}/>
          <UserItem Icon={UserIcon} adminName='Soares Souza' adminMail='soaressouza@gmail.com' userName='João Barreira' date='11/09/2024' placeholder={false}/>
          <UserItem Icon={UserIcon} adminName='Soares Souza' adminMail='soaressouza@gmail.com' userName='João Barreira' date='11/09/2024' placeholder={false}/>
          <UserItem Icon={UserIcon} adminName='Soares Souza' adminMail='soaressouza@gmail.com' userName='João Barreira' date='11/09/2024' placeholder={false}/>
        </div>
      </div>
    </div>
  )
}