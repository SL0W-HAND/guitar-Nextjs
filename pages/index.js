import React, { useEffect, useState } from 'react'
import Card from '../components/Card/Card.js'


export async function getStaticProps() {
    // Fetch necessary data for the index page
    const res = await fetch('https://guitar-nextjs.vercel.app/api/guitar/')
  
    const guitars = await res.json()
  
    return { props: { guitars } }
  
  }      

const Home = ({guitars}) => {
    
     return (
        <main className='Home'>    
            { guitars.data.map((element) => {
                    return <Card 
                                name={element.name} 
                                image={element.image} 
                                id={element.id.toString()} 
                                key={element.id.toString()}
                            />
                  })
                
            }
        </main>
     )
}

export default Home