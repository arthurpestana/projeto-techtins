import React, { Key } from 'react'
import './style.css'

import EyeIcon from '@/../public/icons/eye-icon.svg';
import TrashIcon from "@/../public/icons/bin-icon.svg";
import EditIcon from "@/../public/icons/pencil-edit-icon.svg"

interface UserItemProps {
    userName?: string;
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
}

const UserItem: React.FC<UserItemProps> = ({Icon, userName, adminName, adminMail, date, placeholder, id, edit, userFunc, userStatus}) => {
    return(
        <div className={placeholder?'container__userItem userItem--placeholder':"container__userItem"}>
            <div className='item__component'>
                {Icon&&<span className='item__icon'>
                    <Icon stroke="#16151C" stroke-width="2" width="20" height="20"/>
                </span>}
                <p>{edit?userName:adminName}</p>
            </div>
            <div className='item__component'>
                <p>{edit?id:adminMail}</p>
            </div>
            <div className='item__component'>
                <p>{userFunc?userFunc.charAt(0).toUpperCase()+userFunc.slice(1):userName}</p>
            </div>
            <div className='item__component'>
                <p>{date}</p>
            </div>
            {edit&&<div className='item__component'>
                {placeholder?<p>{userStatus}</p>:<p style={userStatus?{color:"#3FC28A", backgroundColor: "#3FC28A10", borderRadius:'8px', padding: "4px 8px"}:{color:"#F45B69", backgroundColor: "#F45B6910", borderRadius:'8px', padding: "4px 8px"}}>{userStatus?"Ativo":"Inativo"}</p>}
            </div>}
            {edit&&<div className='item__component'>
                {placeholder?<p>{edit}</p>:<div className='item__options'>
                    <button id='del_button'><TrashIcon width={24} heigth={24} stroke="#16151C"/></button>
                    <button id='edit_button'><EditIcon width={24} heigth={24} stroke="#16151C"/></button>
                    <button id='view_button'><EyeIcon width={24} heigth={24} stroke="#16151C"/></button>
                </div>}
            </div>}
        </div>
    )
}

export default UserItem