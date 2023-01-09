import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './features/cartSlice'
import textfieldReducer from './features/textfieldSlice'
import { combineReducers } from "@reduxjs/toolkit";

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
  }


const reducers=combineReducers({
    cart:cartReducer,
    Text:textfieldReducer
})
const persistedReducer = persistReducer(persistConfig, reducers)


const store=configureStore({
    reducer:persistedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export const persistor = persistStore(store)
export default store;