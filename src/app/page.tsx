'use client'

/*
  app/page.tsx → URL "/"
  (Vite의 src/main.tsx + App 라우트 "/"에 해당하는 홈 진입점)
*/
import { HomePage } from '@/components/HomePage'

export default function Home() {
  return <HomePage />
}
