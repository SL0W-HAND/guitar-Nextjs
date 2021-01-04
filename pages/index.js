import React, { Component, useEffect, useState } from 'react'
import Card from '../components/Card/Card.js'

const Home = () => {
    
    const [productList,setProductList] = useState([])

    useEffect(()=>{
        window.fetch('api/guitar')
        .then((response) =>  response.json() )
        .then((response)=>{
            if (response) {
                setProductList(response.data)
                console.log(productList)
            }  
        })
       
    },[])

     return (
        <div className='products_container'>    
            {productList.length > 0 
                ? productList.map((element) => {
                    return <Card name={element.name} price={element.price} image={element.image} stars={element.stars} key={element.id.toString()}/>
                })
                : null
            }
        </div>
     )
}

export default Home