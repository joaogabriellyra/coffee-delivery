import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { CoffeeIntro } from './ui/coffee-intro'

export function Intro() {
  return (
    <div className="px-40 pb-24 flex justify-between">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl leading-tight text-[#272221] font-extrabold">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-xl leading-tight text-[#403937]">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#C47F17] rounded-full">
              <ShoppingCart
                size={16}
                weight="fill"
                className="text-[#FAFAFA]"
              />
            </div>
            <span className="text-base leading-tight text-[#574F4D]">
              Compra simples e segura
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#DBAC2C] rounded-full">
              <Timer size={16} weight="fill" className="text-[#FAFAFA]" />
            </div>
            <span className="text-base leading-tight text-[#574F4D]">
              Entrega rápida e rastreada
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#574F4D] rounded-full">
              <Package size={16} weight="fill" className="text-[#FAFAFA]" />
            </div>
            <span className="text-base leading-tight text-[#574F4D]">
              Embalagem mantém o café intacto
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#8047F8] rounded-full">
              <Coffee size={16} weight="fill" className="text-[#FAFAFA]" />
            </div>
            <span className="text-base leading-tight text-[#574F4D]">
              O café chega fresquinho até você
            </span>
          </div>
        </div>
      </div>
      <div>
        <CoffeeIntro />
      </div>
    </div>
  )
}
