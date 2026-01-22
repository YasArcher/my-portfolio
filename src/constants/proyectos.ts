import type { Proyecto } from "../components/types/proyectoTypes"

export const proyectosData: Proyecto[] = [
  {
    titulo: 'Secure Repository',
    tipo: 'Web',
    descripcion: 'Web platform for encrypted file management, featuring two-factor authentication (2FA) and digital signature verification.',
    tecnologias: ['React', 'Flask', 'MySQL'],
    enlaceBack: "https://github.com/Dionisio202/Repositorio_Seguridad",
    enlaceFront: 'https://github.com/YasArcher/secure-repository-front',
    isPrivate: false
  },
  {
    titulo: 'DIDE Project Tracking System',
    tipo: 'Web',
    descripcion: 'Web system for monitoring institutional research projects and generating dynamic reports using Business Intelligence tools.',
    tecnologias: ['Blazor', '.NET', 'Power BI'],
    isPrivate: true
  },
  {
    titulo: 'Neighborhood Store Manager',
    tipo: 'Mobile',
    descripcion: 'Mobile application for managing inventory and sales in small neighborhood stores, tailored for simplicity and offline operation.',
    tecnologias: ['Kotlin'],
    enlaceFront: "https://github.com/YasArcher/ProyectoMovilKotlin",
    isPrivate: false
  },
  {
    titulo: 'Credit and Investment Simulator',
    tipo: 'Web',
    descripcion: 'Interactive simulator for credits and investments that allows users to customize simulation parameters and personalize the interface directly from the browser.',
    tecnologias: ['React', 'Node.js', 'Express', 'SQL Server'],
    enlaceFront: "https://github.com/Dionisio202/simulador-credito",
    enlaceBack: "https://github.com/YasArcher/back-economia",
    isPrivate: false
  },
  {
    titulo: 'Desktop Admin for Weight Control App',
    tipo: 'Desktop',
    descripcion: 'Desktop application for managing product data, enabling the registration and update of product characteristics, performance reporting, and data synchronization with the mobile app.',
    tecnologias: ['Java', 'MySQL'],
    enlaceFront: "https://github.com/YasArcher/EatWell-DesktopAdmin",
    isPrivate: false
  }
]
