import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/slice/counterSlice'
import productReducer from '../store/slice/productSlice'
const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
  },
})
export default store;