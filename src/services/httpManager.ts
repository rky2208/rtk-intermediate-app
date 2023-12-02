import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseQueryGenerator = (baseApiUrl,prepareHeaders)=>fetchBaseQuery({baseUrl:baseApiUrl,prepareHeaders})

export const createApiEndpoint = (baseQuery,tagTypes,reducerPath,endpoints = ()=>({}),refetchOnMountOrArgChange = 30)=>{
    return createApi({baseQuery,tagTypes,reducerPath,refetchOnMountOrArgChange,endpoints})
}