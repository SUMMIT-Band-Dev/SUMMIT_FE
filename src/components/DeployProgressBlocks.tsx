'use client'

/* design.json primaryButton.surfaceColor = #05FF91 → bg-neon */
interface DeployProgressBlocksProps {
  filled: number
  total?: number
}

export function DeployProgressBlocks({
  filled,
  total = 14,
}: DeployProgressBlocksProps) {
  const safeFilled = Math.min(Math.max(0, filled), total)

  return (
    <div
      className="flex w-full gap-1"
      role="progressbar"
      aria-valuenow={safeFilled}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-label="배포 진행 상태"
    >
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={[
            'h-1.5 flex-1 rounded-full transition-all duration-500',
            i < safeFilled
              ? 'bg-neon shadow-neon-glow-sm'
              : 'bg-zinc-800',
          ].join(' ')}
        />
      ))}
    </div>
  )
}
