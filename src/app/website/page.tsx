'use client'

/* app/website/page.tsx → URL "/website"
   Vite 환경에서는 react-router의 <Route path="/website"> 였지만,
   Next.js App Router에서는 이 파일의 경로 위치 자체가 라우트가 됩니다. */
import { WebsiteShell } from '@/components/WebsiteShell'

export default function WebsitePage() {
  return <WebsiteShell />
}
