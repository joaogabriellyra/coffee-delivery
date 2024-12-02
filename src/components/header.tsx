import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { CoffeeDeliveryLogo } from './ui/coffee-delivery-logo'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="mb-24">
      <div className="py-8 px-40 flex justify-between items-center">
        <Link to="/" className="cursor-pointer">
          <CoffeeDeliveryLogo />
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex items-center p-2 gap-1 rounded-md bg-[#EBE5F9]">
            <MapPin size={22} className="text-[#8047F8]" weight="fill" />
            <span className="text-[#4B2995]">Recife, PE</span>
          </div>
          <div className="p-2 bg-[#F1E9C9] rounded-md cursor-pointer">
            <Link to="/history">
              <ShoppingCart
                size={22}
                weight="fill"
                className="text-[#C47F17]"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
