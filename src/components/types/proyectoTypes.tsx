
export type Proyecto = {
  titulo: string
  tipo: "Web" | "Mobile" | "Desktop"
  descripcion: string
  tecnologias: string[]
  enlaceFront?: string
  enlaceBack?: string
}