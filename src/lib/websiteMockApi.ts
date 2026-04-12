import type {
  ActivityItem,
  AlbumItem,
  CommunityPost,
  DashboardStats,
  SponsorItem,
  VideoItem,
} from '@/types/website'

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const dashboardStats: DashboardStats = {
  subscribers: '108M+',
  downloads: '35M+',
  monthlyListeners: '62.4M',
  activeCampaigns: 8,
}

const activities: ActivityItem[] = [
  {
    id: 'a1',
    title: 'SUMMIT Summer Live 2026 Setlist 확정',
    description: '오프닝부터 앵콜까지 14곡 구성으로 최종 배치 완료',
    time: '10분 전',
    type: 'release',
  },
  {
    id: 'a2',
    title: 'Spotify 메인 스폰서 배너 집행 시작',
    description: '신규 구독자 전환 캠페인 A/B 테스트 동시 진행',
    time: '40분 전',
    type: 'sponsor',
  },
  {
    id: 'a3',
    title: '팬 커뮤니티 공지 게시',
    description: '공연장 입장 동선 및 MD 판매 시간 안내',
    time: '1시간 전',
    type: 'community',
  },
]

const albums: AlbumItem[] = [
  {
    id: 'al1',
    title: 'Summit Summer Resonance',
    artist: 'SUMMIT',
    duration: '42:15',
    year: '2026',
  },
  {
    id: 'al2',
    title: 'Neon Midnight Live Cuts',
    artist: 'SUMMIT',
    duration: '38:04',
    year: '2025',
  },
  {
    id: 'al3',
    title: 'Blueprint Sessions',
    artist: 'SUMMIT Unit',
    duration: '29:40',
    year: '2024',
  },
]

const videos: VideoItem[] = [
  {
    id: 'v1',
    title: 'SUMMIT - Fireline (Official Live MV)',
    viewCount: '12.8M',
    publishedAt: '2026-03-28',
  },
  {
    id: 'v2',
    title: 'Backstage Documentary: Summer Regular',
    viewCount: '2.3M',
    publishedAt: '2026-04-02',
  },
]

const communityPosts: CommunityPost[] = [
  {
    id: 'p1',
    author: 'summit_manager',
    title: '좌석 배치도 및 입장 시간 안내',
    summary: '공연 당일 혼잡을 줄이기 위해 30분 단위 입장 안내를 공지합니다.',
    likes: 812,
    comments: 129,
  },
  {
    id: 'p2',
    author: 'guitar_hyun',
    title: '신곡 라이브 편곡 투표 진행',
    summary: '팬분들이 선택한 버전으로 엔딩 브릿지를 준비할 예정입니다.',
    likes: 1330,
    comments: 244,
  },
]

const sponsors: SponsorItem[] = [
  { id: 's1', name: 'Spotify', status: 'active', budget: '$280,000' },
  { id: 's2', name: 'Deezer', status: 'pending', budget: '$120,000' },
]

export async function fetchDashboardStats() {
  await wait(250)
  return dashboardStats
}

export async function fetchActivities() {
  await wait(280)
  return activities
}

export async function fetchAlbums() {
  await wait(220)
  return albums
}

export async function fetchVideos() {
  await wait(220)
  return videos
}

export async function fetchCommunityPosts() {
  await wait(240)
  return communityPosts
}

export async function fetchSponsors() {
  await wait(300)
  return sponsors
}
