'use client'
import React, { useEffect, useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import useAuthStore from '@/store/authStore'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  // const loginError = useAuthStore((state) => state.loginError)
  // const loginSuccess = useAuthStore((state) => state.loginSuccess)
  const loginForm = useAuthStore((state) => state.loginForm)
  const updateLoginForm = useAuthStore((state) => state.updateLoginForm)
  const login = useAuthStore((state) => state.login)
  const user = useAuthStore((state) => state.user)
  const loggedIn = useAuthStore((state) => state.loggedIn)

  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    await login()
  }

  useEffect(() => {
    if (loggedIn) {
      if (user && user.role === 'admin') {
        router.push('/dashboard')
      } else {
        router.push('/shop')
      }
    }
  }, [loggedIn])

  return (
    <>
      <div className='font-poppins py-12'>
        <form
          onSubmit={handleLogin}
          action='#'
          className='py-6 rounded-lg max-w-lg md:mx-auto mx-4 bg-white'
        >
          <dir className='py-2 md:px-16 px-4'>
            <h1 className='text-center text-xl text-black font-bold '>
              Login an account
            </h1>
            <p className='text-center text-lg w-full text-gray-500 py-4'>
              Join for exclusive access
            </p>
          </dir>
          {errorMessage && (
            <div className='text-red-500 text-center mb-4'>{errorMessage}</div>
          )}
          {successMessage && (
            <div className='text-green-500 text-center mb-4'>
              {successMessage}
            </div>
          )}
          <div className='space-y-2 mb-5 md:mx-16 mx-4'>
            <Label htmlFor='fullname'>Email Address</Label>
            <Input
              type='email'
              name='email'
              value={loginForm.email}
              onChange={updateLoginForm}
            />
          </div>
          <div className='space-y-2 mb-5 md:mx-16 mx-4'>
            <Label htmlFor='fullname'>Password</Label>
            <Input
              type='password'
              name='password'
              value={loginForm.password}
              onChange={updateLoginForm}
            />
          </div>
          <div className='space-y-2 mb-6 md:mx-16 mx-4'>
            <Button
              type='submit'
              className='w-full bg-blue-500 hover:bg-blue-700 ease-in duration-200'
            >
              Log In
            </Button>
          </div>
          <div className='space-y-2 mb-6 md:mx-16 mx-4'>
            <Link href='/register'>
              <Button variant='outline' className='w-full '>
                Create an account
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginPage
