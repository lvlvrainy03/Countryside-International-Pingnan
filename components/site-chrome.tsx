import Link from "next/link";

export function InnerHeader() {
  return <header className="inner-header shell">
    <Link className="wordmark dark preserved-mark" href="/" aria-label="乡土国际 Countryside International"><img src="/assets/xiangtu-identity.png" alt="乡土国际"/></Link>
    <nav aria-label="主导航"><Link href="/#field">四坪现场 / Field</Link><Link href="/#relations">交叉现场 / Chapters</Link><Link href="/#atlas">乡土图谱 / Atlas</Link><Link href="/about">关于</Link></nav>
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="shell footer-grid">
    <div><strong>乡土国际</strong><p>以世界为视野，以乡土为学院，以社会为现场。</p></div>
    <div><span>福建 · 屏南 · 四坪村</span><span>持续更新的学习平台与项目网络</span></div>
    <div><Link href="/archive">进入档案网络 ↗</Link><small>© 2026 · 资料称谓与版权持续核验中</small></div>
  </div></footer>;
}
