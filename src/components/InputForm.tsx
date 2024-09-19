import React from "react";

interface InputProps {
    label?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    icon?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, label, icon }) => {
    return (
        <div className="container__input" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <input 
                className="input__box"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={type=='checkbox'?{width: '20px', height: '20px', borderRadius: '4px'}:{width: '100%', borderRadius: '12px', padding: '12px', outline: '1px solid #7152F3'}}
            />
            {label&&<label htmlFor="remember-me">{label}</label>}
        </div>
    )
}

export default Input