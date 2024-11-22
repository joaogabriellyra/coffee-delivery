import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'
import { TraditionalEspresso } from './ui/images/traditional-espresso'

export function Card() {
  return (
    <div className="bg-[#F3F2F2] flex flex-col rounded-tr-3xl rounded-bl-3xl w-64 items-center pb-5">
      <div className="-mt-5 mb-4 flex flex-col gap-3">
        <TraditionalEspresso />
        <span className="px-2 py-1 text-[#C47F17] bg-[#F1E9C9] rounded-full text-[10px] leading-tight self-center">
          TRADICIONAL
        </span>
      </div>
      <div className="flex flex-col items-center px-5 gap-2 mb-8">
        <h2 className="text-[#403937] text-xl leading-tight font-bold">
          Expresso Tradicional
        </h2>
        <p className="text-[#8D8686] text-sm text-center">
          O tradicional café feito com água quente e grãos moídos
        </p>
      </div>
      <div className="flex items-center w-full px-6">
        <div className="flex items-center gap-1 mr-6">
          <span className="text-sm text-[#574F4D]">R$</span>
          <span className="text-2xl leading-tight font-extrabold text-[#574F4D]">
            9,90
          </span>
        </div>
        <div className="flex p-2 rounded-md bg-[#E6E5E5] gap-1 mr-2">
          <button type="button">
            <Minus size={14} className="text-[#8047F8]" />
          </button>
          <span className="text-lg text-[#272221]">1</span>
          <button type="button">
            <Plus size={14} className="text-[#8047F8]" />
          </button>
        </div>
        <div className="p-2 bg-[#4B2995] rounded-md">
          <ShoppingCartSimple size={22} color="#F3F2F2" weight="fill" />
        </div>
      </div>
    </div>
  )
}
