import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

const Navbar = () => {
  return ( 
    <div className='p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10 '>
<div className='container mx-auto flex justify-between items-center '>
    <Link href={'/'}>
        <div>Porfolio</div>
    </Link>
<div className='md:flex hidden items-center space-x-4'>
    <Link href={'/'}>Home</Link>
    <Link href={'/'}>About</Link>
    <Link href={'/'}>Contact</Link>
    <Link href={'/'}>Blog</Link>
    <div className='flex items-center'>
    <Button className='mx-1'>Sign In</Button>
    <Button className='mx-1'>Sign Up</Button>
</div>

</div>
<div className='md:hidden flex items-center'>
    <Button className=''>Menu</Button>
</div>

    </div>

 
    </div>
  )
}

export default Navbar