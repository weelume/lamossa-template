'use client'
import{createContext,useContext,type ReactNode}from'react'
import{brand,type Copy}from'./config'
export interface LamossaHostOptions{brandName?:Copy;logo?:string;lightLogo?:string;marketplaceHref?:string;marketplaceLabel?:Copy;marketplaceAriaLabel?:Copy;filing?:ReactNode}
const Host=createContext<LamossaHostOptions>({})
/** 品牌与宿主入口由消费方注入，通用页面不依赖宿主工程。 */
export function LamossaHostProvider({children,...options}:LamossaHostOptions&{children:ReactNode}){return <Host.Provider value={options}>{children}</Host.Provider>}
export const useLamossaHost=()=>useContext(Host)
export const useLamossaBrand=()=>useContext(Host).brandName??brand.name
