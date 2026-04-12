import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from '@/components/providers/AppProviders'

/*
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ Next.js(App Router) vs Vite+React (아주 짧게)                            │
  ├─────────────────────────────────────────────────────────────────────────┤
  │ • 진입 HTML: Vite는 프로젝트 루트의 index.html. Next는 app/layout.tsx가  │
  │   <html>/<body> 뼈대를 만들고, 그 안에 {children}으로 각 페이지를 끼움.   │
  │ • 라우팅: Vite는 보통 react-router. Next는 app/ 폴더 경로가 곧 URL       │
  │   (예: app/website/page.tsx → /website).                                 │
  │ • 이 파일(layout)은 기본이 Server Component라 metadata(타이틀 등)를       │
  │   export 할 수 있음. 'use client'를 쓰면 브라우저 훅은 쓸 수 있지만       │
  │   metadata export는 불가 → 그래서 루트 레이아웃은 서버에 두는 경우가 많음.│
  └─────────────────────────────────────────────────────────────────────────┘
*/

export const metadata: Metadata = {
  title: "SUMMIT",
  description: "숭실대 밴드 써밋 모바일 웹",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
