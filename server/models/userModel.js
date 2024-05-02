import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    role: {
      type: String,
      default: 'user',
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const UserModel = mongoose.model('UserModel', userSchema)
export default UserModel
