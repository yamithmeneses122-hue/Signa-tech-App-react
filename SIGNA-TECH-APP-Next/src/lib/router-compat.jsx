"use client";
import NextLink from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
export function Link({ to, href, replace, ...props }) { return <NextLink href={href ?? to ?? "#"} replace={replace} {...props} />; }
export function NavLink({ to, href, className, ...props }) { const pathname=usePathname(); const destination=href??to??"#"; const active=typeof destination==="string"&&pathname===destination; const cls=typeof className==="function"?className({isActive:active,isPending:false}):className; return <NextLink href={destination} className={cls} aria-current={active?"page":undefined} {...props}/>; }
export function useNavigate(){const router=useRouter();return (to,options={})=>{if(typeof to==="number"){to<0?router.back():router.forward();return;} options?.replace?router.replace(to):router.push(to);};}
export function useLocation(){const pathname=usePathname();const params=useSearchParams();return {pathname,search:params.toString()?"?"+params.toString():"",hash:""};}
export function useParams(){return {};}
export function Navigate({to,replace=false}){const router=useRouter();useEffect(()=>{replace?router.replace(to):router.push(to);},[router,to,replace]);return null;}
export function Outlet({children}){return children??null;}
export function BrowserRouter({children}){return children??null;}
export function Routes({children}){return children??null;}
export function Route(){return null;}
