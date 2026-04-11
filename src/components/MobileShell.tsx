'use client'

import type { ReactNode } from 'react'

/*
  MobileShell: 430px 중앙 정렬 구조 래퍼.
  배경/스타일은 각 페이지/셸이 직접 지정합니다.
  design.json → container: 24px (rounded-3xl) 적용은 내부 카드 단위에서.
*/
interface MobileShellProps {
  children: ReactNode
  className?: string
}

export function MobileShell({ children, className = '' }: MobileShellProps) {
  return (
    <div className="flex min-h-dvh justify-center bg-zinc-950">
      <div className={`w-full max-w-[430px] min-h-dvh ${className}`.trim()}>
        {children}
      </div>
    </div>
  )
}
