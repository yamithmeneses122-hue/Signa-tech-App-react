"use client";
import Link from 'next/link';
export default function NotFound() { return <main className="grid min-h-screen place-items-center bg-slate-950 px-6 text-white"><section className="text-center"><p className="text-cyan-300">404</p><h1 className="mt-2 text-3xl font-bold">Página no encontrada</h1><p className="mt-3 text-slate-300">La dirección que buscas no existe.</p><Link className="mt-6 inline-block rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950" href="/">Volver al inicio</Link></section></main>; }
