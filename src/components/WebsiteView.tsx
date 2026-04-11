'use client'

import Link from 'next/link'
import { MobileShell } from '@/components/MobileShell'

export function WebsiteView() {
  return (
    <MobileShell innerClassName="relative flex flex-col overflow-hidden">
      <div className="flex min-h-0 flex-1 flex-col p-4">
        <Link
          href="/"
          className="font-mono text-xs font-bold uppercase tracking-wide text-zinc-500 underline decoration-zinc-600 decoration-2 underline-offset-4 transition hover:text-lime-300 hover:decoration-lime-300"
        >
          {'← // back_to: core_system'}
        </Link>

        <div className="mt-10 flex flex-1 flex-col">
          <div className="rounded-3xl border-2 border-black bg-zinc-800 p-8 shadow-[6px_6px_0_0_black]">
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              {'// module: website'}
            </p>
            <p className="mt-4 text-sm text-zinc-400">
              정식 웹 메인은 이 카드 영역에 연결됩니다.
            </p>
          </div>
        </div>
      </div>
    </MobileShell>
  )
}
