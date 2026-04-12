'use client'

import { useQuery } from '@tanstack/react-query'
import { WebsiteScaffold } from '@/components/website/WebsiteScaffold'
import { fetchAlbums, fetchVideos } from '@/lib/websiteMockApi'

export default function WebsiteLibraryPage() {
  const { data: albums } = useQuery({
    queryKey: ['website', 'albums'],
    queryFn: fetchAlbums,
  })
  const { data: videos } = useQuery({
    queryKey: ['website', 'videos'],
    queryFn: fetchVideos,
  })

  return (
    <WebsiteScaffold
      pageTitle="Music Library"
      pageDescription="앨범과 비디오 콘텐츠를 탐색하고 재생 흐름을 관리합니다."
    >
      <section className="grid gap-4 xl:grid-cols-2">
        <article className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
          <h2 className="text-lg font-semibold">Albums</h2>
          <div className="mt-3 space-y-2">
            {albums?.map((album) => (
              <div
                key={album.id}
                className="rounded-lg border border-white/10 bg-black/25 p-3"
              >
                <p className="text-sm font-semibold">{album.title}</p>
                <p className="mt-1 text-xs text-zinc-400">
                  {album.artist} · {album.year} · {album.duration}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
          <h2 className="text-lg font-semibold">Music Videos</h2>
          <div className="mt-3 space-y-2">
            {videos?.map((video) => (
              <div
                key={video.id}
                className="rounded-lg border border-white/10 bg-black/25 p-3"
              >
                <p className="text-sm font-semibold">{video.title}</p>
                <p className="mt-1 text-xs text-zinc-400">
                  조회수 {video.viewCount} · 게시일 {video.publishedAt}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </WebsiteScaffold>
  )
}
