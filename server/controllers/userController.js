import UserModel from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//@Description -> Create User
//@route POST /api/v1/user/register
export const registerUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body
    //Check all fields are filled
    if (!fullname || !email || !password) {
      res.status(400).json({ message: 'Fill all the required fields' })
    }

    // Check email already exists
    const userEmail = await UserModel.findOne({ email: req.body.email })
    if (userEmail) {
      res.status(400).json({ message: 'Email already exists' })
    }

    // Hash password
    const hashPassword = await bcrypt.hash(req.body.password, 10)
    // console.log(hashPassword)

    // Create new user
    const user = await UserModel.create({
      ...req.body,
      password: hashPassword,
    })
    // console.log(`User created successfully ${user}`)

    // JWT Token (jsonwebtoken) -> Secure information
    const token = jwt.sign({ _id: user.id }, 'secretkey1234', {
      expiresIn: '90d',
    })

    res.status(201).json({ message: 'User created successfully', token })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
}

//@Description -> Login User
//@route POST /api/v1/user/login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    // Check User exists (email)
    const user = await UserModel.findOne({ email })
    if (!user) {
      res.status(404).json({ message: 'User not found' })
    }

    // Compare password
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
      res.status(401).json({ message: 'Invalid email or password' })
    }

    // JWT Token (jsonwebtoken) -> Secure information
    const token = jwt.sign({ _id: user.id }, 'secretkey1234', {
      expiresIn: '90d',
    })

    res.status(200).json({
      message: 'User login successfully!..',
      token,
      user: {
        _id: user.id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
      },
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
}
