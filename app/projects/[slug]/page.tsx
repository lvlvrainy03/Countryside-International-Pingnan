import {notFound,redirect} from 'next/navigation';
import {RecordPage} from '@/components/catalog-pages';
import {records} from '@/data/catalog';
export function generateStaticParams(){return records.filter(r=>r.section==='projects').map(r=>({slug:r.slug}))}
export default async function Page({params}:{params:Promise<{slug:string}>}){const{slug}=await params;if(slug==='doctoral-camp')redirect('/events/camp-2025');if(slug==='amend-pingnan')redirect('/practice/amend-pingnan');const r=records.find(r=>r.section==='projects'&&r.slug===slug);if(!r)notFound();return <RecordPage record={r}/>}
