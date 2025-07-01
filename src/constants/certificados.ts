// import jsCisco from '../assets/certificados/js-cisco.png'
// import pythonUmich from '../assets/certificados/python-umich.png'
// import fullstackPlatzi from '../assets/certificados/fullstack-platzi.png'

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
    imagen: '/assets/certificados/js-cisco.png',
    enlace: 'https://example.com/cert-js'
  },
  {
    titulo: 'Python for Everybody',
    institucion: 'University of Michigan - Coursera',
    imagen: '/assets/certificados/python-umich.png'
  },
  {
    titulo: 'Desarrollo Web FullStack',
    institucion: 'Platzi',
    imagen: '/assets/certificados/fullstack-platzi.png'
  }
]