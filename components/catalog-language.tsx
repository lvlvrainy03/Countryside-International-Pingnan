'use client';
import {createContext,useContext,useEffect,useState} from 'react';
export type Copy = readonly [string,string];
const Language = createContext({lang:0 as 0|1,t:(v:Copy)=>v[0],toggle:()=>{}});
export function CatalogLanguage({children}:{children:React.ReactNode}){
 const [lang,setLang]=useState<0|1>(0);
 useEffect(()=>{if(localStorage.getItem('ci-language')==='en')setLang(1)},[]);
 useEffect(()=>{document.documentElement.lang=lang?'en':'zh-CN'},[lang]);
 const toggle=()=>setLang(v=>{const next=v?0:1;localStorage.setItem('ci-language',next?'en':'zh');return next});
 return <Language.Provider value={{lang,t:v=>v[lang],toggle}}>{children}</Language.Provider>;
}
export const useCatalogLanguage=()=>useContext(Language);
