'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import useAuthStore from '@/store/authStore'
import { useRouter } from 'next/navigation'

const Header = () => {
  const logout = useAuthStore((state) => state.logout)
  const loggedIn = useAuthStore((state) => state.loggedIn)
  const user = useAuthStore((state) => state.user)
  const router = useRouter()

  useEffect(() => {
    if (!loggedIn) {
      router.push('/')
    }
  }, [loggedIn])

  const handleLogout = async () => {
    await logout()
    router.push('/')
  }

  return (
    <>
      <header className='bg-white font-poppins'>
        <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <div className='md:flex md:items-center md:gap-12'>
              <Link className='block text-teal-600' href='/'>
                <span className='sr-only'>Home</span>
                <h1 className='text-3xl text-cyan-600 font-bold'>
                  Tech<span className=' text-sky-500'>Treasure</span>
                </h1>
              </Link>
            </div>
            <div className='hidden md:block'>
              <nav aria-label='Global'>
                <ul className='flex items-center gap-6 text-sm'>
                  {loggedIn && user.role === 'admin' && (
                    <li>
                      <Link
                        className='text-gray-500 transition hover:text-gray-500/75 text-base'
                        href='/dashboard'
                      >
                        Dashboard
                      </Link>
                    </li>
                  )}
                  <li>
                    <Link
                      className='text-gray-500 transition hover:text-gray-500/75 text-base'
                      href='/shop'
                    >
                      Shop
                    </Link>
                  </li>

                  <li>
                    <Link
                      className='text-gray-500 transition hover:text-gray-500/75 text-base'
                      href='/contact'
                    >
                      Contact
                    </Link>
                  </li>

                  <li>
                    <Link
                      className='text-gray-500 transition hover:text-gray-500/75 text-base'
                      href='/about'
                    >
                      About
                    </Link>
                  </li>
                  {loggedIn && user.role !== 'admin' && (
                    <li>
                      <Link
                        className='text-gray-500 transition hover:text-gray-500/75 text-base'
                        href='/cart'
                      >
                        Cart
                      </Link>
                    </li>
                  )}
                  {loggedIn && user.role !== 'admin' && (
                    <li>
                      <Link
                        className='text-gray-500 transition hover:text-gray-500/75 text-base'
                        href='#'
                      >
                        Feedback
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            </div>

            <div className='flex items-center gap-4'>
              <div className='sm:flex sm:gap-4'>
                {/* Login */}
                {loggedIn ? (
                  <>
                    <Button
                      onClick={handleLogout}
                      className='bg-red-500 text-white hover:bg-red-600'
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <Link href='/login'>
                    <Button className='bg-cyan-500 text-white hover:bg-cyan-600'>
                      Login
                    </Button>
                  </Link>
                )}
              </div>

              <div className='block md:hidden'>
                <button className='rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
