'use client'

import { useEffect } from "react";
import {jwtDecode} from 'jwt-decode';
import { useRouter } from 'next/navigation';

import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

interface JwtPayload {
  exp: number; // Expiração do token
}

export default function DashboardLayout({ children }: {children: React.ReactNode}) {
    const router = useRouter()

    useEffect(() => {
      const token = localStorage.getItem('token');

      if (token) {
        const decodedToken = jwtDecode<JwtPayload>(token);
        console.log(decodedToken)
        const currentTime = Math.floor(Date.now() / 1000);
        console.log(currentTime)
        if (decodedToken.exp < currentTime) {
          router.push('/auth/login');
        }
      } 
      else {
        router.push('/auth/login');
      }
    }, [router])

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