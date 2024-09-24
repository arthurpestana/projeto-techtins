import React from "react";

import './style.css'

interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset'
    Icon?: React.ElementType;
    outline?: boolean
    page?: boolean
    active?: boolean
    mini?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button", Icon, outline, page, active, mini}) => {

    return (
        <div className="container__button">
            {page?<button className={`button-page ${active&&'button-page--active'}`} type={type} onClick={onClick}>{text}</button>:
            <button type={type} onClick={onClick} className={`${mini?"button-mini":"button-box"} ${outline&&'button-box--outline'}`}>
                <span className={`button__label`}>{Icon&&<Icon width="20" height="20" stroke={outline?"#16151C":mini?"#A2A1A8":"#FFFFFF"}/>} {text}</span>
            </button>}
        </div>
    )
}

export default Button;