import { configureStore } from '@reduxjs/toolkit'
import globalReducer from '../features/global/global-slice'

export const store = configureStore({
    reducer: {
        global: globalReducer
    }
})