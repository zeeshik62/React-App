import React from 'react'
import {products} from '../products'
import Cards from '../components/Cards'
import { useState } from "react"

const Home = () => {
    const [product,setProduct]=useState(products);
    
  return (
    <div className="row">
    {
      product.map(p=><Cards prod={p}/>)
    }
    </div>
  )
}

export default Home