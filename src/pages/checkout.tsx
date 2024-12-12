import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Minus,
  Plus,
  Trash,
} from '@phosphor-icons/react'
import { TraditionalEspresso } from '../components/ui/images'

export function Checkout() {
  return (
    <main className="grid grid-cols-2 gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-lg leading-tight text-[#403937] font-bold">
          Complete seu pedido
        </h2>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col p-10 gap-8 bg-[#F3F2F2] rounded-tr-3xl rounded-bl-3xl">
            <div className="flex gap-2">
              <MapPinLine size={22} color="#C47F17" />
              <div className="flex flex-col gap-0.5">
                <h3 className="text-base leading-tight text-[#403937]">
                  Endereço de Entrega
                </h3>
                <span className="text-sm text-[#574F4D]">
                  Informe o endereço onde deseja receber seu pedido
                </span>
              </div>
            </div>
            <form
              onSubmit={() => console.log('oi')}
              className="flex flex-col gap-4"
            >
              <input type="text" placeholder="CEP" className="w-48" />
              <input type="text" placeholder="Rua" className="" />
              <div className="flex gap-3">
                <input type="text" placeholder="Número" className="w-48" />
                <input
                  type="text"
                  placeholder="Complemento"
                  className="flex-1"
                />
              </div>
              <div className="flex gap-3">
                <input type="text" placeholder="Bairro" className="w-48" />
                <input type="text" placeholder="Cidade" className="w-full" />
                <input
                  type="text"
                  placeholder="UF"
                  className="w-14 uppercase"
                  maxLength={2}
                />
              </div>
            </form>
          </div>
          <div className="flex flex-col p-10 gap-8 bg-[#F3F2F2] rounded-md">
            <div className="flex gap-2">
              <CurrencyDollar size={22} color="#8047F8" />
              <div className="flex flex-col gap-0.5">
                <h2 className="text-[#403937] leading-snug">Pagamento</h2>
                <span className="text-sm text-[#574F4D] leading-snug">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 p-4 rounded-lg bg-[#E6E5E5] hover:bg-[#D7D5D5] border border-purple-400"
              >
                <CreditCard size={16} color="#8047F8" />
                <span className="text-[#574F4D] text-xs font-medium whitespace-nowrap">
                  CARTÃO DE CRÉDITO
                </span>
              </button>
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 p-4 rounded-lg bg-[#E6E5E5] hover:bg-[#D7D5D5] transition-colors"
              >
                <Bank size={16} color="#8047F8" />
                <span className="text-[#574F4D] text-xs font-medium whitespace-nowrap">
                  CARTÃO DE DÉBITO
                </span>
              </button>
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 p-4 rounded-lg bg-[#E6E5E5] hover:bg-[#D7D5D5] transition-colors"
              >
                <Money size={16} color="#8047F8" />
                <span className="text-[#574F4D] text-xs font-medium whitespace-nowrap">
                  DINHEIRO
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-lg leading-tight text-[#403937] font-bold">
          Cafés selecionados
        </h2>
        <div className="flex flex-col p-10 gap-6 bg-[#F3F2F2] rounded-tr-3xl rounded-bl-3xl">
          <div className="flex gap-5">
            <TraditionalEspresso />
            <div className="flex flex-col gap-2">
              <h2>Expresso Tradicional</h2>
              <div className="flex gap-2">
                <div className="flex gap-1 p-2 bg-[#E6E5E5] rounded-md">
                  <button type="button">
                    <Minus
                      size={14}
                      className="text-[#8047F8] hover:text-[#4B2995]"
                    />
                  </button>
                  <span className="text-lg text-[#272221] leading-snug">1</span>
                  <button type="button">
                    <Plus
                      size={14}
                      className="text-[#8047F8] hover:text-[#4B2995]"
                    />
                  </button>
                </div>
                <button
                  type="button"
                  className="flex gap-1 items-center bg-[#E6E5E5] rounded-md px-2 hover:bg-[#D7D5D5]"
                >
                  <Trash size={16} color="#8047F8" />
                  <span className="text-[#574F4D] text-xs leading-relaxed">
                    REMOVER
                  </span>
                </button>
              </div>
            </div>
            <span>R$ 9,90</span>
          </div>
          <div className="h-px bg-[#E6E5E5]" />
          <div className="flex gap-5">
            <TraditionalEspresso />
            <div className="flex flex-col gap-2">
              <h2>Expresso Tradicional</h2>
              <div className="flex gap-2">
                <div className="flex gap-1 p-2 bg-[#E6E5E5] rounded-md">
                  <button type="button">
                    <Minus
                      size={14}
                      className="text-[#8047F8] hover:text-[#4B2995]"
                    />
                  </button>
                  <span className="text-lg text-[#272221] leading-snug">1</span>
                  <button type="button">
                    <Plus
                      size={14}
                      className="text-[#8047F8] hover:text-[#4B2995]"
                    />
                  </button>
                </div>
                <button
                  type="button"
                  className="flex gap-1 items-center bg-[#E6E5E5] rounded-md px-2 hover:bg-[#D7D5D5]"
                >
                  <Trash size={16} color="#8047F8" />
                  <span className="text-[#574F4D] text-xs leading-relaxed">
                    REMOVER
                  </span>
                </button>
              </div>
            </div>
            <span>R$ 9,90</span>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </div>
              <div className="flex justify-between">
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <div className="flex justify-between">
                <h2>Total</h2>
                <span>R$ 33,20</span>
              </div>
            </div>
            <button
              type="button"
              className="py-3 px-2 bg-[#DBAC2C] hover:bg-[#C47F17] text-white rounded-md"
            >
              CONFIRMAR PEDIDO
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
