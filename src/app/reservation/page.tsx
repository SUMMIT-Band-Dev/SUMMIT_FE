'use client'

/* app/reservation/page.tsx → URL "/reservation" (소모임실 대여) */
import { MobileShell } from '@/components/MobileShell'
import { PracticeRoomInner } from '@/components/PracticeRoomInner'

export default function ReservationPage() {
  return (
    <MobileShell innerClassName="relative flex min-h-0 flex-col overflow-hidden">
      <PracticeRoomInner />
    </MobileShell>
  )
}
