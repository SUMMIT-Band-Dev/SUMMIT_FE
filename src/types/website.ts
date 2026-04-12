export type UserRole = 'super_admin' | 'artist' | 'fan'

export interface DashboardStats {
  subscribers: string
  downloads: string
  monthlyListeners: string
  activeCampaigns: number
}

export interface ActivityItem {
  id: string
  title: string
  description: string
  time: string
  type: 'release' | 'stream' | 'community' | 'sponsor'
}

export interface AlbumItem {
  id: string
  title: string
  artist: string
  duration: string
  year: string
}

export interface VideoItem {
  id: string
  title: string
  viewCount: string
  publishedAt: string
}

export interface CommunityPost {
  id: string
  author: string
  title: string
  summary: string
  likes: number
  comments: number
}

export interface SponsorItem {
  id: string
  name: string
  status: 'active' | 'pending'
  budget: string
}
