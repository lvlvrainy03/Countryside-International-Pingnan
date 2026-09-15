import { InnerHeader, SiteFooter } from "@/components/site-chrome";
import { events, projects } from "@/data/content";

const project = projects[0];
export default function WorkshopPage(){return <><InnerHeader/><main className="inner-page workshop-page">
  <section className="page-lead shell"><p className="eyebrow dark-text">2026.09 / 当前工作坊</p><h1>图书馆片段<br/>＋公共空间种子</h1><div className="workshop-meta"><span>福建屏南 · 四坪村</span><span>从现场到杭州，再返回村庄</span><span className="live-pill">进行中</span></div></section>
  <section className="workshop-statement"><div className="shell"><p>不要先问：<s>“我能设计什么建筑？”</s></p><h2>先问：这个地方需要什么？</h2></div></section>
  <section className="journey shell"><div className="section-index">项目路径 / Project journey</div>{project.process.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><i>↓</i></article>)}</section>
  <section className="two-col shell"><div><p className="eyebrow dark-text">一座图书馆，许多作者</p><h2>窗、桌、座、架、灯、门槛、门、展示、储物、屏风、标识、阅读处。</h2></div><div><p>每组负责一个片段，但它们不是彼此孤立的作品。片段将在四坪组装成一座可以阅读、会面、学习与交换知识的公共场所。</p><blockquote>许多片段 → 一个房间 → 一座图书馆 → 一个公共场所</blockquote></div></section>
  <section className="schedule shell"><div className="section-index">时间与后续</div>{events.slice(0,3).map(e=><article key={e.id}><time>{e.date}</time><h3>{e.title}</h3><span>{e.place}</span><b>{e.status}</b></article>)}</section>
  <section className="pending-note shell"><strong>仍待确认</strong><p>导师、参与院校与成员名单；杭州汇报的准确日期；土耳其合作方与 11 月活动名称。未确认信息不会在公开版中推断补齐。</p></section>
  </main><SiteFooter/></>}
