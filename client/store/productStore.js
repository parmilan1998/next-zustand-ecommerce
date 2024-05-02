import { create } from 'zustand'
import axios from 'axios'

const useProductStore = create((set) => ({
  products: [],
  // Fetch products   <-->
  getProducts: async () => {
    const res = await axios.get(`http://localhost:8080/api/v1/product`)
    set({ products: res.data })
  },

  // Delete product   <-->
  deleteProduct: async (id) => {
    await axios.delete(`http://localhost:8080/api/v1/product/${id}`)
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    }))
  },

  // Add a product
  addProduct: async ({ productName, count, brand, price, description }) => {
    const response = await axios.post(`http://localhost:8080/api/v1/product`, {
      productName,
      count,
      brand,
      price,
      description,
    })
    set((state) => {
      state.products.push(response.data)
    })
  },

  // Update product
  updateProduct: async (id, updatedProduct) => {
    await axios.put(
      `http://localhost:8080/api/v1/product/${id}`,
      updatedProduct
    )
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, ...updatedProduct } : product
      ),
    }))
  },
}))

export default useProductStore

// export const getProductById = (id) => {
//   return (state) => {
//     let pro = state.products.filter((c) => c.id === Number(id))
//     if (pro) {
//       return pro[0]
//     }
//     return null
//   }
// }
