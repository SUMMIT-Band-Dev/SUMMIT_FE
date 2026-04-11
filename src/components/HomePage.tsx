'use client'

import Link from 'next/link'
import { DeployProgressBlocks } from '@/components/DeployProgressBlocks'
import { MobileShell } from '@/components/MobileShell'

const BTN =
  'block w-full border-4 border-black bg-lime-300 px-4 py-3.5 text-center text-sm font-black uppercase tracking-wide text-black shadow-[4px_4px_0_0_black] transition hover:translate-x-px hover:translate-y-px hover:shadow-[3px_3px_0_0_black] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none'

/** 홈(게이트웨이) — Neo-Brutalism + Dark Tech */
export function HomePage() {
  return (
    <MobileShell innerClassName="relative flex flex-col overflow-hidden">
      <div className="flex min-h-0 flex-1 flex-col px-4 py-6">
        <header className="mb-6 shrink-0 text-center">
          <p className="text-[clamp(2rem,8vw,2.75rem)] font-black uppercase italic leading-none tracking-tighter text-lime-300">
            SUMMIT
          </p>
        </header>

        <div className="mx-auto w-full max-w-sm shrink-0 rounded-3xl border-2 border-black bg-zinc-800 p-8 shadow-[6px_6px_0_0_rgb(0,0,0)]">
          <h1 className="text-balance font-black uppercase leading-tight tracking-tight text-white">
            🐺 SUMMIT // CORE_SYSTEM
          </h1>
          <p className="mt-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-lime-300 sm:text-xs">
            PREPARING FOR GLOBAL DEPLOYMENT...
          </p>
          <p className="mt-5 text-pretty text-sm leading-relaxed text-zinc-400">
            Our team is architecting a new digital hub for Summit. We&apos;re
            building the infrastructure for the premier band organization.
          </p>
          <div className="mt-8">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
              {'// deploy_status'}
            </p>
            <DeployProgressBlocks filled={9} total={14} />
          </div>
        </div>

        <nav
          className="mx-auto mt-8 flex w-full max-w-sm flex-col gap-3"
          aria-label="바로가기"
        >
          <Link href="/website" className={BTN}>
            웹사이트 이동하기
          </Link>
          <Link href="/reservation" className={BTN}>
            소모임실 대여 페이지 이동하기
          </Link>
        </nav>

        <footer className="mt-auto shrink-0 pt-10 text-center">
          <p className="font-mono text-[10px] leading-relaxed text-zinc-600">
            {'// developed_by: @xodudgks // build: alpha-v0.2'}
          </p>
        </footer>
      </div>
    </MobileShell>
  )
}
