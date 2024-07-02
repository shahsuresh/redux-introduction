import React from 'react'
import Counter from './components/Counter'
import '../src/App.css';
import ProductCard from './components/ProductCard'
import DisplayProduct from './components/DisplayProduct'

const App = () => {
  return (
    <div>
    <ProductCard/>
    <DisplayProduct/>
      <Counter/>

    </div>
  )
}

export default App