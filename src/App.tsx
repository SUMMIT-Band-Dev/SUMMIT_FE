import { useState } from 'react'

type TabKey = 'shows' | 'practice' | 'mypage'

const TABS: ReadonlyArray<{ key: TabKey; label: string }> = [
  { key: 'shows', label: '공연정보' },
  { key: 'practice', label: '합주실예약' },
  { key: 'mypage', label: '마이페이지' },
]

function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('shows')

  return (
    <div className="min-h-dvh bg-zinc-950 flex justify-center">
      <div className="flex w-full max-w-[430px] min-h-dvh flex-col bg-white shadow-2xl shadow-black/40">
        <header className="shrink-0 border-b border-zinc-200/90 bg-white px-5 py-4">
          <h1 className="text-center font-black uppercase tracking-[0.35em] text-zinc-900">
            SUMMIT
          </h1>
          <p className="mt-1 text-center text-xs font-medium text-zinc-500">
            숭실대학교 밴드
          </p>
        </header>

        <main className="flex min-h-0 flex-1 flex-col px-4 py-5">
          <p className="text-sm leading-relaxed text-zinc-600">
            {activeTab === 'shows' && '공연 일정과 상세 정보가 이 영역에 표시됩니다.'}
            {activeTab === 'practice' && '합주실 예약 화면이 이 영역에 표시됩니다.'}
            {activeTab === 'mypage' && '마이페이지(프로필·예약 내역 등)가 이 영역에 표시됩니다.'}
          </p>
        </main>

        <nav
          className="shrink-0 border-t border-zinc-200 bg-zinc-50/80 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-sm"
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
                      'w-full py-3.5 text-center text-xs font-semibold transition-colors',
                      isActive
                        ? 'text-zinc-900'
                        : 'text-zinc-400 hover:text-zinc-600',
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
      </div>
    </div>
  )
}

export default App
