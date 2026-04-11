'use client'

import type { ReactNode } from 'react'

type MobileShellProps = {
  children: ReactNode
  innerClassName?: string
}

export function MobileShell({ children, innerClassName = '' }: MobileShellProps) {
  return (
    <div className="flex min-h-dvh justify-center bg-zinc-950 p-3 pb-5 pr-5 pt-3">
      <div
        className={[
          'flex min-h-[calc(100dvh-1.5rem)] w-full max-w-[430px] flex-col border-4 border-black bg-zinc-900 shadow-[8px_8px_0_0_black]',
          innerClassName,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {children}
      </div>
    </div>
  )
}
