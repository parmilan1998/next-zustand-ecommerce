import { Button } from '@/components/ui/button'
import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'

const UpdateProduct = () => {
  return (
    <div className='py-10 max-w-screen-xl md:px-12 px-4 mx-auto font-poppins'>
      <Link href='/dashboard'>
        <Button>Go Back</Button>
      </Link>
      <div className='font-poppins py-12'>
        <form
          action='#'
          className='py-6 rounded-lg max-w-lg md:mx-auto mx-4 bg-white px-6'
        >
          <dir className='py-2 md:px-10 px-4'>
            <h1 className='text-center text-xl text-black font-bold '>
              Update the product
            </h1>
          </dir>
          <div className='space-y-2 mb-5 mx-4'>
            <Label htmlFor='fullname'>Product Name</Label>
            <Input />
          </div>
          <div className='space-y-2 mb-5 mx-4'>
            <Label htmlFor='fullname'>Brand</Label>
            <Input />
          </div>
          <div className='space-y-2 mb-5 mx-4'>
            <Label htmlFor='fullname'>Count </Label>
            <Input />
          </div>
          <div className='space-y-2 mb-5 mx-4'>
            <Label htmlFor='fullname'>Product Price</Label>
            <Input />
          </div>
          <div className='space-y-2 mb-5 mx-4'>
            <Label htmlFor='fullname'>Description </Label>
            <Textarea />
          </div>
          <div className='space-y-2 mb-6  mx-4'>
            <Button className='w-full bg-blue-500 hover:bg-blue-700 ease-in duration-200'>
              Update Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateProduct
