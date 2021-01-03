import React from 'react'
import Link from 'next/Link'

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
                    <img source='@components/assets/guitar-pick.svg' alt='favicon'/>
            </figure>
        </nav>
    )
}

export default Navbar
