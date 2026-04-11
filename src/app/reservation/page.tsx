'use client'

/* app/reservation/page.tsx → URL "/reservation"
   직접 URL로 진입할 때도 같은 BookingTab UI를 보여줍니다. */
import Link from 'next/link'
import { MobileShell } from '@/components/MobileShell'
import { BookingTab } from '@/components/tabs/BookingTab'

export default function ReservationPage() {
  return (
    <MobileShell>
      <div className="flex min-h-dvh flex-col bg-black">
        {/* 미니 헤더 */}
        <header className="shrink-0 border-b border-white/5 bg-black/70 px-5 py-4 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="font-mono text-[10px] font-bold uppercase tracking-wide text-zinc-600 transition-colors duration-300 hover:text-neon"
            >
              {'← CORE_SYSTEM'}
            </Link>
            <span className="font-bold italic tracking-tighter text-white text-base">
              SUMMIT
            </span>
          </div>
        </header>

        <main className="flex min-h-0 flex-1 flex-col overflow-y-auto">
          <BookingTab />
        </main>
      </div>
    </MobileShell>
  )
}
