'use client'

import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { WebsiteScaffold } from '@/components/website/WebsiteScaffold'
import {
  fetchActivities,
  fetchDashboardStats,
} from '@/lib/websiteMockApi'

export default function WebsitePage() {
  const [isVideoModalOpen, setVideoModalOpen] = useState(false)
  const { data: stats } = useQuery({
    queryKey: ['website', 'stats'],
    queryFn: fetchDashboardStats,
  })
  const { data: activities } = useQuery({
    queryKey: ['website', 'activities'],
    queryFn: fetchActivities,
  })

  return (
    <WebsiteScaffold
      pageTitle="Artist Dashboard"
      pageDescription="써밋 여름 정기공연의 핵심 지표와 최근 활동을 한 곳에서 확인합니다."
    >
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'Subscribers', value: stats?.subscribers ?? '...' },
          { label: 'Downloads', value: stats?.downloads ?? '...' },
          { label: 'Monthly Listeners', value: stats?.monthlyListeners ?? '...' },
          {
            label: 'Active Campaigns',
            value: String(stats?.activeCampaigns ?? '...'),
          },
        ].map((item) => (
          <article
            key={item.label}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-400">
              {item.label}
            </p>
            <p className="mt-2 text-3xl font-extrabold">{item.value}</p>
          </article>
        ))}
      </section>

      <section className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent Activities</h2>
          <button
            type="button"
            onClick={() => setVideoModalOpen(true)}
            className="grid h-[60px] w-[60px] place-items-center rounded-full border-2 border-white bg-white/10 text-white transition-transform hover:scale-105"
            aria-label="비디오 플레이어 열기"
          >
            ▶
          </button>
        </div>

        <div className="mt-4 space-y-3">
          {activities?.map((item) => (
            <article
              key={item.id}
              className="rounded-lg border border-white/10 bg-black/30 p-3"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <span className="text-xs text-zinc-500">{item.time}</span>
              </div>
              <p className="mt-1 text-sm text-zinc-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-[rgba(5,7,10,0.75)] p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-3xl rounded-xl border border-white/15 bg-black p-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">
                Video Player Modal
              </h3>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="rounded border border-white/20 px-2 py-1 text-xs"
              >
                닫기
              </button>
            </div>
            <div
              className="w-full overflow-hidden rounded-lg bg-zinc-900"
              style={{
                aspectRatio: '16 / 9',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              }}
            >
              <div className="grid h-full place-items-center text-sm text-zinc-400">
                SUMMIT LIVE TRAILER (16:9)
              </div>
            </div>
          </div>
        </div>
      )}
    </WebsiteScaffold>
  )
}
