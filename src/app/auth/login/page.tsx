'use client'

import { FormEvent, useState } from 'react';
import Image from 'next/image';
import { redirect, useRouter } from 'next/navigation';

import './login.css';
import '../../globals.css';

import InputForm from '../../../components/InputForm'
import Button from '../../../components/Button'

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Simula uma requisição de login (substitua isso por uma chamada real à API)
        if (email === 'admin@admin.com' && password === 'admin') {
            // Salva um token no localStorage (simulação de autenticação)
            localStorage.setItem('token', 'fake-token');
            router.push('/dashboard/home');
        } 
        else {
            alert('Credenciais inválidas');
        }
    }

    return (
        <div className='container-login'>
            <div className='login__image'>
                <Image src={'/images/system-image.png'} alt='Sistema de Gerenciamento de Usuários' layout={"intrinsic"} width={650} height={100}/>
            </div>
            <div className='login__box'>
                <div className='login__header'>
                    <div className='header__title'>
                        <Image src={'/images/logo.png'} alt='Logo' width={50} height={50}/>
                        <h1>SneakerShop</h1>
                    </div>
                    <div className='header__info'>
                        <h2>Bem-Vindo</h2>
                        <p>Faça o login aqui!</p>
                    </div>
                </div>
                <form onSubmit={handleLogin} className='login__form'>
                    <InputForm type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                    <InputForm type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
                    <div className="form__remember-forgot">
                        <InputForm type='checkbox' label='Lembrar usuário'/>
                        <a href="#">Esqueceu a senha?</a>
                    </div>
                    <div className='form__button'><Button type='submit' text='Login'/></div>
                </form>
            </div>
        </div>
    );
}
