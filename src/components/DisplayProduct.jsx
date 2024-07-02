import { Button } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetToZero } from '../store/slice/counterSlice';

const DisplayProduct = () => {
  const dispatch = useDispatch();
  const values = useSelector((state)=>state.product.productName);
  console.log(values);
  return (
    <div style={{backgroundColor:"green"}}>
      This is from DisplayProduct component
      <h2>Product Name is :{values}</h2>
      <Button variant='contained' onClick={()=>{dispatch(resetToZero())}}>Reset count </Button>
      <hr/>
      </div>
  )
}

export default DisplayProduct