import ProductModel from '../models/productModel.js'

//@Description -> Create product
//@route POST /api/v1/product
export const createProduct = async (req, res) => {
  try {
    const {
      productName,
      productBrand,
      productCount,
      productPrice,
      productDescription,
    } = req.body

    // Check all the fields are fill or not
    if (
      !productName ||
      !productBrand ||
      !productCount ||
      !productPrice ||
      !productDescription
    ) {
      return res
        .status(400)
        .json({ message: 'Please fill all the required fields' })
    }

    // create a newProduct object
    const newProduct = new ProductModel({
      productName,
      productBrand,
      productCount,
      productPrice,
      productDescription,
    })

    // create a product
    const productsAdd = await newProduct.save()
    return res
      .status(201)
      .json({ productsAdd, message: 'Product added successfully' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
}

//@Description -> Fetch Single product
//@route GET /api/v1/product
export const getProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await ProductModel.findById(id)
    res.status(200).json(product)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
}

//@Description -> Fetch all products
//@route GET /api/v1/product
export const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find()
    res.status(200).json(products)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
}

//@Description -> Update the product
//@route PUT /api/v1/product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const {
      productName,
      productBrand,
      productCount,
      productPrice,
      productDescription,
    } = req.body

    const updateProduct = await ProductModel.findByIdAndUpdate(id, req.body, {
      new: true,
    })

    // Check product exists or not
    if (!updateProduct) {
      res.status(404).json({ message: 'Product not found' })
    }

    res.json({ updateProduct, message: 'Updated product Successfully' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
}

//@Description -> Delete product
//@route DELETE /api/v1/product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) {
      return res
        .status(400)
        .json({ message: 'Product ID is missing or invalid' })
    }
    const deletedProduct = await ProductModel.findByIdAndDelete(id)
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' })
    }
    res.json({ message: 'Product deleted successfully' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
}
