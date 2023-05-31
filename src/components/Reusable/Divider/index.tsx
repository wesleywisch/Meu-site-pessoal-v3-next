import { cn } from '../../../lib/utils'

type DividerHorizontalProps = {
  className?: string
}

export function DividerHorizontal({ className }: DividerHorizontalProps) {
  return (
    <div className={cn('w-full my-8 border-b border-b-gray-800', className)} />
  )
}
