import { StockInfo, TradePlan, NotifyItem } from '@prisma/client'

type StockResult = {
  stockInfo?: StockInfo
  tradePlan?: TradePlan
  notifyItem?: NotifyItem
}

export default StockResult
