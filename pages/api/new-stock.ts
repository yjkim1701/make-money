import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'
import StockResult from '../../lib/types/StockResult'
import { MarketType, StockInfo, TradePlan, NotifyItem } from '@prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse<StockResult>) {
  let stockCode = '000002'
  let stockName = 'test 3'

  const rsStockInfo = await prisma.stockInfo.create({
    data: {
      stockCode: stockCode,
      stockName: stockName,
      marketType: MarketType.KOSPI,
    },
  })

  const rsTradePlan = await prisma.tradePlan.create({
    data: {
      stockCode: stockCode,
      tradeCategory: 'BS',
      baseCandleOpenPrice: 1,
      baseCandleClosePrice: 2,
      baseCandleCenterPrice: 3,
      baseCandleSize: 4,
      tickPrice: 5,
    },
  })

  const rsNotifyItem = await prisma.notifyItem.create({
    data: {
      stockCode: stockCode,
      stockName: stockName,
      targetPrice: 10,
      enableTargetPrice: true,
      vixPercent: 3,
      profitPercent: 3.5,
      profitPrice: 20,
      lossCutPercent: 5,
      lossCutPrice: 100,
      lastNotifyPrice: 200,
    },
  })

  const stockResult = {
    stockInfo: rsStockInfo,
    tradePlan: rsTradePlan,
    notifyItem: rsNotifyItem,
  }

  res.status(200).json(stockResult)
}
