import React from "react";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'button' }) => {
    return (
        <div className="container__button" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button className="bnt" type={type} onClick={onClick} style={{width: '100%', borderRadius: '12px', backgroundColor: '#7152F3', padding: '10px', color: "#FFF", fontWeight: '500', fontSize: '16px'}}>
                {text}
            </button>

            <style jsx>{`
                
            
            

            `}</style>
        </div>
    )
}

export default Button;