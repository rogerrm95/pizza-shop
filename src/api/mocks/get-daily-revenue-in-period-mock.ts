import { addDays, differenceInDays, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { http, HttpResponse } from 'msw'

import type { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', ({ request }) => {
  const { searchParams } = new URL(request.url)

  const from = searchParams.get('from')
  const to = searchParams.get('to')

  // VERIFICA SE HÁ AMBOS OS PARAMETROS //
  // SE HOUVER //
  if (from && to) {
    // Calcula a diferença entre os dias //
    const differenceInDaysInPeriod = differenceInDays(
      new Date(to),
      new Date(from),
    )

    const dailyRevenueInPeriodData: GetDailyRevenueInPeriodResponse =
      Array.from({
        length:
          differenceInDaysInPeriod >= 7 ? 7 : differenceInDaysInPeriod + 1,
      }).map((_, index) => {
        return {
          date: format(
            addDays(new Date(from), index).toISOString(),
            'dd/MM/yyyy',
            { locale: ptBR },
          ),
          receipt: 1000 * (Math.random() * index),
        }
      })

    return HttpResponse.json(dailyRevenueInPeriodData)
  }
  // SENÃO //
  else {
    return HttpResponse.json([
      {
        date: format(new Date(), 'dd/MM/yyyy', { locale: ptBR }),
        receipt: 0,
      },
    ])
  }
})
