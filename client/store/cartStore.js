import { create } from 'zustand'

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === product.id
      )
      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart]
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          count: updatedCart[existingProductIndex].count + 1,
        }
        return { cart: updatedCart }
      } else {
        // If the product is not in the cart, add it with count 1
        return { cart: [...state.cart, { ...product, count: 1 }] }
      }
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
  addCount: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      ),
    })),
  reduceCount: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, count: Math.max(item.count - 1, 0) } : item
      ),
    })),
}))

export default useCartStore
