import React from 'react'
import { useSelector } from 'react-redux';

const ProductCard = () => {
  const values = useSelector((state)=>state.product);
  console.log(values);
  return (
    <div style={{backgroundColor:"orange"}}>
      <h5>this is from ProductCard component </h5>
      <h4>{values.productName}</h4>

    </div>
  )
}

export default ProductCard;