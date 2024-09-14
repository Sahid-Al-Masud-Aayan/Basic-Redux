import { configureStore } from '@reduxjs/toolkit'
import Mainslice from './Slices/counterslice'

export default configureStore({
  reducer: {
    
    counter: Mainslice
  },
})