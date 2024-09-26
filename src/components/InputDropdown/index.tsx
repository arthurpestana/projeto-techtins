'use client';

import React, { useEffect, useState } from 'react';
import './style.css';

import ChevronIcon from '@/../public/icons/chevron-icon.svg'

type InputDropdownProps = {
  options: Array<string>;
  label?: string;
  placeholder: string;
};

const InputDropdown: React.FC<InputDropdownProps> = ({ options, label, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [highlightedOption, setHighlightedOption] = useState<string | null>(null);

  useEffect(() => {
    setHighlightedOption(placeholder);
  }, [placeholder]);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    setHighlightedOption(option);
  };

  return (
    <div className='container__dropdown'>
      {label && <label className='dropdown__label' htmlFor='dropdown'>{label}</label>}
      <div className={`dropdown__select ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
        <div className={`dropdown__selected ${highlightedOption === placeholder ? 'placeholder-item--highlighted' : ''}`}>
          {selectedOption?.charAt(0).toUpperCase()+selectedOption?.slice(1) || placeholder}
        </div>
        <div className="dropdown__arrow">
            <ChevronIcon width="25" height="25" stroke="#16151C"/>
        </div>
      </div>
      {isOpen && (
        <div className='dropdown__options'>
          {options.map((value, index) => (
            <div
              className='dropdown__item'
              key={index}
              onClick={() => handleOptionClick(value)}
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputDropdown;