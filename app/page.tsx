import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-chrome";
import { projects } from "@/data/content";

const methods = ["进入田野", "观察与访谈", "测绘与研究", "共创与制作", "测试与建造", "反思再行动"];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <Image src="/assets/field-route.jpg" alt="参与者行走在屏南四坪村的巷道中" fill priority className="hero-image" sizes="100vw" />
        <div className="hero-wash" />
        <header className="site-header shell">
          <Link className="wordmark" href="/" aria-label="乡土国际首页">
            <span>乡土国际</span><small>Countryside International</small>
          </Link>
          <nav aria-label="主导航">
            <Link href="/station">工作站</Link><Link href="/projects/amend-pingnan">项目</Link>
            <Link href="/workshop">当前工作坊</Link><Link href="/archive">档案网络</Link><Link href="/about">关于</Link>
          </nav>
        </header>
        <div className="hero-content shell">
          <div><p className="eyebrow">福建 · 屏南 · 四坪村 / 持续发生中</p><h1>以世界为视野<br />以乡土为学院</h1></div>
          <div className="hero-bottom">
            <p>一个连接乡建教育、社会创新与国际协作的学习平台与项目网络。</p>
            <Link className="circle-link" href="/station" aria-label="进入工作站">进入工作站 <span>↘</span></Link>
          </div>
        </div>
        <div className="vertical-note">CHINA ACADEMY OF ART × SIPING VILLAGE</div>
      </section>

      <section className="now-section shell" id="now">
        <div className="section-index">01 / 正在发生</div>
        <div className="now-grid">
          <div><p className="status"><i /> 2026.09 国际工作坊</p><h2>从一座乡村图书馆，寻找公共空间的种子。</h2></div>
          <div className="now-copy">
            <p>参与者从屏南四坪村的日常生活出发，行走、倾听、测绘并制作。每一组先完成一个图书馆片段，再把发现转化为一座小型公共建筑的提案。</p>
            <Link className="text-link" href="/workshop">查看工作坊现场 →</Link>
          </div>
        </div>
      </section>

      <section className="method-strip" aria-label="学习如何发生"><div className="shell">
        <div className="section-index light">02 / 学习如何发生</div>
        <div className="method-flow">{methods.map((method, index) => <div className="method" key={method}><span>{String(index + 1).padStart(2, "0")}</span><strong>{method}</strong></div>)}</div>
      </div></section>
      <section className="project-paths shell">
        <div className="section-index">03 / 项目路径</div>
        <div className="path-intro"><h2>一条从食物、田野到公共空间的学习路径。</h2><p>项目并非孤立活动，而是在四坪反复进入、行动与返回的长期关系。</p></div>
        <div className="project-cards">{projects.map((project,index)=><article key={project.slug}>
          <div><span>0{index+1}</span><em>{project.years}</em></div><h3>{project.title}</h3><p>{project.summary}</p>
          <Link href={project.slug==="amend-pingnan"?`/projects/${project.slug}`:"/archive"}>查看项目与关系 →</Link>
        </article>)}</div>
      </section>
      <section className="international-section">
        <div className="shell international-grid"><div><p className="eyebrow">04 / 国际联合</p><h2>国际，不是一张世界地图上的装饰。</h2></div><div><p>它来自真实的共同工作：在智利开放城市、墨西哥国立自治大学等寻访节点中交换经验，再把问题带回屏南的具体社会现场。</p><Link className="text-link" href="/archive">查看协作网络 →</Link></div></div>
      </section>
      <section className="archive-call shell"><div><span>2023</span><i/><span>2024</span><i/><span>2025</span><i/><span className="active-year">2026</span><i/><span>未来</span></div><h2>每一次行动，都进入一份可以被重新连接的档案。</h2><Link className="circle-link dark-circle" href="/archive">进入档案网络 <span>↗</span></Link></section>
      <SiteFooter />
    </main>
  );
}
