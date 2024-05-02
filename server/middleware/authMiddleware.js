import jwt from 'jsonwebtoken'
import UserModel from '../models/userModel.js'

const authMiddleware = async (req, res, next) => {
  try {
    // Read token 
    const token = req.cookies.Authorization

    // Check if token exists
    if (!token) {
      return res.status(401).json({ message: 'Authorization token is missing' })
    }

    // Decode the token
    const decoded = jwt.verify(token, 'secretkey1234')

    // Find user using decoded token
    const user = await UserModel.findById(decoded.sub)
    if (!user) {
      return res.status(401).json({ message: 'User not found' })
    }

    // Set user in the request object
    req.user = user

    next()
  } catch (error) {
    console.error(error)
    return res.status(401).json({ message: 'Unauthorized' })
  }
}

export default authMiddleware
