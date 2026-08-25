import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "莎莎的个人看板",
  description: "RPA 教练莎莎的个人操作台：工作、思考、生活与创作的持续索引。",
  openGraph: { title: "莎莎的个人看板", description: "工作 · 思考 · 生活 · 创作", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "莎莎的个人看板", description: "工作 · 思考 · 生活 · 创作", images: ["/og.png"] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="zh-CN"><body>{children}</body></html>; }
