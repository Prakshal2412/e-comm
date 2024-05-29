import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const Navicons = () => {
  const [isProfileOpen,setIsProfileOpen]=useState(false);
  const [isCartOpen,setIsCartOpen]=useState(false);
  return (
    <div className='flex items-center gap-4 xl:gap-6'>
      <Image src="/profile.png" alt="" width={22} height={22} className='cursor-pointer' 
      />
      {isProfileOpen && (
      <div>
        <Link href="/">Profile</Link>
        <div className='mt-2 cursor-pointer'>Logout</div>
      </div>
    )}
      <Image src="/notification.png" alt="" width={22} height={22} className='cursor-pointer'/>
      <Image src="/cart.png" alt="" width={22} height={22} className='cursor-pointer'/>
    </div>
  )
}

export default Navicons
