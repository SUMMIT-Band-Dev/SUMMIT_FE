'use client'

/* MyTab — 유저 프로필, 예약 내역 */

interface Reservation {
  id: string
  room: string
  date: string
  time: string
  status: 'confirmed' | 'pending' | 'cancelled'
}

const MY_RESERVATIONS: Reservation[] = [
  { id: 'rv1', room: '합주실 A', date: '2025.01.20', time: '14:00 - 16:00', status: 'confirmed' },
  { id: 'rv2', room: '소모임실 1', date: '2025.01.18', time: '10:00 - 12:00', status: 'pending' },
  { id: 'rv3', room: '합주실 B', date: '2025.01.10', time: '16:00 - 18:00', status: 'cancelled' },
]

const STATUS_META: Record<
  Reservation['status'],
  { label: string; color: string }
> = {
  confirmed: { label: 'CONFIRMED', color: 'text-neon' },
  pending: { label: 'PENDING', color: 'text-yellow-400' },
  cancelled: { label: 'CANCELLED', color: 'text-zinc-600' },
}

export function MyTab() {
  return (
    <div className="flex flex-col gap-4 px-4 py-5">
      {/* 프로필 카드 */}
      <div
        className="rounded-2xl border p-5"
        style={{
          backgroundColor: '#0A0A0A',
          borderColor: 'rgba(5, 255, 145, 0.1)',
          boxShadow: 'inset 0px 1px 1px rgba(255, 255, 255, 0.05)',
        }}
      >
        <div className="flex items-center gap-4">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-xl"
            style={{
              background: 'rgba(5, 255, 145, 0.08)',
              borderColor: 'rgba(5, 255, 145, 0.2)',
              color: '#05FF91',
            }}
          >
            ○
          </div>
          <div>
            <p className="font-bold text-white text-sm">숭실대학교 학생</p>
            <p className="font-mono text-[10px] text-zinc-600">
              USER // ROLE: MEMBER
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { label: '총 예약', value: '3' },
            { label: '확정', value: '1' },
            { label: '대기 중', value: '1' },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 rounded-xl py-3"
              style={{ background: 'rgba(255, 255, 255, 0.03)' }}
            >
              <span className="font-mono text-base font-bold text-neon">
                {value}
              </span>
              <span className="font-mono text-[9px] text-zinc-600">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 예약 내역 */}
      <div>
        <p className="mb-3 px-1 font-mono text-[10px] uppercase tracking-widest text-zinc-600">
          {'// my_reservations'}
        </p>
        <div className="flex flex-col gap-3">
          {MY_RESERVATIONS.map((rv) => {
            const meta = STATUS_META[rv.status]
            return (
              <div
                key={rv.id}
                className="rounded-2xl border p-4 transition-all duration-300 hover:border-white/10"
                style={{
                  backgroundColor: '#0A0A0A',
                  borderColor: 'rgba(255, 255, 255, 0.06)',
                  boxShadow: 'inset 0px 1px 1px rgba(255, 255, 255, 0.05)',
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-white text-sm">{rv.room}</p>
                    <p className="mt-0.5 font-mono text-[10px] text-zinc-600">
                      {rv.date} · {rv.time}
                    </p>
                  </div>
                  <span
                    className={`font-mono text-[9px] font-bold ${meta.color}`}
                  >
                    {meta.label}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 로그아웃 버튼 */}
      <button
        type="button"
        className="mt-2 w-full rounded-full border border-white/8 py-3.5 font-mono text-xs text-zinc-600 transition-all duration-300 hover:border-red-900/40 hover:text-red-400"
      >
        LOGOUT
      </button>
    </div>
  )
}
