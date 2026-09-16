import type { Metadata } from "next";
import "./globals.css";
import {CatalogLanguage} from '@/components/catalog-language';

export const metadata: Metadata = {
  title: "乡土国际｜以世界为视野，以乡土为学院",
  description: "中国美术学院视觉传播学院在福建屏南四坪村持续开展的乡建教育、社会创新与国际协作项目。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body><CatalogLanguage>{children}</CatalogLanguage></body></html>;
}
