import React from 'react'

import './style.css'

interface HamburguerProps {
    isOpen: boolean;
    setIsOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const HamburguerButton: React.FC<HamburguerProps> = ({isOpen, setIsOpen}) => {
    return (
        <button className={`hamburguer_button ${isOpen?"humburguer_button--open":"hamburguer_button--close"}`} onClick={setIsOpen}>
            <div className='hamburguer_line'></div>
            <div className='hamburguer_line'></div>
            <div className='hamburguer_line'></div>
        </button>
    )
}

export default HamburguerButton