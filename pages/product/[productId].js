import React,{useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import fetch from 'isomorphic-unfetch'
import Product_detail from '@components/Product_detail/Product_detail'
import { GetStaticPaths, GetStaticProps } from 'next'
//import { route } from 'next/dist/next-server/server/router'


export async function getStaticPaths() {
  // Return a list of possible value for id
  const res = await fetch('https://guitar-nextjs.vercel.app/api/guitar')
  
  const guitars = await res.json()
  

  const paths = guitars.data.map((element) => ({
    params: { productId: element.id },
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the product detail
  const res = await fetch(`https://guitar-nextjs.vercel.app/api/guitar/${params.productId}`)

  const guitar = await res.json()


  return { props: { guitar } }

}      


const ProductItem = ({guitar}) => {
  //guitar sumary
    return (
        <section>
            <Product_detail guitar={guitar}/>
        </section>
    )
}

export default ProductItem