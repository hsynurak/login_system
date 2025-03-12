//Bütün storelarımızı bir araya getirip birleştireceğimiz yer
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice' //userSlice ismi ile export ettik ancak userReducer olarak import ettik
import { thunk } from 'redux-thunk'

export const store = configureStore({
     reducer:{
          user: userReducer
     },
     middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
})