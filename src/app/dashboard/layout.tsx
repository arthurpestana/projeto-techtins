'use client'

import { useEffect } from "react";
import { redirect } from 'next/navigation';

import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export default function DashboardLayout({ children }: {children: React.ReactNode}) {
    useEffect(() => {
      // Verifica se o token está presente no localStorage (simulação de autenticação)
      const token = localStorage.getItem('token');
      if (!token) {
        // Se não houver token, redireciona para a página de login
        redirect('../../auth/login');
      }
    }, [])

    return(
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header/>
        <div style={{ display: 'flex', flex: 1 }}>
          <SideBar/>
          {children}
        </div>
      </div>
    )
}