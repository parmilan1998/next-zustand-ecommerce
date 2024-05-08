'use client'
import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import useAuthStore from '@/store/authStore'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const RegisterPage = () => {
  const router = useRouter()
  const { signUpForm, updateSignUpForm, register } = useAuthStore()

  const handleRegister = async (e) => {
    e.preventDefault()
    await register()
    router.push('/login')
    toast.success('User Registration Successfully!')
  }

  return (
    <>
      <div className='font-poppins py-12'>
        <form
          onSubmit={handleRegister}
          action='#'
          className='py-6 rounded-lg max-w-lg md:mx-auto mx-4 bg-white'
        >
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
              name='fullname'
              value={signUpForm.fullname}
              onChange={updateSignUpForm}
              placeholder='Enter the fullname'
            />
          </div>
          <div className='space-y-2 mb-5 md:mx-16 mx-4'>
            <Label htmlFor='email'>Email Address</Label>
            <Input
              type='email'
              name='email'
              value={signUpForm.email}
              onChange={updateSignUpForm}
              placeholder='Enter email address'
            />
          </div>
          <div className='space-y-2 mb-5 md:mx-16 mx-4'>
            <Label htmlFor='password'>Password</Label>
            <Input
              type='password'
              name='password'
              value={signUpForm.password}
              onChange={updateSignUpForm}
              placeholder='Enter the password'
            />
          </div>
          <div className='space-y-2 mb-6 md:mx-16 mx-4'>
            <Button
              type='submit'
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
