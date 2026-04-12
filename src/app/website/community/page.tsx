'use client'

import { useQuery } from '@tanstack/react-query'
import { WebsiteScaffold } from '@/components/website/WebsiteScaffold'
import { fetchCommunityPosts } from '@/lib/websiteMockApi'

export default function WebsiteCommunityPage() {
  const { data: posts } = useQuery({
    queryKey: ['website', 'community'],
    queryFn: fetchCommunityPosts,
  })

  return (
    <WebsiteScaffold
      pageTitle="Fan Community Hub"
      pageDescription="써밋 회원 전용 공지, 투표, 소통 피드를 확인할 수 있는 공간입니다."
    >
      <section className="space-y-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
        {posts?.map((post) => (
          <article
            key={post.id}
            className="rounded-lg border border-white/10 bg-black/25 p-4"
          >
            <p className="text-xs uppercase tracking-[0.12em] text-zinc-500">
              @{post.author}
            </p>
            <h2 className="mt-1 text-base font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-zinc-300">{post.summary}</p>
            <p className="mt-3 text-xs text-zinc-400">
              좋아요 {post.likes} · 댓글 {post.comments}
            </p>
          </article>
        ))}
      </section>
    </WebsiteScaffold>
  )
}
