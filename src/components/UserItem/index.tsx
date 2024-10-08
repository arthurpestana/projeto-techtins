import React, { Key, useState } from 'react'
import axios from 'axios';
import './style.css'

import EyeIcon from '@/../public/icons/eye-icon.svg';
import TrashIcon from "@/../public/icons/bin-icon.svg";
import EditIcon from "@/../public/icons/pencil-edit-icon.svg"

import Button from '../Button';
import { useRouter } from 'next/navigation';


interface UserItemProps {
    userName?: string;
    userEmail?: string;
    Icon?: React.ElementType;
    adminName?: string;
    adminMail?: string;
    date?: string;
    placeholder?: boolean;
    key?: string | number | Key
    id?: string | number
    edit?: boolean | string;
    userFunc?: string;
    userStatus?: string | boolean;
    funcHistory?: string;
}

const UserItem: React.FC<UserItemProps> = ({Icon, userName, adminName, date, placeholder, id, edit, userFunc, userStatus, userEmail, funcHistory}) => {

    const router = useRouter();

    const[onViewUser, setOnViewUser] = useState(false)
    const[name, setName] = useState<string | undefined>(userName)
    const[func, setFunc] = useState<string | undefined>(userFunc)
    const[idUser, setIdUser] = useState<string | number | undefined>(id)
    const[data, setData] = useState<string | undefined>(date)

    async function delUser() {
        await axios.delete(`http://localhost:8080/users/${id}`)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const editUser = () => {
        router.push(`/dashboard/users/cadUser?id=${id}`)
    }

    async function viewUser() {
        await axios.get(`http://localhost:8080/users/${id}`)
        .then((response) => {
            const data = response.data
            if(onViewUser==false) {
                setOnViewUser(true)
                setName("*".repeat(data.nome.length))
                setFunc("*".repeat(data.funcao.length))
                setIdUser("*".repeat(data.id.toString().length))
                setData("*".repeat(data.dataCadastro.toString().length))
            }
            else {
                setOnViewUser(false)
                setName(data.nome+" "+data.sobrenome)
                setFunc(data.funcao)
                setIdUser(data.id)
                setData(data.dataCadastro.toString())
            }
            
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }   

    return(
        <div className={placeholder?'container__userItem userItem--placeholder':"container__userItem"}>
            <div className='item__component'>
                {Icon&&<span className='item__icon'>
                    <Icon stroke="#16151C" stroke-width="2" width="20" height="20"/>
                </span>}
                <p>{edit?name:adminName}</p>
            </div>
            <div className='item__component'>
                <p>{edit?idUser:userName}</p>
            </div>
            <div className='item__component'>
                <p>{userFunc?func.charAt(0).toUpperCase()+func.slice(1):userEmail}</p>
            </div>
            <div className='item__component'>
                <p>{data}</p>
            </div>
            {funcHistory&&<div className='item__component'>
                <p>{funcHistory}</p>
            </div>}
            {edit&&<div className='item__component'>
                {placeholder?<p>{userStatus}</p>:<p style={userStatus=="Ativo"?{color:"#3FC28A", backgroundColor: "#3FC28A10", borderRadius:'8px', padding: "4px 8px"}:{color:"#F45B69", backgroundColor: "#F45B6910", borderRadius:'8px', padding: "4px 8px"}}>{userStatus}</p>}
            </div>}
            {edit&&<div className='item__component'>
                {placeholder?<p>{edit}</p>:<div className='item__options'>
                    <Button onlyIcon outline Icon={TrashIcon} type="button" onClick={delUser}></Button>
                    <Button onlyIcon outline Icon={EditIcon} type="button" onClick={editUser}></Button>
                    {<Button onlyIcon outline Icon={EyeIcon} type="button" onClick={viewUser}></Button>}
                </div>}
            </div>}
        </div>
    )
}

export default UserItem