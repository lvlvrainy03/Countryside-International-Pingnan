import {notFound} from 'next/navigation';
import {PersonPage,RecordPage,TopicPage} from '@/components/catalog-pages';
import {records} from '@/data/catalog';
import people from '@/data/people.json';
export function generateStaticParams(){return [...records.filter(r=>r.section!=='projects').map(r=>({section:r.section,slug:r.slug})),...people.map(p=>({section:'people',slug:p.id})),{section:'topics',slug:'food-ecology'}]}
export default async function Page({params}:{params:Promise<{section:string;slug:string}>}){const {section,slug}=await params;if(section==='topics'&&slug==='food-ecology')return <TopicPage/>;if(section==='people'&&people.some(p=>p.id===slug))return <PersonPage id={slug}/>;const r=records.find(r=>r.section===section&&r.slug===slug);if(!r)notFound();return <RecordPage record={r}/>}
