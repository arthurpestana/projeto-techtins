import React from "react";

import './style.css'

interface ButtonProps {
    text?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'submit' | 'reset'
    Icon?: React.ElementType;
    outline?: boolean
    page?: boolean
    active?: boolean
    mini?: boolean
    onlyIcon?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button", Icon, outline, page, active, mini, onlyIcon}) => {

    return (
        <div className="container__button">
            {page?<button className={`button-page ${active&&'button-page--active'}`} type={type} onClick={onClick}>{text}</button>:
            onlyIcon?<button type={type} onClick={onClick} className={`button-onlyIcon ${outline&&'button-onlyIcon--outline'}`}>
                <span className={`button__label`}>{Icon&&<Icon width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" stroke={outline?"#16151C":mini?"#A2A1A8":"#FFFFFF"}/>}</span>
            </button>:
            <button type={type} onClick={onClick} className={`${mini?"button-mini":"button-box"} ${outline&&'button-box--outline'}`}>
                <span className={`button__label`}>{Icon&&<Icon width={20} height={20} viewBox="0 0 24 24" stroke={outline?"#16151C":mini?"#A2A1A8":"#FFFFFF"}/>} <p>{text}</p></span>
            </button>}
        </div>
    )
}

export default Button;