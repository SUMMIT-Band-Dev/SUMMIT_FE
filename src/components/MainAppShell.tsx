'use client'

/*
  MainAppShell — 추후 라우트로 연결할 예정인 탭 셸.
  현재는 WebsiteShell이 이 역할을 담당합니다.
  Metrillo 디자인 시스템 적용.
*/
import { useState } from 'react'
import { MobileShell } from '@/components/MobileShell'

type TabKey = 'shows' | 'practice' | 'mypage'

const TABS: ReadonlyArray<{ key: TabKey; label: string }> = [
  { key: 'shows', label: '공연정보' },
  { key: 'practice', label: '합주실예약' },
  { key: 'mypage', label: '마이페이지' },
]

export function MainAppShell() {
  const [activeTab, setActiveTab] = useState<TabKey>('shows')

  return (
    <MobileShell>
      <div className="flex min-h-dvh flex-col bg-black">
        <header className="sticky top-0 z-10 shrink-0 border-b border-white/5 bg-black/70 px-5 py-4 backdrop-blur-md">
          <h1 className="text-center font-bold italic tracking-tighter text-white text-xl">
            SUMMIT
          </h1>
          <p className="mt-0.5 text-center font-mono text-[9px] uppercase tracking-widest text-zinc-700">
            {'// soongsil_band_unit'}
          </p>
        </header>

        <main className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-5">
          <div
            className="rounded-2xl border p-6"
            style={{
              backgroundColor: '#0A0A0A',
              borderColor: 'rgba(255, 255, 255, 0.06)',
              boxShadow: 'inset 0px 1px 1px rgba(255, 255, 255, 0.05)',
            }}
          >
            <p className="text-sm leading-relaxed text-zinc-400">
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
          className="shrink-0 border-t border-white/5 bg-black/80 backdrop-blur-md pb-[max(0.75rem,env(safe-area-inset-bottom))]"
          aria-label="주요 메뉴"
        >
          <ul className="flex">
            {TABS.map(({ key, label }) => {
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
                    <span className="font-mono text-[10px] uppercase tracking-wide">
                      {label}
                    </span>
                    <span
                      className={[
                        'mt-1 h-0.5 rounded-full transition-all duration-300',
                        isActive ? 'w-4 bg-neon' : 'w-0',
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
