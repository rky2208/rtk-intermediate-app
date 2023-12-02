import {configureStore}  from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import apiEndpointManger from "../services/apiEndpointManger";
export const store =  configureStore({
    reducer:{
        [apiEndpointManger.entertainment.reducerPath]:apiEndpointManger.entertainment.reducer,
        [apiEndpointManger.sports.reducerPath]:apiEndpointManger.sports.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
        .concat(apiEndpointManger.entertainment.middleware)
        .concat(apiEndpointManger.sports.middleware)
})

setupListeners(store.dispatch);