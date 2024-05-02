'use client'
import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import useUserStore from '@/store/userStore'
// import { useRouter } from 'next/router'

const RegisterPage = () => {
  // const router = useRouter()
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const register = useUserStore((state) => state.register)

  const registerUser = async () => {
    try {
      await register(fullname, email, password)
      console.log('Registration Successfully')
      setMessage('Registration Successfully!')
    } catch (error) {
      console.error('Registration error:', error)
      setMessage('Registration Successfully!')
    }
  }
  return (
    <>
      <div className='font-poppins py-12'>
        <form
          action='#'
          className='py-6 rounded-lg max-w-lg md:mx-auto mx-4 bg-white'
        >
          {message && (
            <p className='text-green-500 text-center py-2 text-lg'>{message}</p>
          )}
          <dir className='py-2 md:px-16 px-4'>
            <h1 className='text-center text-xl text-black font-bold '>
              Create an account
            </h1>
            <p className='text-center text-lg w-full text-gray-500 py-4'>
              Join for exclusive access
            </p>
          </dir>
          <div className='space-y-2 mb-5 md:mx-16 mx-4'>
            <Label htmlFor='fullname'>Full Name</Label>
            <Input
              type='text'
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder='Enter full name'
            />
          </div>
          <div className='space-y-2 mb-5 md:mx-16 mx-4'>
            <Label htmlFor='email'>Email Address</Label>
            <Input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter email address'
            />
          </div>
          <div className='space-y-2 mb-5 md:mx-16 mx-4'>
            <Label htmlFor='password'>Password</Label>
            <Input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter the password'
            />
          </div>
          <div className='space-y-2 mb-6 md:mx-16 mx-4'>
            <Button
              type='submit'
              onClick={registerUser}
              className='w-full bg-blue-500 hover:bg-blue-700 ease-in duration-200'
            >
              Create account
            </Button>
          </div>
          <div className='space-y-2 mb-6 md:mx-16 mx-4'>
            <Link href='/login'>
              <Button variant='outline' className='w-full '>
                Sign in
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default RegisterPage
