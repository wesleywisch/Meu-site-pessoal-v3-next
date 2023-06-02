'use client'
import { differenceInMonths, differenceInYears, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

type DurationDateWorkProps = {
  workStartDate: string
  workEndDate: string
}

export function DurationDateWork({
  workEndDate,
  workStartDate,
}: DurationDateWorkProps) {
  const startDate = new Date(workStartDate)
  const endDate = new Date(workEndDate)

  const formattedStartDate = format(startDate, 'MMMM yyyy', { locale: ptBR })

  const formattedEndDate = endDate
    ? format(endDate, 'MMMM yyyy', { locale: ptBR })
    : 'o momento'

  const end = endDate || new Date()

  const months = differenceInMonths(end, startDate)
  const years = differenceInYears(end, startDate)
  const monthsRemaining = months % 12

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? 's' : ''}${monthsRemaining > 0
        ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
        : ''
      }`
      : `${months} mes${months > 1 ? 'es' : ''}`
  return (
    <span className="text-gray-500">
      {formattedStartDate} • {formattedEndDate} • ({formattedDuration})
    </span>
  )
}
