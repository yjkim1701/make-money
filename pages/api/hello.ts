// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'
import { StockInfo } from '@prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse<StockInfo[]>) {
  const stock = await prisma.stockInfo.findMany({})

  res.status(200).json(stock)
}
