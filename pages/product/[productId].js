import React,{useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import fetch from 'isomorphic-unfetch'
import Product_detail from '@components/Product_detail/Product_detail'
import { GetStaticPaths, GetStaticProps } from 'next'
//import { route } from 'next/dist/next-server/server/router'





const ProductItem = () => {

    const { 
        query: {productId}
    } = useRouter();
    return (
        <div>
            page of{productId}
        </div>
    )
}

export default ProductItem