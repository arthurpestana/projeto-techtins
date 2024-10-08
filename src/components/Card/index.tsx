import React from "react";

import './style.css'

interface CardProps {
    Icon?: React.ElementType
    title?: string
    value: number
    date: string;
    userIcon?: boolean
}

const Card: React.FC<CardProps> = ({Icon, title, value, date, userIcon}) => {
    return(
        <div className="container__card">
            <div className="card__header">
                {Icon&&<span className="card__icon">
                    <Icon stroke="#7152F3" width="24" height="24" strokeWidth="1.5"/>
                </span>}
                <p className="header__text">{title}</p>
            </div>
            <div className="card__value">
                <p className="value__text">{value}</p>
            </div>
            <div className="card__date">
                <p>Update: {date}</p>
            </div>
        </div>
    )
}

export default Card