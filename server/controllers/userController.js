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
    res.status(200).json({ message: 'User created successfully' })
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
    const token = jwt.sign({ sub: user._id }, process.env.SECRET_KEY, {
      expiresIn: '30d',
    })

    // set the cookies
    res.cookie('Authorization', token, {
      expiresIn: '30d',
      httpOnly: true,
      sameSite: true,
      secure: 'Production',
    })

    res.status(200).json({
      message: 'User login successfully!..',
      token,
      user: { id: user._id, role: user.role },
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
}

//@Description -> Logout User
//@route GET /api/v1/user/logout
export const logoutUser = async (req, res) => {
  try {
    res.clearCookie('Authorization')
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
}

//@Description -> Check Auth
//@route GET /api/v1/user/check-auth
export const checkAuth = (req, res) => {
  console.log(req.user)
  res.sendStatus(200)
}
