import { createContext, useContext } from 'react'
import { useQueryClient, useMutation } from '@tanstack/react-query'

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const queryClient = useQueryClient()

  const cart = queryClient.getQueryData<CartItem[]>(['cart']) || []

  const addToCartMutation = useMutation({
    mutationFn: async (newItem: CartItem) => {
      return new Promise<CartItem[]>(resolve => {
        setTimeout(() => {
          resolve([...cart, newItem])
        }, 100)
      })
    },
    onSuccess: updatedCart => {
      queryClient.setQueryData(['cart'], updatedCart)
    },
  })

  const addToCart = (item: CartItem) => {
    addToCartMutation.mutate(item)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider')
  }
  return context
}
