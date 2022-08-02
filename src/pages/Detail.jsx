import React from 'react'
import {useParams} from "react-router-dom"
import { products } from '../products';
const Detail = () => {
    const {id}=useParams();
   const product= products.find(p=>p.id === Number(id))
  return (
    <div>
        <p>{product.title}</p>
        <p>{product.Price}</p>
    </div>
  )
}

export default Detail