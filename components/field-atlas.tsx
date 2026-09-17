'use client';
import {useState} from 'react';
import Link from 'next/link';
import {sections,records,recordHref,findRecord,RecordEntry} from '@/data/catalog';
import {useCatalogLanguage} from './catalog-language';
import {CatalogNav,CatalogFooter} from './catalog-shell';
import {Dialog,DialogContent,DialogTitle,DialogDescription} from '@/components/ui/dialog';
import './field-atlas.css';
import './catalog.css';
const fragments=[
 {slug:'amend-pingnan',image:'/assets/field-route.jpg',title:['从片段，共建一座图书馆','Many fragments. One library.'] as const},
 {slug:'diverse-foods',image:'/assets/food-museum.jpg',title:['以食物，阅读社区','Reading a community through food.'] as const},
 {slug:'tea-salt-road',image:'/assets/trail-research.jpg',title:['沿着古道，重新认识地方','Following the road, reading the place.'] as const},
 {slug:'camp-2025',image:'/assets/editorial/camp.jpg',title:['这个地方，需要什么？','What does this place need?'] as const}
];
export default function FieldAtlas(){
 const {lang,t,toggle}=useCatalogLanguage();const [detail,setDetail]=useState<RecordEntry|null>(null);
 return <main className="field-v2" lang={lang?'en':'zh-CN'}>
 <a className="skip-link" href="#relations">{t(['跳至内容索引','Skip to content index'])}</a>
 <header className="field-top"><a href="#field">CI / 四坪</a><span>{t(['以世界为视野，以乡土为学院','The world as our horizon. The countryside as our academy.'])}</span><button onClick={toggle} aria-label="Switch language">{lang?'中文 / EN':'中 / English'}</button></header>
 <section className="identity-stage" id="field">
 <div className="identity-mark" role="img" aria-label="乡土国际 Countryside International"><img src="/assets/xiangtu-identity.png" alt=""/></div>
 <div className="identity-caption no-cta"><span>CHINA · FUJIAN · PINGNAN · SIPING</span><p>{t(['人们一次次来到四坪，在共同学习中，建造持续生长的现场。','Returning to Siping. Learning together. Building a place that keeps growing.'])}</p></div>
 </section>
 <CatalogNav home/>
 <section className="relations-surface" id="relations">
 <div className="section-kicker"><span>01—04 / FIELD CONNECTIONS</span><span>{t(['人物、实践与共同学习','People, practice and shared learning'])}</span></div>
 <div className="rel-heading"><h1>{t(['场所慢慢生长，\n学习一次次发生。','Places grow.\nLearning returns.'])}</h1><p>{t(['从人物、项目、活动与多种成果进入同一个乡土现场。每一次相遇，都留下能够继续阅读与接续的线索。','People, projects, events and outcomes open onto the same field. Each encounter leaves something to read, share and continue.'])}</p></div>
 <div className="directory-grid">{sections.map(s=><article className="directory-column" key={s.id}><p>{t(s.intro)}</p>{s.id==='people'?<><Link className="directory-item" href="/people"><small>40 / LOCAL CO-CREATORS</small><strong>{t(['大食物共创者','Food co-creators'])}</strong><em>{t(['以肉、蛋、禽、奶、鱼、果、菌、茶等食物与劳动属性，连接四坪村的生活网络。','Forty local profiles connect food, work and everyday life in Siping.'])}</em></Link><Link className="directory-item" href="/people#international"><small>乡土＋国际</small><strong>{t(['乡土实践者、国际教师与学生','Local practitioners, international teachers & students'])}</strong><em>{t(['温铁军、周芬芳、潘家恩、杨林、潘国老，以及研习营的国际导师与学生。','Local practitioners meet international mentors and students through the study camp.'])}</em></Link><Link className="directory-item" href="/people#academy"><small>CAA</small><strong>{t(['美院师生团队','CAA teachers & students'])}</strong><em>{t(['以展览、教学与研究为线索持续参与四坪实践。','Teachers and students contribute through exhibition, teaching and research.'])}</em></Link></>:records.filter(r=>r.section===s.id).slice(0,s.id==='practice'?4:3).map(r=><Link className="directory-item" href={recordHref(r)} key={r.slug}><small>{r.date}</small><strong>{t(r.title)}</strong><em>{t(r.summary)}</em></Link>)}<a className="directory-more" href={`/index#${s.id}`}>{t(['在内容索引中浏览','Browse in the index'])} ↗</a></article>)}</div>
 <p className="topic-inline"><Link href="/topics/food-ecology">{t(['跨项目专题 / 以食为天','Cross-project topic / Food Ecology'])} ↗</Link></p>
 </section>
 <section className="atlas-surface" id="atlas"><div className="section-kicker"><span>FIELD ATLAS</span><span>{t(['每个片段，都能通向整个现场','Every fragment opens onto the wider field'])}</span></div><div className="atlas-heading"><h2>{t(['从一张影像，\n进入一种关系。','An image.\nA web of relations.'])}</h2><p>{t(['照片、手稿与材料记录连接着地点、人物和行动。点击一个片段，查看它属于哪一次相遇。','Photographs, drawings and material records connect places, people and actions. Open a fragment to discover the encounter it belongs to.'])}</p></div><div className="atlas-image-grid">{fragments.map((f,i)=><button key={f.slug} onClick={()=>setDetail(findRecord(f.slug)!)}><figure><img src={f.image} loading="lazy" alt={t(f.title)}/><figcaption><span>F / 00{i+1}</span><span>{t(f.title)}</span><b>↗</b></figcaption></figure></button>)}</div><Link className="full-index" href="/archive">{t(['资料索引与来源','Source index & records'])} ↗</Link></section>
 <CatalogFooter/>
 <Dialog open={detail!==null} onOpenChange={open=>{if(!open)setDetail(null)}}><DialogContent className="field-detail"><DialogTitle>{detail?t(detail.title):''}</DialogTitle><DialogDescription>{detail?t(detail.status):''}</DialogDescription>{detail&&<>{detail.image&&<img src={detail.image} alt={t(detail.title)}/>}<p>{t(detail.summary)}</p><dl><div><dt>{t(['时间','Date'])}</dt><dd>{detail.date}</dd></div><div><dt>{t(['内容归属','Filed under'])}</dt><dd>{t(sections.find(s=>s.id===detail.section)!.name)}</dd></div></dl><Link className="related-jump" href={recordHref(detail)}>{t(['阅读完整记录','Read the full record'])} ↗</Link></>}</DialogContent></Dialog>
 </main>
}
