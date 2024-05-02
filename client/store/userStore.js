// userStore.js
import { create } from 'zustand'

const useUserStore = create((set) => ({
  user: null,
  token: null,
  login: (userData) => {
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        set({ user: data.user, token: data.token })
      })
      .catch((error) => console.error('Error logging in:', error))
  },
  register: (userData) => {
    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('User registered successfully:', data)
      })
      .catch((error) => console.error('Error registering user:', error))
  },
}))

export default useUserStore
