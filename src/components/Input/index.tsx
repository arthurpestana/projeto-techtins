import React from "react";
import { useState } from "react";

import "./style.css"

interface InputProps {
    label?: string;
    type: string;
    placeholder?: string;
    value?: string;
    Icon?: React.ElementType;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    search?: boolean;
    form?: boolean;
    image?: string
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, label, Icon, search, form, image}) => {
    const [filePath, setFilePath] = useState<string | null>(null);

    return (
        <div className="container__input">
            {Icon&&<label htmlFor="input" className={`${image?"input-image__icon":"input__icon"} ${filePath?"input-image__icon--active":""}`}><Icon width={image?"96":"24"} height={image?"96":"24"} stroke="#A2A1A8"/></label>}
            <input
                id="input"
                name="input"
                className={type=='checkbox'?"input-checkbox":search?"input-search":form?"input-form":image?"input-image":"input-box"}
                accept={image?image:"*"}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={image?(e: React.ChangeEvent<HTMLInputElement>)=>{setFilePath(e.target.value); console.log(e.target.value)}:onChange}
                
            />
            {label&&<label htmlFor="input" className="input__label">{label}</label>}
        </div>
    )
}

export default Input