import { notFound } from "next/navigation";
import Link from "next/link";
import { InnerHeader, SiteFooter } from "@/components/site-chrome";
import { projects } from "@/data/content";

export function generateStaticParams(){ return projects.map(p=>({slug:p.slug})); }

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const project=projects.find(p=>p.slug===slug); if(!project) notFound();
  return <><InnerHeader/><main className="inner-page project-page">
    <section className="project-head shell"><div><p className="eyebrow dark-text">{project.years} / {project.stage}</p><h1>{project.title}</h1><p className="project-en">{project.titleEn}</p></div><aside><span>地点</span><strong>{project.place}</strong><span>核心议题</span><div className="tag-row">{project.themes.map(t=><em key={t}>{t}</em>)}</div></aside></section>
    <section className="project-intro shell"><p>{project.summary}</p><blockquote>“{project.question}”</blockquote></section>
    <section className="process-grid shell"><div className="section-index">过程 / Process</div><div>{project.process.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3></article>)}</div></section>
    <section className="output-section shell"><div><p className="eyebrow dark-text">成果与现场反馈</p><h2>成果不是终点，而是关系继续生长的节点。</h2></div><ol>{project.outputs.map(x=><li key={x}>{x}</li>)}</ol></section>
    <section className="relations shell"><div className="section-index">关联对象</div><div className="relation-grid"><article><small>机构</small>{project.organizations.map(x=><p key={x}>{x}</p>)}</article><article><small>相关地点／活动</small>{project.related.map(x=><p key={x}>{x}</p>)}</article><article><small>继续浏览</small><Link href="/archive">在档案网络中查看 ↗</Link></article></div></section>
  </main><SiteFooter/></>;
}
