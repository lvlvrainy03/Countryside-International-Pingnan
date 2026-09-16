import {notFound} from 'next/navigation';
import {CatalogIndex} from '@/components/catalog-pages';
import {sections} from '@/data/catalog';
export function generateStaticParams(){return sections.map(s=>({section:s.id}))}
export default async function Page({params}:{params:Promise<{section:string}>}){const {section}=await params;const s=sections.find(s=>s.id===section);if(!s)notFound();return <CatalogIndex section={s.id}/>}
