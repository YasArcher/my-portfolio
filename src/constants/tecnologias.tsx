import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import type { ReactElement } from "react";
import {
  SiTypescript,
  SiTailwindcss,
  SiDotnet,
  SiMysql,
  SiKotlin,
} from "react-icons/si";
//@ts-ignore
import BlazorIcon from "../assets/blazor.svg?react";
//@ts-ignore
import ExpressIcon from "../assets/express.svg?react";

export type Tecnologia = {
  nombre: string;
  icono: ReactElement;
};

export const tecnologias: Tecnologia[] = [
  { nombre: "React", icono: <FaReact className="text-blue-500" /> },
  { nombre: "TypeScript", icono: <SiTypescript className="text-blue-600" /> },
  { nombre: "TailwindCSS", icono: <SiTailwindcss className="text-teal-500" /> },
  { nombre: "Node.js", icono: <FaNodeJs className="text-green-600" /> },
  { nombre: ".NET CORE", icono: <SiDotnet className="text-purple-700" /> },
  // Custom Blazor icon, el tamaño y color se ajustan en el componente
  {
    nombre: "Blazor",
    icono: <BlazorIcon className="w-12 h-12 text-purple-700" />,
  },
  {
    nombre: "Express",
    icono: (
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400">
        <ExpressIcon className="w-10 h-10 text-gray-800" />
      </div>
    ),
  },
  { nombre: "SQL Server", icono: <FaDatabase className="text-red-500" /> },
  { nombre: "MySQL", icono: <SiMysql className="text-orange-600" /> },
  {
    nombre: "Kotlin",
    icono: <SiKotlin className="text-purple-500" />,
  },
];
