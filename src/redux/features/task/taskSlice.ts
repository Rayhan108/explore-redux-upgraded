import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState{
    task:ITask[]
}

const initialState:InitialState={
    task:[
        {
            id: "asdfghjks",
            title: "Complete Redux Setup",
            description: "Set up Redux with middleware and state management",
            isComplete: false,
            dueDate: "2025-01-20",
            priority: "high",
            
        }
    ]
}
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{},
})
export default taskSlice.reducer;