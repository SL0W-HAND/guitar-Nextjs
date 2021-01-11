import React from 'react'

import Image from 'next/image'
import Link from 'next/link'



const Navbar = () => {
    
    return (
        <div className='nav-container'>
            <nav className='nav'>
                <div className='nav_links'>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </div>
                <figure>
                    <Image src='/images/assets/guitar-pick.svg'  width="40" height="40"  alt='favicon'/>
                </figure>
            </nav>
        </div>
    )
}

export default Navbar
