"use client";
import EncabezadoInicio from "@/componentes/compartidos/EncabezadoInicio.jsx";
import PiePagina from "@/componentes/compartidos/PiePagina.jsx";
import VistaInicio from "@/Features/Public/Vistas/VistaInicio.jsx";
export default function HomePage(){return <section className="min-h-screen overflow-x-hidden bg-[#0c1216] font-['Montserrat',sans-serif] text-white"><EncabezadoInicio/><main className="pt-[68px]"><VistaInicio/></main><PiePagina/></section>;}
