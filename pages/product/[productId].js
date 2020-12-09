import React from 'react'
import {useRouter} from 'next/router'
//import { route } from 'next/dist/next-server/server/router'

const ProductItem = () => {

    const { 
        query: {productId}
    } = useRouter();
    return (
        <div>
            pagina del producto:{productId}
        </div>
    )
}

export default ProductItem
