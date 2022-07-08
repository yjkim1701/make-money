// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { TradePlan, MarketType, AlarmCondition } from '@prisma/client'
import prisma from '../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse<TradePlan>) {
  const stockCode = ''
  const stockName = ''

  if (req.method === 'GET') {
    const result = await prisma.tradePlan.findUnique({
      where: {
        stockCode,
      },
    })

    res.status(200).json(result)
  } else if (req.method === 'POST') {
    const result = await prisma.tradePlan.create({
      data: {
        stockCode: stockCode,
        stockName: stockName,
        marketType: MarketType.KOSPI,
        tradeCategory: 'BS',
        baseCandleOpenPrice: 0,
        baseCandleClosePrice: 0,
        baseCandleCenterPrice: 0,
        baseCandleSize: 0,
        tickPrice: 0,
        transactionAmount: 0,
        totalAssignedFund: 0,
        currentAvgPrice: 0,
        currentQuantity: 0,
        currentTotalMoney: 0,
        targetPrice: 0,
        targetPriceAlarmCondition: AlarmCondition.LT,
        enableTargetPriceAlarm: true,
        enableVixAlarm: true,
      },
    })

    res.status(200).json({})
  } else if (req.method === 'DELETE') {
    res.status(200).json({})
  } else {
    res.status(200).json({})
  }
}
