

import { configureStore } from '@reduxjs/toolkit'
import { convertSlice } from './slices/convert'

export const store = configureStore({
  reducer: {
     convert: convertSlice.reducer,
    
  },
})