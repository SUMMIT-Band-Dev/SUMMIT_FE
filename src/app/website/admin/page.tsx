'use client'

import { useQuery } from '@tanstack/react-query'
import { WebsiteScaffold } from '@/components/website/WebsiteScaffold'
import { fetchSponsors } from '@/lib/websiteMockApi'
import {
  canAccessAdmin,
  useWebsiteAccessStore,
} from '@/stores/websiteAccessStore'

export default function WebsiteAdminPage() {
  const role = useWebsiteAccessStore((state) => state.role)
  const isAllowed = canAccessAdmin(role)
  const { data: sponsors } = useQuery({
    queryKey: ['website', 'sponsors'],
    queryFn: fetchSponsors,
    enabled: isAllowed,
  })

  return (
    <WebsiteScaffold
      pageTitle="Super Admin Console"
      pageDescription="플랫폼 콘텐츠 정책과 스폰서십 파트너를 통합 관리합니다."
    >
      {!isAllowed ? (
        <section className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
          Super Admin 권한만 접근 가능합니다. 상단 Role을 Super Admin으로 변경해 확인해보세요.
        </section>
      ) : (
        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
          <h2 className="text-lg font-semibold">Sponsorship Management</h2>
          <div className="mt-3 space-y-2">
            {sponsors?.map((sponsor) => (
              <article
                key={sponsor.id}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-black/25 px-3 py-2"
              >
                <div>
                  <p className="text-sm font-semibold">{sponsor.name}</p>
                  <p className="text-xs text-zinc-400">예산 {sponsor.budget}</p>
                </div>
                <span
                  className={[
                    'rounded-full px-2 py-1 text-[11px] uppercase tracking-[0.12em]',
                    sponsor.status === 'active'
                      ? 'bg-emerald-400/20 text-emerald-300'
                      : 'bg-amber-400/20 text-amber-300',
                  ].join(' ')}
                >
                  {sponsor.status}
                </span>
              </article>
            ))}
          </div>
        </section>
      )}
    </WebsiteScaffold>
  )
}
