'use client'

/*
  WebsiteShell — 메인 웹 앱 셸
  ┌─ Glassmorphism 헤더 (SUMMIT 로고 + D-Day 칩)
  ├─ 탭 콘텐츠 영역 (flex-1, 스크롤 가능)
  └─ 하단 탭바 (Home / Booking / Archive / My)
*/

import { useState } from 'react'
import { MobileShell } from '@/components/MobileShell'
import { HomeTab } from '@/components/tabs/HomeTab'
import { BookingTab } from '@/components/tabs/BookingTab'
import { ArchiveTab } from '@/components/tabs/ArchiveTab'
import { MyTab } from '@/components/tabs/MyTab'

type TabKey = 'home' | 'booking' | 'archive' | 'my'

interface Tab {
  key: TabKey
  label: string
  icon: string
}

const TABS: readonly Tab[] = [
  { key: 'home', label: 'Home', icon: '⌂' },
  { key: 'booking', label: 'Booking', icon: '⊞' },
  { key: 'archive', label: 'Archive', icon: '◈' },
  { key: 'my', label: 'My', icon: '○' },
]

export function WebsiteShell() {
  const [activeTab, setActiveTab] = useState<TabKey>('home')

  return (
    <MobileShell>
      <div className="flex min-h-dvh flex-col bg-black">
        {/*
          Glassmorphism 헤더 — 스크롤해도 상단 고정.
          backdrop-blur-md + bg-black/70 + border-b로 투과 효과 구현.
        */}
        <header className="sticky top-0 z-20 shrink-0 border-b border-white/5 bg-black/70 px-5 py-4 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <h1 className="font-bold italic tracking-tighter text-white text-xl">
              SUMMIT
            </h1>

            {/* D-Day 상태 칩 */}
            <div
              className="flex items-center gap-1.5 rounded-full border px-3 py-1"
              style={{
                borderColor: 'rgba(5, 255, 145, 0.2)',
                background: 'rgba(5, 255, 145, 0.08)',
              }}
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" />
              <span className="font-mono text-[9px] font-semibold uppercase tracking-wider text-neon">
                D-14
              </span>
            </div>
          </div>
        </header>

        {/* 탭 콘텐츠 */}
        <main className="flex min-h-0 flex-1 flex-col overflow-y-auto">
          {activeTab === 'home' && <HomeTab />}
          {activeTab === 'booking' && <BookingTab />}
          {activeTab === 'archive' && <ArchiveTab />}
          {activeTab === 'my' && <MyTab />}
        </main>

        {/*
          하단 탭바 — 블루프린트: Mobile Bottom Tab Bar
          safe-area-inset-bottom으로 노치 디바이스 대응.
        */}
        <nav
          className="shrink-0 border-t border-white/5 bg-black/80 backdrop-blur-md pb-[max(0.75rem,env(safe-area-inset-bottom))]"
          aria-label="주요 메뉴"
        >
          <ul className="flex">
            {TABS.map(({ key, label, icon }) => {
              const isActive = activeTab === key
              return (
                <li key={key} className="flex-1">
                  <button
                    type="button"
                    onClick={() => setActiveTab(key)}
                    className={[
                      'flex w-full flex-col items-center gap-0.5 pt-3 pb-1 transition-all duration-300',
                      isActive
                        ? 'text-neon'
                        : 'text-zinc-600 hover:text-zinc-400',
                    ].join(' ')}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="text-base leading-none">{icon}</span>
                    <span className="font-mono text-[9px] uppercase tracking-wider leading-none">
                      {label}
                    </span>
                    {/* 활성 탭 언더라인 */}
                    <span
                      className={[
                        'mt-1 h-0.5 rounded-full transition-all duration-300',
                        isActive ? 'w-4 bg-neon shadow-neon-glow-sm' : 'w-0',
                      ].join(' ')}
                    />
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </MobileShell>
  )
}
