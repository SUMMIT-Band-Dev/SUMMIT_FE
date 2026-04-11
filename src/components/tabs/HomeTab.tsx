'use client'

/* HomeTab — 공연 D-Day, 최근 활동, 빠른 링크 */

interface StatusChipProps {
  label: string
  live?: boolean
}

function StatusChip({ label, live = false }: StatusChipProps) {
  return (
    <span className="flex items-center gap-1.5 rounded-full border border-neon/20 bg-neon/10 px-3 py-1">
      {live && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" />}
      <span className="font-mono text-[9px] font-semibold uppercase tracking-wider text-neon">
        {label}
      </span>
    </span>
  )
}

/* design.json contentCards 스타일 공통 카드 */
function MetrilloCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-2xl border p-5 ${className}`}
      style={{
        backgroundColor: '#0A0A0A',
        borderColor: 'rgba(255, 255, 255, 0.06)',
        boxShadow: 'inset 0px 1px 1px rgba(255, 255, 255, 0.05)',
      }}
    >
      {children}
    </div>
  )
}

/* mock 데이터 */
const UPCOMING_SHOW = {
  title: '2025 SUMMIT 정기공연',
  date: '2025.11.08',
  dday: 14,
  venue: '숭실대학교 학생회관 소극장',
}

const RECENT_ACTIVITY = [
  { id: '1', text: '합주실 A 예약이 승인되었습니다.', time: '2h ago' },
  { id: '2', text: '정기공연 셋리스트가 업데이트되었습니다.', time: '1d ago' },
  { id: '3', text: '신입 부원 모집이 시작되었습니다.', time: '3d ago' },
]

export function HomeTab() {
  return (
    <div className="flex flex-col gap-4 px-4 py-5">
      {/* D-Day 카드 */}
      <MetrilloCard>
        <div className="flex items-start justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
              {'// next_performance'}
            </p>
            <h2 className="mt-2 font-bold tracking-tight text-white text-lg leading-snug">
              {UPCOMING_SHOW.title}
            </h2>
            <p className="mt-1 text-xs text-zinc-500">{UPCOMING_SHOW.venue}</p>
            <p className="mt-0.5 font-mono text-xs text-zinc-600">
              {UPCOMING_SHOW.date}
            </p>
          </div>
          <StatusChip label={`D-${UPCOMING_SHOW.dday}`} live />
        </div>

        {/* 진행 바 (D-Day까지 남은 기간 시각화) */}
        <div className="mt-4">
          <div className="flex w-full gap-0.5">
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className={[
                  'h-1 flex-1 rounded-full transition-all duration-500',
                  i < 20 - UPCOMING_SHOW.dday ? 'bg-neon/70' : 'bg-zinc-800',
                ].join(' ')}
              />
            ))}
          </div>
          <p className="mt-1.5 text-right font-mono text-[9px] text-zinc-700">
            {UPCOMING_SHOW.dday} days remaining
          </p>
        </div>
      </MetrilloCard>

      {/* 시스템 상태 */}
      <MetrilloCard>
        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
          {'// system_status'}
        </p>
        <div className="mt-3 flex flex-col gap-2.5">
          {[
            { label: '합주실 예약 시스템', status: 'ONLINE' },
            { label: '공연 정보 DB', status: 'SYNCING' },
            { label: '관리자 패널', status: 'RESTRICTED' },
          ].map(({ label, status }) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-xs text-zinc-400">{label}</span>
              <span
                className={[
                  'font-mono text-[9px] font-bold uppercase tracking-wider',
                  status === 'ONLINE' ? 'text-neon' : '',
                  status === 'SYNCING' ? 'text-yellow-400' : '',
                  status === 'RESTRICTED' ? 'text-zinc-600' : '',
                ].join(' ')}
              >
                {status}
              </span>
            </div>
          ))}
        </div>
      </MetrilloCard>

      {/* 최근 활동 */}
      <MetrilloCard>
        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
          {'// recent_activity'}
        </p>
        <ul className="mt-3 flex flex-col gap-3">
          {RECENT_ACTIVITY.map(({ id, text, time }) => (
            <li key={id} className="flex items-start gap-3">
              <span
                className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                style={{ background: 'var(--neon)' }}
              />
              <div className="flex-1">
                <p className="text-xs leading-snug text-zinc-300">{text}</p>
                <p className="mt-0.5 font-mono text-[9px] text-zinc-700">
                  {time}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </MetrilloCard>
    </div>
  )
}
