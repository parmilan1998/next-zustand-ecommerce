import { create } from 'zustand'
import axios from 'axios'
import { devtools } from 'zustand/middleware'

const useProductStore = create(
  devtools((set) => ({
    products: [],
    // Fetch a single product
    getProducts: async () => {
      const response = await axios.get(`http://localhost:8080/api/v1/product`)
      set({ products: response.data })
    },
    // Add a product
    addProduct: async (product) => {
      const response = await axios
        .post(`http://localhost:8080/api/v1/product`, product)
        .catch((error) => {
          console.log(error)
        })
      set((state) => ({ products: [...state.products, response.data] }))
    },

    // Delete product
    deleteProduct: async (id) => {
      await axios.delete(`http://localhost:8080/api/v1/product/${id}`)
      set((state) => ({
        products: state.products.filter((product) => product.id !== id),
      }))
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
)

export default useProductStore
