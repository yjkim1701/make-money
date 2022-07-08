// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { StockInfo } from '@prisma/client'
import prisma from '../../lib/prisma'
import StockResult from '../../lib/types/StockResult'

export default async function handler(req: NextApiRequest, res: NextApiResponse<StockResult>) {
  const stockCode = ''
  const stockName = ''

  if (req.method === 'GET') {
    const rsStockInfo = await prisma.stockInfo.findUnique({
      where: {
        stockCode,
      },
    })
    const rsTradePlan = await prisma.tradePlan.findUnique({
      where: {
        stockCode,
      },
    })
    const rsNotifyItem = await prisma.notifyItem.findUnique({
      where: {
        stockCode,
      },
    })

    res.status(200).json({ stockInfo: rsStockInfo, tradePlan: rsTradePlan, notifyItem: rsNotifyItem })
  } else if (req.method === 'POST') {
    res.status(200).json({})
  } else if (req.method === 'DELETE') {
    res.status(200).json({})
  } else {
    res.status(200).json({})
  }
}
