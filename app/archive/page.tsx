import Image from "next/image";
import Link from "next/link";
import { InnerHeader, SiteFooter } from "@/components/site-chrome";
import { artifacts, entityCounts, events, organizations, places, projects, sources, themes } from "@/data/content";

export default function ArchivePage(){return <><InnerHeader/><main className="inner-page archive-page">
  <section className="page-lead shell"><p className="eyebrow dark-text">Archive & Network</p><h1>档案不是仓库，<br/>而是关系的入口。</h1><p className="lead-copy">首版用八类对象保存内容。时间、地点、参与者、议题与成果可以被重新组合，为后续知识图谱保留清晰接口。</p></section>
  <section className="entity-grid shell">{entityCounts.map(e=><article key={e.kind}><span>{String(e.count).padStart(2,"0")}</span><strong>{e.label}</strong><small>{e.kind}</small></article>)}</section>
  <section className="network-preview shell"><div className="network-art"><Image src="/assets/network-map.jpg" alt="乡土国际项目关系结构图" fill sizes="(max-width: 800px) 100vw, 60vw"/></div><div><p className="eyebrow dark-text">关系网络 · 首版预览</p><h2>从四坪出发，连接项目、知识与世界。</h2><p>当前保留可读的二维关系结构；待人物称谓、机构关系与坐标准确后，再接入交互图谱。</p></div></section>
  <section className="archive-section shell"><div className="section-index">按时间</div>{events.map(e=><article className="archive-row" key={e.id}><time>{e.date}</time><strong>{e.title}</strong><span>{e.place}</span><em>{e.status}</em></article>)}</section>
  <section className="archive-section shell"><div className="section-index">按项目</div>{projects.map(p=><article className="archive-row" key={p.slug}><time>{p.years}</time><Link href={`/projects/${p.slug}`}>{p.title}</Link><span>{p.place}</span><em>{p.stage}</em></article>)}</section>
  <section className="archive-matrix shell"><article><h2>地点</h2>{places.map(x=><p key={x.id}>{x.name}<small>{x.type}</small></p>)}</article><article><h2>机构</h2>{organizations.map(x=><p key={x.id}>{x.name}<small>{x.role}</small></p>)}</article><article><h2>议题</h2><div className="tag-row">{themes.map(x=><em key={x}>{x}</em>)}</div></article><article><h2>成果</h2>{artifacts.map(x=><p key={x.id}>{x.name}<small>{x.type}</small></p>)}</article></section>
  <section className="sources shell"><div className="section-index">资料来源与可信度</div>{sources.map(s=><article key={s.id}><div><strong>{s.name}</strong><small>{s.date}</small></div><p>{s.note}</p><em>{s.confidence}</em></article>)}</section>
  </main><SiteFooter/></>}
