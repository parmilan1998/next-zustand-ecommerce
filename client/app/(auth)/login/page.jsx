'use client'
import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const LoginPage = () => {
  return (
    <>
      <div className='font-poppins py-12'>
        <form
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
          <div className='space-y-2 mb-5 md:mx-16 mx-4'>
            <Label htmlFor='fullname'>Email Address</Label>
            <Input />
          </div>
          <div className='space-y-2 mb-5 md:mx-16 mx-4'>
            <Label htmlFor='fullname'>Password</Label>
            <Input />
          </div>
          <div className='space-y-2 mb-6 md:mx-16 mx-4'>
            <Button className='w-full bg-blue-500 hover:bg-blue-700 ease-in duration-200'>
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
