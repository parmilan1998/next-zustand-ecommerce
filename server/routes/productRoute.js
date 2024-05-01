import express from 'express'
import {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js'

const router = express.Router()

router.post('/', createProduct)
router.get('/', getProducts)
router.get('/:id', getProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router
