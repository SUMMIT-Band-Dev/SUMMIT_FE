import { create } from 'zustand'
import type { UserRole } from '@/types/website'

interface WebsiteAccessState {
  role: UserRole
  notificationCount: number
  currentTrack: string
  isPlaying: boolean
  setRole: (role: UserRole) => void
  clearNotifications: () => void
  togglePlayer: () => void
}

export const useWebsiteAccessStore = create<WebsiteAccessState>((set) => ({
  role: 'fan',
  notificationCount: 3,
  currentTrack: 'SUMMIT - Fireline (Live)',
  isPlaying: true,
  setRole: (role) => set({ role }),
  clearNotifications: () => set({ notificationCount: 0 }),
  togglePlayer: () => set((state) => ({ isPlaying: !state.isPlaying })),
}))

export function canAccessAdmin(role: UserRole) {
  return role === 'super_admin'
}

export function canAccessStudio(role: UserRole) {
  return role === 'super_admin' || role === 'artist'
}
