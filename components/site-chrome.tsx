import Link from "next/link";

export function InnerHeader() {
  return <header className="inner-header shell">
    <Link className="wordmark dark" href="/"><span>乡土国际</span><small>Countryside International</small></Link>
    <nav aria-label="主导航"><Link href="/station">工作站</Link><Link href="/projects/amend-pingnan">项目</Link><Link href="/workshop">当前工作坊</Link><Link href="/archive">档案网络</Link><Link href="/about">关于</Link></nav>
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="shell footer-grid">
    <div><strong>乡土国际</strong><p>以世界为视野，以乡土为学院，以社会为现场。</p></div>
    <div><span>福建 · 屏南 · 四坪村</span><span>持续更新的学习平台与项目网络</span></div>
    <div><Link href="/archive">进入档案网络 ↗</Link><small>© 2026 · 资料称谓与版权持续核验中</small></div>
  </div></footer>;
}
