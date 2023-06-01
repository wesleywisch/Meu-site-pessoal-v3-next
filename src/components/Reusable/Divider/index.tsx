import { cn } from '../../../lib/utils'

type DividerHorizontalProps = {
  className?: string
}

export function DividerHorizontal({ className }: DividerHorizontalProps) {
  return (
    <div className={cn('my-8 w-full border-b border-b-gray-800', className)} />
  )
}
