import {configureStore} from "@reduxjs/toolkit"
import { baseApi } from "./api/baseApi";

//import logger from "./midlewares/logger";
// import taskReducer from "./features/task/taskSlice"
// import userReducer from "./features/user/userSlice"
export const store = configureStore({
    reducer:{
        
        // todo:taskReducer,
        // user:userReducer
        [baseApi.reducerPath]:baseApi.reducer,
    },
   middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;