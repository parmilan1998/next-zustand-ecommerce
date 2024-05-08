import axios from 'axios'
import { create } from 'zustand'

const useAuthStore = create((set) => ({
  loggedIn: null,
  user: null,
  loginForm: {
    email: '',
    password: '',
  },
  signUpForm: {
    fullname: '',
    email: '',
    password: '',
  },
  updateLoginForm: (e) => {
    const { name, value } = e.target
    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      }
    })
  },
  login: async () => {
    const { loginForm } = useAuthStore.getState()
    const res = await axios.post(
      'http://localhost:8080/api/v1/user/login',
      loginForm,
      { withCredentials: true }
    )
    const { role } = res.data.user
    set({ user: { ...loginForm, role }, loggedIn: true })
  },
  checkAuth: async () => {
    try {
      await axios.get('http://localhost:8080/api/v1/user/check-auth', {
        withCredentials: true,
      })
      set({ loggedIn: true })
    } catch (error) {
      set({ loggedIn: false })
    }
  },
  updateSignUpForm: (e) => {
    const { name, value } = e.target
    set((state) => ({
      signUpForm: {
        ...state.signUpForm,
        [name]: value,
      },
    }))
  },
  register: async () => {
    const { signUpForm } = useAuthStore.getState()
    const res = await axios.post(
      'http://localhost:8080/api/v1/user/register',
      signUpForm,
      { withCredentials: true }
    )
    console.log(res)
  },
  logout: async () => {
    await axios.get('http://localhost:8080/api/v1/user/logout', {
      withCredentials: true,
    })
    set({ loggedIn: false })
  },
}))

export default useAuthStore
