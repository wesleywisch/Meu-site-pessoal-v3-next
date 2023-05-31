import { cn } from '../../../lib/utils'

type SectionTitleProps = {
  title: string
  subTitle: string
  className?: string
}

export function SectionTitle({
  title,
  subTitle,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <span className="font-mono text-sm text-emerald-400">{`../${subTitle}`}</span>
      <h3 className="text-3xl font-medium">{title}</h3>
    </div>
  )
}
