import React, { useEffect, useState } from 'react'


function Product() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProduct()
    }, []
    )

    async function getProduct() {
        const data = await fetch(productUrl)
        const json = await data.json()
        const details = json.map((obj) => ({ ...obj, quantity: 1 }))

        setProducts(details)


    }

const dispach=useDispatch();
function HandleAdd(items){
    dispach
}
    return (
        <div>Product</div>
    )
}
import { productItemUrl, productUrl } from '../utils/constants'
import { useDispatch } from 'react-redux'

export default Product