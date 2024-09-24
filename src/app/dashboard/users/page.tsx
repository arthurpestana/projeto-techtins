'use client'

import React, { useState } from "react";
import { useRouter } from 'next/navigation'

import './style.css'

import Button from "@/components/Button/index";
import Input from '@/components/Input/index';
import UserItem from "@/components/UserItem";

import FilterIcon from '@/../public/icons/filter-icon.svg'
import AddSquareIcon from '@/../public/icons/add-square-icon.svg'
import SearchIcon from "@/../public/icons/search-icon.svg"
import UserIcon from '@/../public/icons/user-icon.svg'
import ChevronIcon from "@/../public/icons/chevron-icon.svg"

export default function UserPage() {
    const router = useRouter();

    const [pageValue, setPageValue] = useState(0)

    type UserRole = 'administrador' | 'funcionario' | 'cliente';

    interface User {
    id: number;
    nome: string;
    funcao: UserRole;
    dataCadastro: Date;
    status: boolean;
    }

    const usuarios: User[] = [
    {
        id: 1,
        nome: 'João Silva',
        funcao: 'administrador',
        dataCadastro: new Date('2023-01-15'),
        status: true,
    },
    {
        id: 2,
        nome: 'Maria Oliveira',
        funcao: 'funcionario',
        dataCadastro: new Date('2022-11-22'),
        status: true,
    },
    {
        id: 3,
        nome: 'Carlos Pereira',
        funcao: 'cliente',
        dataCadastro: new Date('2023-05-30'),
        status: false,
    },
    {
        id: 4,
        nome: 'Ana Souza',
        funcao: 'funcionario',
        dataCadastro: new Date('2022-12-10'),
        status: true,
    },
    {
        id: 5,
        nome: 'Paulo Lima',
        funcao: 'cliente',
        dataCadastro: new Date('2023-07-05'),
        status: true,
    },
    {
        id: 6,
        nome: 'Serginho Escada',
        funcao: 'cliente',
        dataCadastro: new Date('2023-02-04'),
        status: false,
    },
    ];


    return (
        <div className="container__main">
            <div className="container__userList">
                <div className="userList__head">
                    <div className="head__search">
                        <Input type="text" placeholder="Pesquisar" value="" Icon={SearchIcon} search/>
                    </div>
                    <div className="head__buttons">
                        <Button text="Adicionar Usuário" type="button" Icon={AddSquareIcon} onClick={() => {
                            router.push('/dashboard/users/cadUser');
                        }}/>
                        <Button text="Filtro" type="button" Icon={FilterIcon} outline/>
                    </div>
                </div>
                <div className="userList__main">
                    <UserItem userName='Usuário' id={"ID Usuário"} userFunc={"Função"} date='Data de Cadastro' userStatus={"Status"} placeholder edit={"Opções"}/>
                    {usuarios.slice(pageValue*5, pageValue*5+5).map((item) => {
                        return (<UserItem key={item.id} id={item.id} Icon={UserIcon} userName={item.nome} userFunc={item.funcao} date={item.dataCadastro.toLocaleDateString()} userStatus={item.status} edit/>)
                    })}
                </div>
                <div className="userList__pages">
                    <ChevronIcon width={24} heigth={24} style={{cursor: 'pointer', transform: "rotate(90deg)"}}/>
                    {Array.from({ length: Math.ceil(usuarios.length/5)}, (_, index) => 
                        index==pageValue?(<Button key={index} text={(index+1).toString()} type="button" outline page active/>):(<Button key={index} text={(index+1).toString()} type="button" outline page/>)
                    )}
                    <ChevronIcon width={24} heigth={24} style={{cursor: 'pointer', transform: "rotate(-90deg)"}}/>
                </div>
            </div>
        </div>
    )
}