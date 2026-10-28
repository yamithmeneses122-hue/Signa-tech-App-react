"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { HomeIcon, SpeakerWaveIcon, MicrophoneIcon, CameraIcon, BookOpenIcon, UserCircleIcon, Cog6ToothIcon, SunIcon, MoonIcon, ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline';

export default function BarraLateral({ isOpen, onClose }) {
  const [theme, setTheme] = useState('dark');
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => { setTheme(localStorage.getItem('signa-theme') || 'dark'); }, []);
  useEffect(() => { document.documentElement.classList.toggle('dark', theme === 'dark'); }, [theme]);
  const toggleTheme = () => { const next = theme === 'dark' ? 'light' : 'dark'; setTheme(next); localStorage.setItem('signa-theme', next); };
  const navItems = [
    { path: '/operador', name: 'Inicio', icon: HomeIcon },
    { path: '/texto-voz', name: 'Texto a Voz', icon: SpeakerWaveIcon },
    { path: '/voz-a-texto', name: 'Voz a Texto', icon: MicrophoneIcon },
    { path: '/camara', name: 'Detección Cámara', icon: CameraIcon },
    { path: '/diccionario', name: 'Diccionario LSC', icon: BookOpenIcon },
    { path: '/avatar', name: 'Avatar', icon: UserCircleIcon },
    { path: '/configuracion', name: 'Configuración', icon: Cog6ToothIcon },
  ];
  const logout = () => { localStorage.removeItem('usuario'); sessionStorage.removeItem('usuario'); router.push('/login'); };
  return <>{isOpen && <button type="button" className="fixed inset-0 z-40 bg-slate-950/70 md:hidden" onClick={onClose} aria-label="Cerrar menú" />}<aside className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white text-slate-800 transition-transform duration-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}><header className="flex items-center justify-between border-b border-slate-200 p-6 dark:border-slate-800"><div><h2 className="font-bold text-cyan-600 dark:text-cyan-300">SIGNA-TECH</h2><p className="text-xs text-slate-500 dark:text-slate-400">Panel operador</p></div><button type="button" onClick={onClose} className="md:hidden" aria-label="Cerrar menú">×</button></header><nav className="flex-1 space-y-1 overflow-y-auto p-3" aria-label="Navegación del operador">{navItems.map(({path,name,icon:Icon}) => <Link key={path} href={path} onClick={onClose} aria-current={pathname===path?'page':undefined} className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${pathname===path?'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300':'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'}`}><Icon className="h-5 w-5"/>{name}</Link>)}</nav><div className="space-y-2 border-t border-slate-200 p-4 dark:border-slate-800"><button type="button" onClick={toggleTheme} className="flex w-full items-center gap-3 rounded-xl px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800">{theme==='dark'?<SunIcon className="h-5 w-5"/>:<MoonIcon className="h-5 w-5"/>}{theme==='dark'?'Tema claro':'Tema oscuro'}</button><button type="button" onClick={logout} className="flex w-full items-center gap-3 rounded-xl px-4 py-2 text-sm text-rose-500 hover:bg-rose-500/10"><ArrowLeftStartOnRectangleIcon className="h-5 w-5"/>Cerrar sesión</button></div></aside></>;
}
