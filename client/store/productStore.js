import { create } from 'zustand'
import axios from 'axios'

const useProductStore = create((set) => ({
  products: [],
  createProductForm: {
    productName: '',
    brand: '',
    count: 0,
    price: 0,
    description: '',
  },
  updateProductForm: {
    _id: null,
    productName: '',
    brand: '',
    count: 0,
    price: 0,
    description: '',
  },
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
  updateCreateProductForm: (e) => {
    const { name, value } = e.target
    set((state) => ({
      createProductForm: { ...state.createProductForm, [name]: value },
    }))
  },

  addProduct: async (e) => {
    e.preventDefault()
    const { createProductForm, products } = useProductStore.getState()
    const res = await axios.post(`http://localhost:8080/api/v1/product`, {
      createProductForm,
    })
    set({
      products: [...products, res.data.product],
      createProductForm: {
        productName: '',
        brand: '',
        count: '',
        price: '',
        description: '',
      },
    })
  },
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
