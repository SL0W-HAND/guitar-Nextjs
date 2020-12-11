import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';


const Home = () => {

    const [productList,setProductList] = useState([])

    useEffect(() => {
        window.fetch('/api/guitar')
        .then(res => res.json())
        .then(({data,lenght})=>{
            setProductList(data)
            
        })   
    }, [])

    return (
        <div>
            <Navbar/>
            {productList.map(element => {
               <h1>{element.name}</h1> 
            })}
        </div>
    )

}
        


export default Home
