import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'
import { MarketType, StockInfo } from '@prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse<StockInfo>) {
  const result = await prisma.stockInfo.create({
    data: {
      stockCode: '000001',
      stockName: 'test 2',
      marketType: MarketType.KOSPI,
    },
  })
  res.status(200).json(result)
}
