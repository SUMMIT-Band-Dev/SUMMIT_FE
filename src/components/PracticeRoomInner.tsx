'use client'

import Link from 'next/link'

/** 소모임실 대여(Reservation) 플레이스홀더 — 다크 테크 테마 */
export function PracticeRoomInner() {
  const linkClass =
    'font-mono text-xs font-bold uppercase tracking-wide text-zinc-500 underline decoration-zinc-600 decoration-2 underline-offset-4 transition hover:text-lime-300 hover:decoration-lime-300'

  return (
    <div
      className="flex min-h-0 flex-1 flex-col p-4"
      aria-label="소모임실 대여 페이지"
    >
      <Link href="/" className={linkClass}>
        {'← // back_to: core_system'}
      </Link>

      <div className="mt-10 flex flex-1 flex-col">
        <div className="rounded-3xl border-2 border-black bg-zinc-800 p-8 shadow-[6px_6px_0_0_black]">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            {'// module: reservation'}
          </p>
          <p className="mt-4 text-sm text-zinc-400">
            대여 UI는 이 카드 영역에 연결됩니다.
          </p>
        </div>
      </div>
    </div>
  )
}
