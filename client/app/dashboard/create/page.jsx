"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import useProductStore from '@/store/productStore';

const CreateProduct = () => {
  const [message, setMessage] = useState('');
  const [productName, setProductName] = useState('');
  const [count, setCount] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const addProduct = useProductStore((state) => state.addProduct);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      productName,
      count: parseInt(count),
      brand,
      price: parseFloat(price),
      description
    };
    await addProduct(productData);
    setMessage('Product added successfully!');
  };

  return (
    <div className='py-10 max-w-screen-xl md:px-12 px-4 mx-auto font-poppins'>
      <Link href='/dashboard'>
        <Button>Go Back</Button>
      </Link>
      <div className='font-poppins py-12'>
        <form
          onSubmit={handleSubmit}
          className='py-6 rounded-lg max-w-lg md:mx-auto mx-4 bg-white px-6'
        >
          {message && (
            <p className='text-green-500 text-center py-2 text-lg'>{message}</p>
          )}
          <div className='py-2 md:px-10 px-4'>
            <h1 className='text-center text-xl text-black font-bold'>
              Create a Product
            </h1>
          </div>
          <div className='space-y-2 mb-5 mx-4 flex flex-col'>
            <Label htmlFor='productName'>Product Name</Label>
            <Input
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              name='productName'
            />
          </div>
          <div className='space-y-2 mb-5 mx-4 flex flex-col'>
            <Label htmlFor='brand'>Brand</Label>
            <Input
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              name='brand'
            />
          </div>
          <div className='space-y-2 mb-5 mx-4 flex flex-col'>
            <Label htmlFor='count'>Count</Label>
            <Input
              value={count}
              onChange={(e) => setCount(e.target.value)}
              type='number'
              name='count'
            />
          </div>
          <div className='space-y-2 mb-5 mx-4 flex flex-col'>
            <Label htmlFor='price'>Product Price</Label>
            <Input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type='number'
              name='price'
            />
          </div>
          <div className='space-y-2 mb-5 mx-4 flex flex-col'>
            <Label htmlFor='description'>Description</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name='description'
            />
          </div>
          <div className='space-y-2 mb-6 mx-4 flex flex-col'>
            <Button
              type='submit'
              className='w-full bg-blue-500 hover:bg-blue-700 ease-in duration-200'
            >
              Add Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
