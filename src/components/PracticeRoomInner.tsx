'use client'

import Link from 'next/link'

/*
  PracticeRoomInner — /reservation 직접 접근 시 사용되던 레거시 컴포넌트.
  현재는 BookingTab이 대체하며, 이 컴포넌트는 호환성 유지용.
*/
interface PracticeRoomInnerProps {
  onBackToLanding?: () => void
}

export function PracticeRoomInner({ onBackToLanding }: PracticeRoomInnerProps) {
  const linkClass =
    'font-mono text-[10px] font-bold uppercase tracking-wide text-zinc-600 transition-colors duration-300 hover:text-neon'

  return (
    <div className="flex min-h-0 flex-1 flex-col p-4" aria-label="소모임실 대여">
      {onBackToLanding ? (
        <button type="button" onClick={onBackToLanding} className={linkClass}>
          {'← // back_to: landing'}
        </button>
      ) : (
        <Link href="/" className={linkClass}>
          {'← // back_to: core_system'}
        </Link>
      )}

      <div className="mt-8 flex flex-1 flex-col">
        <div
          className="rounded-2xl border p-6"
          style={{
            backgroundColor: '#0A0A0A',
            borderColor: 'rgba(5, 255, 145, 0.1)',
            boxShadow: 'inset 0px 1px 1px rgba(255, 255, 255, 0.05)',
          }}
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-neon/50">
            {'// module: reservation'}
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            대여 UI는 이 영역에 연결됩니다.
          </p>
        </div>
      </div>
    </div>
  )
}
