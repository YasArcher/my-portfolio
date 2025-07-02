import certificado_JS from '../assets/certificados/certificado_JS.jpg'
import certificado_Cpp from '../assets/certificados/certificado_C++.jpg'
import CSI_2023 from '../assets/certificados/CSI_2023.jpg'
import hatunSoft from '../assets/certificados/hatun.jpg'

type Certificacion = {
  titulo: string
  institucion: string
  imagen: string
  enlace?: string
}

export const certificaciones: Certificacion[] = [
  {
    titulo: 'JavaScript Essentials 1',
    institucion: 'Cisco Networking Academy',
    imagen: certificado_JS,
    enlace: 'https://www.netacad.com/es/certificates?issuanceId=8bce4bce-d2c2-4c2a-bf87-5efe8420b344'
  },
  {
    titulo: 'C++ Essentials 1',
    institucion: 'Cisco Networking Academy',
    imagen: certificado_Cpp,
    enlace: 'https://www.netacad.com/es/certificates?issuanceId=f42ba2f3-cc14-4a72-830e-e31e1d08cf80'
  },
  {
    titulo: 'CSI Course Completion',
    institucion: 'Universidad Tecnica de Ambato',
    imagen: CSI_2023,
    enlace: 'https://utaep.com.ec/bdpnew/UPLOAD/CERTIFICADOS/C408/APROBACION/20231125_C408_APROBA_1850215946_MASABANDATORRES.PDFhttps://platzi.com/p/andres-espinoza/curso/curso-csi/certificado/detalle/'
  },
  {
    titulo: 'Organizador HatunSoft',
    institucion: 'Universidad Tecnica de Ambato',
    imagen: hatunSoft,
  }
]