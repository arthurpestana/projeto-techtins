'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import axios from 'axios'

import "./style.css"

import BackIcon from '@/../public/icons/arrow-icon.svg'
import ImageIcon from "@/../public/icons/image-icon.svg"
import EyeIcon from '@/../public/icons/eye-icon.svg';
import EyeSlachIcon from "@/../public/icons/eye-slash-icon.svg";

import Button from '@/components/Button/index'
import InputForm from '@/components/Input/index'
import InputDropdown from '@/components/InputDropdown'
import AlertBox from "@/components/AlertBox"


const CadUser = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const userId = searchParams.get('id')

    const[nome, setNome] = useState<string | undefined>('')
    const[sobrenome, setSobrenome] = useState<string | undefined>('')
    const[email, setEmail] = useState<string | undefined>('')
    const[senha, setSenha] = useState<string | undefined>('')
    const[status, setStatus] = useState<string | undefined>('')
    const[endereco, setEndereco] = useState<string | undefined>('')
    const[funcao, setFuncao] = useState<string | undefined>('')
    const[genero, setGenero] = useState<string | undefined>('')
    
    const[viewSenha, setViewSenha] = useState<boolean>(true)
    const[error, setError] = useState<string | undefined>('')
    const[sucess, setSucess] = useState<string | undefined>('')


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
            return setError("Preencha todos os campos corretamente!")
        }
        const token = localStorage.getItem('token');
        if (userId) {
            console.log(nome, sobrenome, email, status, endereco, funcao, genero, senha)
            await axios.put(`http://localhost:8080/users/${userId}`, {
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                status: status,
                senha: senha,
                endereco: endereco,
                funcao: funcao,
                genero: genero,
                fotoUrl: ''
            }, 
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log("Usuário atualizado com sucesso:", response.data);
                setSucess("Usuário atualizado com sucesso!")
            })
            .catch((error) => {
                console.error("Erro ao atualizar o usuário:", error);
                setError("Erro ao atualizar o usuário!");
            });
        } 
        else {
            await axios.post(`http://localhost:8080/users`, {
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                status: status,
                senha: senha,
                endereco: endereco,
                funcao: funcao,
                genero: genero,
                fotoUrl: ''
            }, 
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log("Usuário cadastrado com sucesso:", response.data);
                setSucess("Usuário cadastrado com sucesso!")
                setError('')
                setTimeout(() => {
                    router.push('/dashboard/users');
                    setSucess('')
                }, 2000);
            })
            .catch((error) => {
                console.error("Erro ao cadastrar o usuário:", error);
                setError("Erro ao cadastrar o usuário!");
                setSucess('')
            });
        }
    }

    function validateFields() {
        console.log(nome, sobrenome, email, senha, status, endereco, funcao, genero)
        if (!nome || !sobrenome || !email || !senha || !status || !endereco || !funcao || !genero) {
            return false
        }
        return true
    }

    useEffect(() => {
        getUserId()
    }, [])
        
    return (
        <div className={`container__main`}>
            <div className={`${sucess||error?"container__background--error":"container__background"}`}>

            </div>
            <div className='main__head'>
                <Button Icon={BackIcon} text='Voltar' mini onClick={() => (router.push("/dashboard/users"))}/>
                <h1>Cadastrar Usuários</h1>
            </div>
            <div className='main__form'>
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
                        <InputForm form type={viewSenha?"password":"text"} placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)}/><Button onlyIcon outline type="button" onClick={() => setViewSenha(!viewSenha)} Icon={!viewSenha?EyeIcon:EyeSlachIcon}/>
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
            </div>
            {error && <AlertBox error title={"ERROR"} text={error} onClick={() => {setError("")}}/>}
            {sucess && <AlertBox sucess title={"SUCESSO"} text={sucess} onClick={() => {setSucess("")}}/>}
        </div>
    )
}

export default CadUser