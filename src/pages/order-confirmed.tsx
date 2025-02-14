import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react'
import { DriverDelivery } from '../components/ui/driver-delivery'

export function OrderConfirmed() {
  return (
    <main className="flex flex-col gap-2.5">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-extrabold text-[#C47F17]">
          Uhu! Pedido confirmado
        </h1>
        <p className="text-xl leading-snug text-[#403937]">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </div>
      <div className="flex gap-24">
        <div className="flex flex-col gap-8 p-10 bg-white rounded-tr-3xl rounded-bl-3xl">
          <div className="flex gap-3 items-center">
            <div className="rounded-full bg-[#8047F8] flex items-center justify-center w-8 h-8">
              <MapPin size={16} weight="fill" color="white" />
            </div>
            <div>
              <div className="flex flex-col text-[#574F4D]">
                <p>
                  Entrega em{' '}
                  <span className="font-bold">
                    Rua João Daniel Martinelli, 102
                  </span>
                </p>
                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="rounded-full bg-[#DBAC2C] flex items-center justify-center w-8 h-8">
              <Timer size={16} weight="fill" color="white" />
            </div>
            <div>
              <div className="flex flex-col text-[#574F4D]">
                <p>Previsão de entrega</p>
                <span className="font-bold">20 - 30 minutos</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="rounded-full bg-[#C47F17] flex items-center justify-center w-8 h-8">
              <CurrencyDollar size={16} color="white" />
            </div>
            <div>
              <div className="flex flex-col text-[#574F4D]">
                <p>Pagamento na entrega</p>
                <span className="font-bold">Cartão de crédito</span>
              </div>
            </div>
          </div>
        </div>
        <DriverDelivery />
      </div>
    </main>
  )
}
