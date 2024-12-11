import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react'

export function Checkout() {
  return (
    <main className="grid grid-cols-2 gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-lg leading-tight text-[#403937] font-bold">
          Complete seu pedido
        </h2>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col p-10 gap-8 bg-[#F3F2F2] rounded-md">
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
                <input type="text" placeholder="UF" className="w-14" />
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
                className="flex-1 flex items-center justify-center gap-2 p-4 rounded-lg bg-[#E6E5E5] hover:bg-[#D7D5D5] transition-colors"
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
      <div>
        <h2 className="text-lg leading-tight text-[#403937] font-bold">
          Cafés selecionados
        </h2>
      </div>
    </main>
  )
}
