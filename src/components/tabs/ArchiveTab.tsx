'use client'

/* ArchiveTab — 공연 아카이브, 셋리스트, 멤버 */

interface Show {
  id: string
  title: string
  date: string
  venue: string
  setlistCount: number
  tag: 'upcoming' | 'past'
}

const SHOWS: Show[] = [
  {
    id: 's1',
    title: '2025 SUMMIT 정기공연',
    date: '2025.11.08',
    venue: '숭실대학교 학생회관 소극장',
    setlistCount: 8,
    tag: 'upcoming',
  },
  {
    id: 's2',
    title: '2024 가을 정기공연',
    date: '2024.11.02',
    venue: '숭실대학교 학생회관 소극장',
    setlistCount: 10,
    tag: 'past',
  },
  {
    id: 's3',
    title: '2024 봄 정기공연',
    date: '2024.05.18',
    venue: '숭실대학교 학생회관 소극장',
    setlistCount: 9,
    tag: 'past',
  },
]

function ShowCard({ show }: { show: Show }) {
  const isUpcoming = show.tag === 'upcoming'

  return (
    <div
      className="rounded-2xl border p-5 transition-all duration-300 hover:border-white/10"
      style={{
        backgroundColor: '#0A0A0A',
        borderColor: isUpcoming
          ? 'rgba(5, 255, 145, 0.12)'
          : 'rgba(255, 255, 255, 0.06)',
        boxShadow: 'inset 0px 1px 1px rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <span
            className={[
              'inline-block rounded-full px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider',
              isUpcoming
                ? 'bg-neon/10 text-neon'
                : 'bg-zinc-800 text-zinc-500',
            ].join(' ')}
          >
            {isUpcoming ? 'UPCOMING' : 'ARCHIVED'}
          </span>
          <h3 className="mt-2 font-bold tracking-tight text-white text-sm leading-snug">
            {show.title}
          </h3>
          <p className="mt-1 font-mono text-[10px] text-zinc-600">
            {show.date} · {show.venue}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div
          className="flex items-center gap-1.5 rounded-full px-3 py-1"
          style={{ background: 'rgba(5, 255, 145, 0.08)' }}
        >
          <span className="font-mono text-[9px] text-zinc-500">SETLIST</span>
          <span className="font-mono text-[10px] font-bold text-neon">
            {show.setlistCount}
          </span>
        </div>

        <button
          type="button"
          className="rounded-full border border-white/8 px-3 py-1 font-mono text-[9px] text-zinc-500 transition-all duration-300 hover:border-neon/30 hover:text-neon"
        >
          VIEW →
        </button>
      </div>
    </div>
  )
}

export function ArchiveTab() {
  return (
    <div className="flex flex-col gap-4 px-4 py-5">
      <div>
        <p className="mb-3 px-1 font-mono text-[10px] uppercase tracking-widest text-zinc-600">
          {'// performance_archive'}
        </p>
        <div className="flex flex-col gap-3">
          {SHOWS.map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
      </div>

      {/* 멤버 섹션 */}
      <div
        className="rounded-2xl border p-5"
        style={{
          backgroundColor: '#0A0A0A',
          borderColor: 'rgba(255, 255, 255, 0.06)',
          boxShadow: 'inset 0px 1px 1px rgba(255, 255, 255, 0.05)',
        }}
      >
        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
          {'// band_members'}
        </p>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {['Vocal', 'Guitar', 'Bass', 'Drums', 'Keyboard', 'Guitar2'].map(
            (role) => (
              <div
                key={role}
                className="flex flex-col items-center gap-1.5 rounded-xl py-3"
                style={{ background: 'rgba(255, 255, 255, 0.03)' }}
              >
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full text-xs"
                  style={{ background: 'rgba(5, 255, 145, 0.1)', color: '#05FF91' }}
                >
                  ○
                </div>
                <span className="font-mono text-[8px] uppercase tracking-wide text-zinc-600">
                  {role}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}
