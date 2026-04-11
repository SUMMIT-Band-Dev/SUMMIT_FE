'use client'

import { useState } from 'react'

/* BookingTab — 합주실 실시간 현황 + 예약 신청 */

interface Room {
  id: string
  name: string
  capacity: number
  status: 'available' | 'occupied' | 'maintenance'
}

/* mock 데이터 */
const ROOMS: Room[] = [
  { id: 'r1', name: '합주실 A', capacity: 8, status: 'available' },
  { id: 'r2', name: '합주실 B', capacity: 6, status: 'occupied' },
  { id: 'r3', name: '소모임실 1', capacity: 4, status: 'available' },
  { id: 'r4', name: '소모임실 2', capacity: 4, status: 'maintenance' },
]

const STATUS_META: Record<
  Room['status'],
  { label: string; color: string; dot: string }
> = {
  available: { label: 'AVAILABLE', color: 'text-neon', dot: 'bg-neon' },
  occupied: { label: 'OCCUPIED', color: 'text-red-400', dot: 'bg-red-400' },
  maintenance: {
    label: 'MAINTENANCE',
    color: 'text-zinc-600',
    dot: 'bg-zinc-600',
  },
}

function RoomCard({ room }: { room: Room }) {
  const meta = STATUS_META[room.status]

  return (
    <div
      className="rounded-2xl border p-4 transition-all duration-300 hover:border-white/10"
      style={{
        backgroundColor: '#0A0A0A',
        borderColor: 'rgba(255, 255, 255, 0.06)',
        boxShadow: 'inset 0px 1px 1px rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-white text-sm">{room.name}</p>
          <p className="mt-0.5 font-mono text-[10px] text-zinc-600">
            MAX {room.capacity} PERSONS
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
          <span className={`font-mono text-[9px] font-bold ${meta.color}`}>
            {meta.label}
          </span>
        </div>
      </div>

      {room.status === 'available' && (
        <button
          type="button"
          className="mt-3 w-full rounded-full bg-neon py-2.5 text-center text-xs font-bold text-black shadow-neon-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          예약하기
        </button>
      )}
    </div>
  )
}

export function BookingTab() {
  const [selectedDate, setSelectedDate] = useState('today')

  return (
    <div className="flex flex-col gap-4 px-4 py-5">
      {/* 날짜 셀렉터 */}
      <div
        className="rounded-2xl border p-4"
        style={{
          backgroundColor: '#0A0A0A',
          borderColor: 'rgba(255, 255, 255, 0.06)',
          boxShadow: 'inset 0px 1px 1px rgba(255, 255, 255, 0.05)',
        }}
      >
        <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-zinc-600">
          {'// select_date'}
        </p>
        <div className="flex gap-2">
          {['today', 'tomorrow', 'this_week'].map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setSelectedDate(d)}
              className={[
                'flex-1 rounded-full border py-2 text-center font-mono text-[10px] uppercase tracking-wide transition-all duration-300',
                selectedDate === d
                  ? 'border-neon bg-neon/10 text-neon shadow-neon-glow-sm'
                  : 'border-white/5 text-zinc-600 hover:border-white/10 hover:text-zinc-400',
              ].join(' ')}
            >
              {d.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* 방 목록 */}
      <div>
        <p className="mb-3 px-1 font-mono text-[10px] uppercase tracking-widest text-zinc-600">
          {'// room_status'}
        </p>
        <div className="flex flex-col gap-3">
          {ROOMS.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>

      {/* 예약 안내 */}
      <div
        className="rounded-2xl border p-4"
        style={{
          backgroundColor: '#0A0A0A',
          borderColor: 'rgba(5, 255, 145, 0.12)',
          boxShadow: 'inset 0px 1px 1px rgba(255, 255, 255, 0.05)',
        }}
      >
        <p className="font-mono text-[10px] uppercase tracking-widest text-neon/60">
          {'// booking_info'}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-zinc-500">
          예약은 최대 2시간 단위로 신청 가능하며, 써밋 멤버의 승인 후 확정됩니다.
        </p>
      </div>
    </div>
  )
}
