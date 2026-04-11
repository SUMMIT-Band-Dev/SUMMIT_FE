'use client'

type DeployProgressBlocksProps = {
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
      className="grid w-full gap-1 sm:gap-1.5"
      style={{
        gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))`,
      }}
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
            'h-3 min-h-[10px] w-full border-2 border-black sm:h-3.5',
            i < safeFilled
              ? 'bg-lime-300 shadow-[2px_2px_0_0_black]'
              : 'bg-zinc-700',
          ].join(' ')}
        />
      ))}
    </div>
  )
}
