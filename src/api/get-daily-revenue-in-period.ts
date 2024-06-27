import { api } from '@/lib/axios'
export interface GetDayRevenueInPeriodQuery {
  from?: Date
  to?: Date
}

export type GetDayRevenueInPeriodResponse = {
  date: string
  receipt: number
}[]

export async function getDayRevenueInPeriod({
  from,
  to,
}: GetDayRevenueInPeriodQuery) {
  const response = await api.get<GetDayRevenueInPeriodResponse>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return response.data
}
