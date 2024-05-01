import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, 'Please enter the fullname'],
    },
    email: {
      type: String,
      required: [true, 'Please enter the email address'],
      unique: [true, 'Email is already taken'],
    },
    role: {
      type: String,
      default: 'user',
    },
    password: {
      type: String,
      required: [true, 'Please enter the user password'],
    },
  },
  {
    timestamps: true,
  }
)

const UserModel = mongoose.model('UserModel', userSchema)
export default UserModel
