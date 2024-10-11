'use client'

import { FormEvent, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import './login.css';
import '../../globals.css';

import InputForm from '../../../components/Input'
import Button from '../../../components/Button'
//import AlertBox from '@/components/AlertBox';

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        console.log(email, password);

        try {
            const response = await axios.post<{ token: string }>('http://localhost:8080/auth/login', {email, password});
            console.log(response)
            // Salvando o token JWT no localStorage
            localStorage.setItem('token', response.data.token);

            // Redirecionar para a página protegida (exemplo: dashboard)
            router.push('/dashboard/home');
        } 
        catch (err) {
            setError('Login falhou. Verifique seu email ou senha!');
            console.log(err)
        }
    }

    return (
        <div className='container_login'>
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
                {error && <div className='error__box'>
                    <button className="close_error" onClick={() => {setError(null)}}>
                        <span></span>
                        <span></span>
                    </button>
                    <p>{error}</p>
                </div>}
            </div>
        </div>
    );
}
