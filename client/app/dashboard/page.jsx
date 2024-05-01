'use client'
import React, { useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import useProductStore from '../../store/productStore'
import { FaRegEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { useParams } from 'next/navigation'

const Dashboard = () => {
  const products = useProductStore((state) => state.products)
  const getProducts = useProductStore((state) => state.getProducts)
  const deleteProduct = useProductStore((state) => state.deleteProduct)

  useEffect(() => {
    getProducts()
  }, [])

  // Delete product
  const deleteHandler = (id) => {
    deleteProduct(id)
  }

  return (
    <div className='py-10 max-w-screen-xl md:px-12 px-4 mx-auto font-poppins'>
      <dir className='flex justify-between items-center'>
        <h1 className='text-4xl text-cyan-500 font-semibold py-4'>Dashboard</h1>
        <Link href='/dashboard/create'>
          <Button className='bg-sky-500 hover:bg-sky-700 ease-in duration-200'>
            Add Product
          </Button>
        </Link>
      </dir>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px] font-medium text-base text-sky-600'>
              No
            </TableHead>
            <TableHead className='font-medium text-base text-sky-600'>
              Product Name
            </TableHead>
            <TableHead className='font-medium text-base text-sky-600'>
              Brand
            </TableHead>
            <TableHead className='font-medium text-base text-sky-600'>
              Count
            </TableHead>
            <TableHead className='font-medium text-base text-sky-600'>
              Description
            </TableHead>
            <TableHead className='font-medium text-base text-sky-600'>
              Product Price
            </TableHead>
            <TableHead className='text-right font-medium text-base text-sky-600'>
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={product.id}>
              <TableCell>INV00{index + 1}</TableCell>
              <TableCell>{product.productName}</TableCell>
              <TableCell>{product.productBrand}</TableCell>
              <TableCell>{product.productCount}</TableCell>
              <TableCell>
                {product.productDescription.slice(0, 60)}....
              </TableCell>
              <TableCell>Rs.{product.productPrice}</TableCell>
              <TableCell className='text-right'>
                <div className='flex flex-row gap-4'>
                  <Link href={`/dashboard/update/${product._id}`}>
                    <button>
                      <FaRegEdit size={20} color='green' />
                    </button>
                  </Link>
                  <Link href='#'>
                    <button onClick={() => deleteHandler(product._id)}>
                      <MdDelete size={20} color='red' />
                    </button>
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Dashboard
