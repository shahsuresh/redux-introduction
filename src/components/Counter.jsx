import { Button, Divider, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementCount } from '../store/slice/counterSlice';


const Counter = () => {
    const values = useSelector((state)=>state.counter);
    const dispatch = useDispatch();
  return (
    <div> 
        
        <Button variant='contained' onClick={()=>{dispatch(incrementCount())}}>Increase counter</Button>
        <Typography variant='h4'>{values.value}</Typography>
        
        <hr/>
        <Divider/>
        <hr/>
        <Button variant='contained' onClick={()=>{dispatch(decrementCount())}}>Decrease Count</Button>
       

    </div>
  )
}

export default Counter