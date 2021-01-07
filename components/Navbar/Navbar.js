import React from 'react'

import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <nav className='nav'>
            <div className='nav_links'>
                   
                        <a  href="/">Home</a>
                    
                 
                        <a href="/about">About</a>
                     
                </div>
                <figure>
                    <Image src='/images/assets/guitar-pick.svg'  width="40" height="40"  alt='favicon'/>
                </figure>
            </nav>
        </div>
    )
}

export default Navbar
