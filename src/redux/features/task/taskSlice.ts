import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState{
    tasks:ITask[],
    filter:"all"|"high"|"medium"|"low";
}

const initialState:InitialState={
    tasks:[
        {
            id: "hjklsdfghjks",
            title: "Complete Redux Setup",
            description: "Set up Redux with middleware and state management",
            isComplete: false,
            dueDate: "2025-01-20",
            priority: "high",
            
        },
        {
            id: "asdfghjks",
            title: "init github repo",
            description: "create test branch",
            isComplete: false,
            dueDate: "2025-01-20",
            priority: "medium",
            
        },
        {
            id: "sdfghjkhghjs",
            title: "init github repo",
            description: "create test branch",
            isComplete: false,
            dueDate: "2025-01-20",
            priority: "low",
            
        },
    ],
    filter:"all"
}
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{},
})
export const selectTasks = (state:RootState)=>{
    return state.todo.tasks;
}
export const selectFilter = (state:RootState)=>{
    return state.todo.filter;
}
export default taskSlice.reducer;