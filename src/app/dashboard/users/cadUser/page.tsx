'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import "./style.css"

import BackIcon from '@/../public/icons/arrow-icon.svg'
import ImageIcon from "@/../public/icons/image-icon.svg"

import Button from '@/components/Button/index'
import InputForm from '@/components/Input/index'
import InputDropdown from '@/components/InputDropdown'

export default function cadUser() {
    const router = useRouter();
        
    return (
        <div className='container__main'>
            <div className='main__head'>
                <Button Icon={BackIcon} text='Voltar' mini onClick={() => (router.push("/dashboard/users"))}/>
                <h1>Cadastrar Usuários</h1>
            </div>
            <form className='main__form'>
                <div className='form__header'>
                    <h2>Informações de Usuário</h2>
                    <p>Preencha todos os campos para cadastrar o usuário</p>
                </div>
                <div className='form__inputs'>
                    <div className='input__image'>
                        <InputForm Icon={ImageIcon} type='file' image={"image/*"}/>
                    </div>
                    <div className='input__text'>
                        <InputForm form type='text' placeholder='Nome' value='' onChange={() => (null)}/>
                        <InputForm form type='text' placeholder='Sobrenome' value='' onChange={() => (null)}/>
                    </div>
                    <div className='input__text'>
                        <InputForm form type='email' placeholder='Email' value='' onChange={() => (null)}/>
                        <InputForm form type='tel' placeholder='Telefone' value='' onChange={() => (null)}/>
                    </div>
                    <div className='input__text'>
                        <InputForm form type='text' placeholder='Endereço' value='' onChange={() => (null)}/>
                    </div>
                    <div className='input__text'>
                        <InputDropdown options={["administrador", "cliente", "funcionario"]} placeholder='Função'/>
                        <InputDropdown options={['masculino', 'feminino']} placeholder='Gênero'/>
                    </div>
                </div>
                <div className='form__buttons'>
                    <Button type='button' text='Salvar' onClick={() => null}/>
                    <Button type='button' text='Cancelar' onClick={() => null} outline/>
                </div>
            </form>
        </div>
    )
}