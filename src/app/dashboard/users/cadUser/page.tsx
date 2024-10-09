'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import axios from 'axios'

import "./style.css"

import BackIcon from '@/../public/icons/arrow-icon.svg'
import ImageIcon from "@/../public/icons/image-icon.svg"

import Button from '@/components/Button/index'
import InputForm from '@/components/Input/index'
import InputDropdown from '@/components/InputDropdown'

const CadUser = () => {
    const router = useRouter();
    const token = localStorage.getItem('token');
    const searchParams = useSearchParams();
    const userId = searchParams.get('id')

    const[nome, setNome] = useState<string | undefined>('')
    const[sobrenome, setSobrenome] = useState<string | undefined>('')
    const[email, setEmail] = useState<string | undefined>('')
    const[status, setStatus] = useState<string | undefined>('')
    const[endereco, setEndereco] = useState<string | undefined>('')
    const[funcao, setFuncao] = useState<string | undefined>('')
    const[genero, setGenero] = useState<string | undefined>('')


    async function getUserId() {
        if (userId) {
            await axios.get(`http://localhost:8080/users/${userId}`)
            .then((response) => {
                console.log(response)
                setNome(response.data.nome)
                setSobrenome(response.data.sobrenome)
                setEmail(response.data.email)
                setStatus(response.data.status)
                setEndereco(response.data.endereco)
                setFuncao(response.data.funcao)
                setGenero(response.data.genero)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }

    async function handleSaveUser() {
        if (!validateFields()) {
            return
        }

        if (userId) {
            await axios.put(`http://localhost:8080/users/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                status: status,
                endereco: endereco,
                funcao: funcao,
                genero: genero
            })
            .then((response) => {
                console.log("Usuário atualizado com sucesso:", response.data);
            })
            .catch((error) => {
                console.error("Erro ao atualizar o usuário:", error);
            });
        } 
        else {
            await axios.post(`http://localhost:8080/users`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                status: status,
                endereco: endereco,
                funcao: funcao,
                genero: genero
            })
            .then((response) => {
                console.log("Usuário cadastrado com sucesso:", response.data);
            })
            .catch((error) => {
                console.error("Erro ao cadastrar o usuário:", error);
            });
        }
    }

    function validateFields() {
        
    }

    useEffect(() => {
        getUserId()
    }, [])
        
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
                        <InputForm form type='text' placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
                        <InputForm form type='text' placeholder='Sobrenome' value={sobrenome} onChange={(e) => setSobrenome(e.target.value)}/>
                    </div>
                    <div className='input__text'>
                        <InputForm form type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <InputDropdown options={["Ativo", "Inativo"]} placeholder='Status' selected={status} onChange={(value: string) => setStatus(value)}/>
                    </div>
                    <div className='input__text'>
                        <InputForm form type='text' placeholder='Endereço' value={endereco} onChange={(e) => setEndereco(e.target.value)}/>
                    </div>
                    <div className='input__text'>
                        <InputDropdown options={["admin", "cliente", "funcionario"]} placeholder='Função' selected={funcao} onChange={(value: string) => setFuncao(value)}/>
                        <InputDropdown options={['masculino', 'feminino', 'outro']} placeholder='Gênero' selected={genero} onChange={(value: string) => setGenero(value)}/>
                    </div>
                </div>
                <div className='form__buttons'>
                    <Button type='button' text='Salvar' onClick={handleSaveUser}/>
                    <Button type='button' text='Cancelar' onClick={() => (router.push("/dashboard/users"))} outline/>
                </div>
            </form>
        </div>
    )
}

export default CadUser