import React from 'react'
import Link from 'next/Link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className='nav'>
           <div className='nav_links'>
                <Link href="/">
                    <a >Home</a>
                </Link>
                <Link href="/about">
                    <a >About</a>
                </Link>   
            </div>
            <figure>
                <Image src='/images/assets/guitar-pick.svg'  width="40" height="40"  alt='favicon'/>
            </figure>
        </nav>
    )
}

export default Navbar
