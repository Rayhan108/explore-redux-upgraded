import {configureStore} from "@reduxjs/toolkit"

//import logger from "./midlewares/logger";
import taskReducer from "./features/task/taskSlice"
import userReducer from "./features/user/userSlice"
export const store = configureStore({
    reducer:{
        
        todo:taskReducer,
        user:userReducer
    },
  //  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;