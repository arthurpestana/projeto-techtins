'use client'

import { useEffect } from "react";
import { redirect } from 'next/navigation';

import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export default function DashboardLayout() {
    useEffect(() => {
      // Verifica se o token está presente no localStorage (simulação de autenticação)
      const token = localStorage.getItem('token');
      if (!token) {
        // Se não houver token, redireciona para a página de login
        redirect('../../auth/login');
      }
    }, [])

    return(
      <div>
        <Header/>
      </div>
    )
}