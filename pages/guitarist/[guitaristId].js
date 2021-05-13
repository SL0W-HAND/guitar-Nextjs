import React,{useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import fetch from 'isomorphic-unfetch'
import Guitarist_detail from '@components/Guitarist_detail/Guitarist_detail'
import { GetStaticPaths, GetStaticProps } from 'next'
//import { route } from 'next/dist/next-server/server/router'


export async function getStaticPaths() {
  // Return a list of possible value for id
  const res = await fetch('https://guitar-nextjs.vercel.app/api/guitar')
  
  const guitars = await res.json()

  const paths = guitars.data.map((element) => ({

    params: { guitaristId: element.id },
  }))


  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the product detail
  const res = await fetch(`https://guitar-nextjs.vercel.app/api/guitar/${params.guitaristId}`)

  const guitar = await res.json()

  return { props: { guitar } }
}      


const ProductItem = ({guitar}) => {
  //guitar sumary
    return (
            <Guitarist_detail guitarist={guitar}/>  
    )
}

export default ProductItem