import Image from "next/image";
import { InnerHeader, SiteFooter } from "@/components/site-chrome";
import { places } from "@/data/content";

const rooms = [
  ["01", "展示与档案", "保存项目过程，让每一次行动成为下一次学习的起点。"],
  ["02", "阅读与学习", "图书馆由许多片段共同建成，也是工作站最先发生的公共空间。"],
  ["03", "制作与建造", "材料、工具、工匠知识和共同劳动在这里相遇。"],
  ["04", "驻地与交流", "容纳师生、学者与村庄协作者的短期生活。"],
  ["05", "村庄与田野", "工作站不是边界，而是走向四坪与茶盐古道的起点。"]
];

export default function StationPage() {
  return <><InnerHeader/><main className="inner-page">
    <section className="page-lead shell"><p className="eyebrow dark-text">工作站与四坪 / Station & Siping</p><h1>不是一栋完成的房子，<br/>而是一种持续使用的关系。</h1><p className="lead-copy">首版以二维空间、真实影像和使用机制进入小院。随着建设推进，每个节点都能接入项目、人物、活动与成果。</p></section>
    <section className="station-map shell">
      <div className="map-visual"><div className="map-courtyard">院</div><span className="map-label a">阅读／档案</span><span className="map-label b">制作／建造</span><span className="map-label c">驻地／交流</span><span className="map-label d">通向四坪村 ↗</span></div>
      <div className="map-side"><span>空间状态</span><strong>建设中</strong><p>平面图、空间照片、软装信息与运营机制待负责人补充。当前图为叙事性示意，不代表最终建筑方案。</p></div>
    </section>
    <section className="photo-band shell"><Image src="/assets/field-route.jpg" alt="四坪村巷道中的田野行动" fill sizes="(max-width: 800px) 100vw, 70vw"/></section>
    <section className="room-list shell"><div className="section-index">空间不是栏目，而是行动入口</div>{rooms.map(([n,t,d])=><article key={n}><span>{n}</span><h2>{t}</h2><p>{d}</p></article>)}</section>
    <section className="place-cards shell">{places.map(p=><article key={p.id}><small>{p.type}</small><h3>{p.name}</h3><p>{p.note}</p></article>)}</section>
  </main><SiteFooter/></>;
}
