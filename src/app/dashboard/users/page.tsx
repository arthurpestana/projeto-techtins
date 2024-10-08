'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import axios from "axios";

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
    const [users, setUsers] = useState<User[]>([])
    const [searchValue, setSearchValue] = useState<string | null>('')

    type UserRole = 'Administrador' | 'Funcionario' | 'Cliente';

    interface User {
        id: number;
        nome: string;
        sobrenome: string;
        funcao: UserRole;
        genero: string;
        endereco: string|null;
        fotoUrl: string|null;
        dataCadastro: Date;
        status: string;
    }

    async function getUsers() {
        try {
          const response = await axios.get('http://localhost:8080/users');
          setUsers(response.data)
          console.log(response.data)
        } 
        catch (err) {
          console.log(err)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="container__main">
            <div className="container__userList">
                <div className="userList__head">
                    <div className="head__search">
                        <Input type="text" placeholder="Pesquisar" Icon={SearchIcon} search onChange={(e) => {setSearchValue(e.target.value)}}/>
                    </div>
                    <div className="head__buttons">
                        <Button text="Adicionar Usuário" type="button" Icon={AddSquareIcon} onClick={() => {
                            router.push('/dashboard/users/cadUser');
                        }}/>
                        {/*<Button text="Filtro" type="button" Icon={FilterIcon} outline/>*/}
                    </div>
                </div>
                <div className="userList__main">
                    <UserItem userName='Usuário' id={"ID Usuário"} userFunc={"Função"} date='Data de Cadastro' userStatus={"Status"} placeholder edit={"Opções"}/>
                    {searchValue?users.filter((item) => (item.nome.toLowerCase()+item.sobrenome.toLowerCase()).includes(searchValue.toLowerCase())).slice(pageValue*5, pageValue*5+5).map((item) => {
                        return (<UserItem key={item.id} id={item.id} Icon={UserIcon} userName={item.nome+" "+item.sobrenome} userFunc={item.funcao} date={item.dataCadastro.toString()} userStatus={item.status} edit/>)
                    }):
                    users.slice(pageValue*5, pageValue*5+5).map((item) => {
                        return (<UserItem key={item.id} id={item.id} Icon={UserIcon} userName={item.nome+" "+item.sobrenome} userFunc={item.funcao} date={item.dataCadastro.toString()} userStatus={item.status} edit/>)
                    })}
                </div>
                <div className="userList__pages">
                    {/*<ChevronIcon width={24} heigth={24} style={{cursor: 'pointer', transform: "rotate(90deg)"}}/>*/}
                    {searchValue?Array.from({ length: Math.ceil(users.filter((item) => (item.nome.toLowerCase()+item.sobrenome.toLowerCase()).includes(searchValue.toLowerCase())).length/5)}, (item, index) =>
                        index==pageValue?(<Button key={index} text={(index+1).toString()} type="button" outline page active onClick={() => {setPageValue(index)}}/>):(<Button key={index} text={(index+1).toString()} type="button" onClick={() => {setPageValue(index)}} outline page/>)    
                    ):Array.from({ length: Math.ceil(users.length/5)}, (item, index) => 
                        index==pageValue?(<Button key={index} text={(index+1).toString()} type="button" outline page active onClick={() => {setPageValue(index)}}/>):(<Button key={index} text={(index+1).toString()} type="button" onClick={() => {setPageValue(index)}} outline page/>)
                    )}
                    {/*<ChevronIcon width={24} heigth={24} style={{cursor: 'pointer', transform: "rotate(-90deg)"}}/>*/}
                </div>
            </div>
        </div>
    )
}