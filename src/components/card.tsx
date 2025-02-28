import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'
import { useState } from 'react'
import Notification from './notification'

interface coffeeCard {
  id: number
  name: string
  description: string
  types: string[]
  price: number
  componentSvg: () => JSX.Element
}

export function Card({
  id,
  name,
  description,
  types,
  price,
  componentSvg,
}: coffeeCard) {
  const [coffe, setCoffes] = useState(1)
  const [showNotification, setShowNotification] = useState(false)

  function handlePlusCoffee() {
    setCoffes(coffe + 1)
  }

  function handleMinusCoffee() {
    if (coffe > 1) {
      setCoffes(coffe - 1)
    }
  }

  function handleResetCoffee() {
    if (coffe !== 1) {
      setCoffes(1)
      setShowNotification(true)
    }
  }

  return (
    <div className="bg-[#F3F2F2] flex flex-col rounded-tr-3xl rounded-bl-3xl w-64 items-center pb-5">
      <div className="-mt-5 mb-4 flex flex-col gap-3 items-center">
        {componentSvg()}
        <div className="flex gap-1">
          {types.map((type, index) => (
            <span
              key={id + Number(index)}
              className="px-2 py-1 text-[#C47F17] bg-[#F1E9C9] rounded-full text-[10px] leading-tight self-center"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center px-5 gap-2 mb-8">
        <h2 className="text-[#403937] text-xl leading-tight font-bold">
          {name}
        </h2>
        <p className="text-[#8D8686] text-sm text-center">{description}</p>
      </div>
      <div className="flex items-center w-full px-6">
        <div className="flex items-center gap-1 mr-6">
          <span className="text-sm text-[#574F4D]">R$</span>
          <span className="text-2xl leading-tight font-extrabold text-[#574F4D]">
            {price.toFixed(2).replace('.', ',')}
          </span>
        </div>
        <div className="flex p-2 rounded-md bg-[#E6E5E5] gap-1 mr-2">
          <button
            type="button"
            disabled={coffe < 2}
            onClick={handleMinusCoffee}
          >
            <Minus size={14} className="text-[#8047F8] hover:text-[#4B2995]" />
          </button>
          <span className="text-lg text-[#272221]">{coffe}</span>
          <button type="button" onClick={handlePlusCoffee}>
            <Plus size={14} className="text-[#8047F8] hover:text-[#4B2995]" />
          </button>
        </div>

        <button
          type="button"
          onClick={handleResetCoffee}
          className="p-2 bg-[#4B2995] hover:bg-[#8047F8] rounded-md cursor-pointer"
        >
          <ShoppingCartSimple size={22} color="#F3F2F2" weight="fill" />
        </button>
        {showNotification && (
          <Notification
            message="Item adicionado ao carrinho!"
            onClose={() => setShowNotification(false)}
          />
        )}
      </div>
    </div>
  )
}
