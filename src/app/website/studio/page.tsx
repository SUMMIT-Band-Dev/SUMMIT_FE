'use client'

import { WebsiteScaffold } from '@/components/website/WebsiteScaffold'
import {
  canAccessStudio,
  useWebsiteAccessStore,
} from '@/stores/websiteAccessStore'

export default function WebsiteStudioPage() {
  const role = useWebsiteAccessStore((state) => state.role)
  const isAllowed = canAccessStudio(role)

  return (
    <WebsiteScaffold
      pageTitle="Media Studio"
      pageDescription="영상 및 음원 업로드, 메타데이터 관리, 배포 상태를 확인합니다."
    >
      {!isAllowed ? (
        <section className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
          Artist 또는 Super Admin 권한이 필요합니다. 상단의 Role 선택 메뉴에서 권한을 변경해 확인해보세요.
        </section>
      ) : (
        <section className="grid gap-4 xl:grid-cols-2">
          <article className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <h2 className="text-lg font-semibold">Upload Workspace</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Music Videos와 음원을 업로드하고 릴리스 태그를 등록할 수 있습니다.
            </p>
            <div className="mt-4 rounded-lg border border-dashed border-white/20 p-5 text-center text-sm text-zinc-500">
              드래그 앤 드롭 업로드 영역
            </div>
          </article>

          <article className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <h2 className="text-lg font-semibold">Release Queue</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li className="rounded-md border border-white/10 bg-black/25 px-3 py-2">
                Fireline Live Cut · 인코딩 진행중 (72%)
              </li>
              <li className="rounded-md border border-white/10 bg-black/25 px-3 py-2">
                Summer Resonance EP · 메타데이터 검수 대기
              </li>
            </ul>
          </article>
        </section>
      )}
    </WebsiteScaffold>
  )
}
