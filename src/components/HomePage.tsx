'use client'

import Link from 'next/link'
import { DeployProgressBlocks } from '@/components/DeployProgressBlocks'
import { MobileShell } from '@/components/MobileShell'

/*
  design.json 적용 요약:
  - heroSection.background: radial-gradient(at top center, #011C11 0%, #000000 60%)
  - heading: text-white font-bold tracking-tighter text-5xl
  - subheading: text-zinc-400 leading-relaxed
  - primaryButton: bg-neon, black text, neon glow shadow, hover scale 1.05
  - contentCards: #0A0A0A surface, rgba(255,255,255,0.05) border, inset elevation
  - borderRadius.action = 9999px → rounded-full (버튼)
  - borderRadius.container = 24px → rounded-3xl (메인 카드)
  - borderThickness = 1px → border (테두리 굵기)
*/

const BTN_PRIMARY =
  'block w-full rounded-full bg-neon px-6 py-4 text-center text-sm font-bold text-black shadow-neon-glow transition-all duration-300 hover:scale-105 active:scale-[0.98]'

const BTN_GHOST =
  'block w-full rounded-full border border-white/10 bg-white/5 px-6 py-4 text-center text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-neon/30 active:scale-[0.98]'

export function HomePage() {
  return (
    <MobileShell>
      <div
        className="flex min-h-dvh flex-col"
        style={{
          /* design.json heroSection.background */
          background: 'radial-gradient(at top center, #011C11 0%, #000000 60%)',
        }}
      >
        {/* ── 헤더 영역 ── */}
        <header className="shrink-0 px-6 pt-16 pb-8">
          {/* 시스템 상태 칩 */}
          <div className="mb-5 flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-neon/60">
              {'// SUMMIT // CORE_SYSTEM'}
            </span>
          </div>

          {/* design.json heading 클래스 그대로 적용 */}
          <h1 className="font-bold tracking-tighter text-white text-5xl leading-none">
            SUMMIT
          </h1>

          {/* design.json subheading */}
          <p className="mt-3 max-w-[260px] text-zinc-400 leading-relaxed text-sm">
            숭실대학교 IT 유일 밴드 &mdash;
            <br />
            브랜드 허브를 구축하고 있습니다.
          </p>
        </header>

        {/* ── 메인 콘텐츠 카드 ── */}
        <div className="shrink-0 px-4">
          {/*
            design.json contentCards:
            surfaceColor #0A0A0A · border rgba(255,255,255,0.05) · inset elevation
            borderRadius.container = 24px = rounded-3xl
          */}
          <div
            className="w-full rounded-3xl border p-6"
            style={{
              backgroundColor: '#0A0A0A',
              borderColor: 'rgba(255, 255, 255, 0.05)',
              boxShadow: 'inset 0px 1px 1px rgba(255, 255, 255, 0.05)',
            }}
          >
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-neon/50">
              {'// deploy_status'}
            </p>

            <DeployProgressBlocks filled={9} total={14} />

            <p className="mt-3 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-neon/80">
              PREPARING FOR GLOBAL DEPLOYMENT...
            </p>

            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Our team is architecting a new digital hub for Summit.
              We&apos;re building the infrastructure for the premier band
              organization.
            </p>

            {/* 아이콘 렌더링 — design.json iconRendering */}
            <div className="mt-5 flex gap-3">
              {[
                { label: '공연정보', icon: '◈' },
                { label: '합주실', icon: '⊞' },
                { label: '멤버', icon: '○' },
              ].map(({ label, icon }) => (
                <div
                  key={label}
                  className="flex flex-1 flex-col items-center gap-1.5 rounded-2xl py-3"
                  /* design.json iconRendering.background */
                  style={{ background: 'rgba(5, 255, 145, 0.08)' }}
                >
                  <span
                    className="text-lg"
                    /* design.json iconRendering.fillColor */
                    style={{ color: '#05FF91' }}
                  >
                    {icon}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wide text-zinc-500">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 네비게이션 버튼 ── */}
        <nav
          className="mt-6 shrink-0 flex flex-col gap-3 px-4"
          aria-label="바로가기"
        >
          {/* design.json primaryButton */}
          <Link href="/website" className={BTN_PRIMARY}>
            웹사이트 이동하기
          </Link>

          {/* 보조 버튼 (ghost) */}
          <Link href="/reservation" className={BTN_GHOST}>
            소모임실 대여 페이지 이동하기
          </Link>
        </nav>

        {/* ── 푸터 ── */}
        <footer className="mt-auto shrink-0 py-8 text-center px-4">
          <p className="font-mono text-[10px] text-zinc-800">
            {'// developed_by: @xodudgks // build: alpha-v0.2'}
          </p>
        </footer>
      </div>
    </MobileShell>
  )
}
