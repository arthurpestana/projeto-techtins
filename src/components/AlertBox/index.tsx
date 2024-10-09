import React from "react";

import Button from "../Button";

import XIcon from "@/../public/icons/x-icon.svg"

import './style.css'

interface AlertProps {
    text?: string;
    title?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    sucess?: boolean;
    error?: boolean;
}

const AlertBox: React.FC<AlertProps> = ({ text, title, onClick, sucess, error}) => {
    return (
        <div className={`container__alert ${sucess&&'container__alert--success'} ${error&&'container__alert--error'}`}>
            <div className="alert__button">
                <Button onlyIcon Icon={XIcon} type="button" onClick={onClick}/>
            </div>
            <div className="alert__message">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default AlertBox