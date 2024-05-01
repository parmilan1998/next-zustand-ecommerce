import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <section className='relative font-poppins  bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat'>
      <div className='absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l'></div>

      <div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
        <div className='max-w-xl text-center ltr:sm:text-left rtl:sm:text-right'>
          <h1 className='text-3xl font-extrabold sm:text-5xl space-y-3'>
            Let us find your
            <strong className='block font-extrabold py-2 text-indigo-800'>
              Forever Mobiles.
            </strong>
          </h1>
          <p className='mt-4 max-w-lg sm:text-xl/relaxed text-stone-800'>
            Shop the latest trends in fashion and accessories. Discover
            unbeatable deals and elevate your style today!
          </p>
          <div className='py-3 space-x-2'>
            <Link href='/product'>
              <Button className='bg-red-500 hover:bg-red-700 ease-in duration-200'>
                Shop Now
              </Button>
            </Link>
            <Button className='bg-sky-500 hover:bg-sky-700 ease-in duration-200'>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
