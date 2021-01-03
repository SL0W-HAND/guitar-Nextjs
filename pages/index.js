import React, { Component, useEffect, useState } from 'react'

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
        <div>    
            {productList.length > 0 
                ? productList[0].name
                : null
            }
        </div>
     )
}

export default Home