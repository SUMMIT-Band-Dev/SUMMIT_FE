'use client'

import { useState } from 'react'
import { MobileShell } from '@/components/MobileShell'

/** 추후 메인 웹에 붙일 탭 셸 (현재 라우트 미연결) */
type TabKey = 'shows' | 'practice' | 'mypage'

const TABS: ReadonlyArray<{ key: TabKey; label: string }> = [
  { key: 'shows', label: '공연정보' },
  { key: 'practice', label: '합주실예약' },
  { key: 'mypage', label: '마이페이지' },
]

export function MainAppShell() {
  const [activeTab, setActiveTab] = useState<TabKey>('shows')

  return (
    <MobileShell innerClassName="flex flex-col overflow-hidden">
      <header className="shrink-0 border-b-4 border-black bg-zinc-900 px-5 py-4">
        <h1 className="text-center text-2xl font-black uppercase italic tracking-tighter text-lime-300">
          SUMMIT
        </h1>
        <p className="mt-1 text-center font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          {'// soongsil_band_unit'}
        </p>
      </header>

      <main className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-5">
        <div className="rounded-3xl border-2 border-black bg-zinc-800 p-8 shadow-[6px_6px_0_0_black]">
          <p className="text-sm leading-relaxed text-zinc-300">
            {activeTab === 'shows' &&
              '공연 일정과 상세 정보가 이 영역에 표시됩니다.'}
            {activeTab === 'practice' &&
              '합주실 예약 화면이 이 영역에 표시됩니다.'}
            {activeTab === 'mypage' &&
              '마이페이지(프로필·예약 내역 등)가 이 영역에 표시됩니다.'}
          </p>
        </div>
      </main>

      <nav
        className="shrink-0 border-t-4 border-black bg-zinc-950 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        aria-label="주요 메뉴"
      >
        <ul className="flex">
          {TABS.map(({ key, label }) => {
            const isActive = activeTab === key
            return (
              <li
                key={key}
                className="flex-1 border-r-2 border-black last:border-r-0"
              >
                <button
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={[
                    'w-full py-3.5 text-center text-[10px] font-black uppercase tracking-wide transition-colors',
                    isActive
                      ? 'bg-lime-300 text-black'
                      : 'bg-zinc-900 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300',
                  ].join(' ')}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </MobileShell>
  )
}
