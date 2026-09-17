'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {sections} from '@/data/catalog';
import {useCatalogLanguage} from './catalog-language';
import './field-atlas.css';
import './catalog.css';
export function CatalogNav({home=false}:{home?:boolean}){
 const marker=useRef<HTMLDivElement>(null);const [compact,setCompact]=useState(!home);const path=usePathname()||'';
 useEffect(()=>{if(!home||!marker.current)return;const observer=new IntersectionObserver(([e])=>setCompact(!e.isIntersecting&&e.boundingClientRect.top<0));observer.observe(marker.current);return()=>observer.disconnect()},[home]);
 const {t}=useCatalogLanguage();
 return <><div ref={marker} className="nav-marker"/><nav className={`catalog-nav ${compact?'is-compact':''}`} aria-label={t(['内容分类','Content categories'])}>{sections.map((s,i)=><a href={`/index#${s.id}`} key={s.id} aria-current={path==='/index'? 'page':undefined}><span className="nav-number">0{i+1}</span><span>{t(s.name)}<small>{s.name[1]}</small></span></a>)}</nav></>;
}
export function CatalogHeader(){const{lang,t,toggle}=useCatalogLanguage();return <header className="field-top"><Link href="/">乡土国际 / CI</Link><Link href="/about">{t(['关于乡土国际','About'])}</Link><button onClick={toggle} aria-label="Switch language">{lang?'中文 / EN':'中 / English'}</button></header>}
export function CatalogFooter(){const{t}=useCatalogLanguage();return <footer className="field-footer"><p>{t(['以社会为现场','Society as the field'])}</p><div><span>中国美术学院视觉传播学院<br/>屏南硕博工作站</span><span>School of Communication Design<br/>China Academy of Art</span><Link href="/about">{t(['关于乡土国际','About Countryside International'])} ↗</Link></div><small>COUNTRYSIDE INTERNATIONAL · SIPING · <Link href="/archive">{t(['资料索引与来源','Sources and records'])}</Link></small></footer>}
export function CatalogFrame({children}:{children:React.ReactNode}){return <main className="field-v2 catalog-site"><CatalogHeader/><CatalogNav/>{children}<CatalogFooter/></main>}
