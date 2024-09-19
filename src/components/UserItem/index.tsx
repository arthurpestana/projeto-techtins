import React from 'react'
import './style.css'

interface UserItemProps {
    userName: string;
    Icon?: React.ElementType;
    adminName: string;
    adminMail: string;
    date: string;
    placeholder?: boolean
}

const UserItem: React.FC<UserItemProps> = ({Icon, userName, adminName, adminMail, date, placeholder}) => {
    return(
        <div className={placeholder?'container__userItem userItem--placeholder':"container__userItem"}>
            <div className='item__component'>
                {Icon&&<span className='item__icon'>
                    <Icon stroke="#16151C" stroke-width="2" width="20" height="20"/>
                </span>}
                <p>{adminName}</p>
            </div>
            <div className='item__component'>
                <p>{adminMail}</p>
            </div>
            <div className='item__component'>
                <p>{userName}</p>
            </div>
            <div className='item__component'>
                <p>{date}</p>
            </div>
            
        </div>
    )
}

export default UserItem