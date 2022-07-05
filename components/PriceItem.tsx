import React from 'react'

type PriceItemProps = {
  bgColor: string
  bgColorScale: number
  textNumber: string
}

const PriceItem: React.FC<PriceItemProps> = ({
  bgColor,
  bgColorScale,
  textNumber,
}) => {
  return (
    <div className={`bg-${bgColor}-${bgColorScale} flex flex-row`}>
      <h3 className="text-green-500 text-xl font-bold flex-none">
        Text {textNumber}
      </h3>
      <p className="text-gray-500 text-2xl font-black grow">
        22,222 {textNumber}
      </p>
      <p className="text-lg flex-none">Text {textNumber}</p>
    </div>
  )
}

export default PriceItem
