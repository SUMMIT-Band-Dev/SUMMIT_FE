'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FormEvent, ReactNode, useMemo, useState } from 'react'
import {
  canAccessAdmin,
  canAccessStudio,
  useWebsiteAccessStore,
} from '@/stores/websiteAccessStore'
import type { UserRole } from '@/types/website'

interface WebsiteScaffoldProps {
  pageTitle: string
  pageDescription: string
  children: ReactNode
}

const ROLE_LABELS: Record<UserRole, string> = {
  super_admin: 'Super Admin',
  artist: 'Artist',
  fan: 'Fan',
}

export function WebsiteScaffold({
  pageTitle,
  pageDescription,
  children,
}: WebsiteScaffoldProps) {
  const pathname = usePathname()
  const {
    role,
    setRole,
    notificationCount,
    clearNotifications,
    currentTrack,
    isPlaying,
    togglePlayer,
  } = useWebsiteAccessStore()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterMessage, setNewsletterMessage] = useState<
    'success' | 'error' | null
  >(null)

  const breadcrumbs = useMemo(() => {
    const parts = pathname.split('/').filter(Boolean).slice(1)
    const base = ['About Us', 'Artists', 'SUMMIT']
    return [...base, ...parts.map((part) => part.toUpperCase())]
  }, [pathname])

  const navItems = [
    { href: '/website', label: 'Artist Dashboard' },
    { href: '/website/library', label: 'Music Library' },
    { href: '/website/community', label: 'Fan Community Hub' },
    {
      href: '/website/studio',
      label: 'Media Studio',
      disabled: !canAccessStudio(role),
    },
    {
      href: '/website/admin',
      label: 'Admin Console',
      disabled: !canAccessAdmin(role),
    },
  ]

  function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const isValid = newsletterEmail.includes('@') && newsletterEmail.includes('.')
    setNewsletterMessage(isValid ? 'success' : 'error')
    if (isValid) {
      setNewsletterEmail('')
    }
  }

  return (
    <div
      className="min-h-dvh pb-24 text-white"
      style={{ backgroundColor: '#05070A' }}
    >
      <header
        className="sticky top-0 z-30 border-b border-white/10"
        style={{ height: '80px', backgroundColor: '#05070A' }}
      >
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-5">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm font-bold uppercase tracking-[0.16em]">
              SUMMIT
            </Link>
            <nav className="hidden items-center gap-5 md:flex">
              {navItems.slice(0, 4).map((item) => (
                <Link
                  key={item.href}
                  href={item.disabled ? pathname : item.href}
                  aria-disabled={item.disabled}
                  className={[
                    'text-xs uppercase tracking-[0.16em] transition-colors',
                    item.disabled
                      ? 'pointer-events-none text-zinc-600'
                      : 'text-white hover:text-[#B22234]',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={role}
              onChange={(event) => setRole(event.target.value as UserRole)}
              className="rounded border border-white/15 bg-transparent px-2 py-1 text-[11px] uppercase tracking-wider text-white"
              aria-label="접근 권한 선택"
            >
              <option value="fan">Fan</option>
              <option value="artist">Artist</option>
              <option value="super_admin">Super Admin</option>
            </select>
            <button
              type="button"
              onClick={clearNotifications}
              className="relative rounded-full border border-white/15 p-2 text-xs transition-colors hover:border-[#B22234]"
              aria-label="알림 확인"
            >
              🔔
              {notificationCount > 0 && (
                <span className="absolute -right-1 -top-1 rounded-full bg-[#B22234] px-1.5 text-[10px]">
                  {notificationCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-5 pt-6 lg:grid-cols-[260px_1fr]">
        <aside
          className="rounded-xl border border-white/10 p-4"
          style={{ backgroundColor: '#080A0F' }}
        >
          <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-zinc-400">
            Access Control
          </p>
          <div className="mb-4 rounded-md border border-white/10 bg-black/30 px-3 py-2">
            <p className="text-xs text-zinc-400">Active Role</p>
            <p className="text-sm font-semibold">{ROLE_LABELS[role]}</p>
          </div>

          <nav className="space-y-2" aria-label="사이드바 메뉴">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.disabled ? pathname : item.href}
                aria-disabled={item.disabled}
                className={[
                  'block rounded-md border px-3 py-2 text-sm transition-colors',
                  pathname === item.href
                    ? 'border-[#B22234] bg-[#B22234]/15 text-white'
                    : 'border-white/5 text-zinc-300 hover:border-white/20',
                  item.disabled ? 'pointer-events-none opacity-40' : '',
                ].join(' ')}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <main className="space-y-5 pb-8">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-400">
              {breadcrumbs.join(' > ')}
            </p>
            <h1 className="mt-2 text-2xl font-bold">{pageTitle}</h1>
            <p className="mt-2 text-sm text-zinc-300">{pageDescription}</p>
          </div>
          {children}

          <footer className="rounded-xl border border-white/10 p-4">
            <h2 className="text-sm font-semibold">Newsletter Signup</h2>
            <p className="mt-1 text-xs text-zinc-400">
              신규 앨범과 구독 소식을 받아보세요.
            </p>
            <form
              className="mt-3 flex flex-col gap-2 sm:flex-row"
              onSubmit={handleNewsletterSubmit}
            >
              <input
                value={newsletterEmail}
                onChange={(event) => setNewsletterEmail(event.target.value)}
                className="flex-1 rounded border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none ring-[#B22234] focus:ring-1"
                placeholder="you@example.com"
                aria-label="뉴스레터 이메일"
              />
              <button
                type="submit"
                className="rounded bg-[#B22234] px-4 py-2 text-sm font-semibold transition-colors hover:bg-[#8B1A29]"
              >
                Subscribe
              </button>
            </form>
            {newsletterMessage === 'success' && (
              <p className="mt-2 rounded border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-xs text-emerald-300">
                구독이 완료되었습니다. 다음 뉴스레터를 기다려주세요.
              </p>
            )}
            {newsletterMessage === 'error' && (
              <p className="mt-2 rounded border border-red-400/30 bg-red-400/10 px-3 py-2 text-xs text-red-300">
                이메일 형식이 올바르지 않습니다.
              </p>
            )}
          </footer>
        </main>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              Media Controller
            </p>
            <p className="text-sm">{currentTrack}</p>
          </div>
          <button
            type="button"
            onClick={togglePlayer}
            className="rounded-full border border-white/20 px-4 py-1.5 text-xs uppercase tracking-[0.15em]"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>
    </div>
  )
}
