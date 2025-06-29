import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import Homepages from "./ReduxThunk/Homepage";

const reducer = combineReducers({
    Homepages: Homepages,
})

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store  