import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}
type draftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: draftTask): ITask => {
  return {
    id: nanoid(),
    isComplete: false,
    ...taskData,
  };
};

const initialState: InitialState = {
  tasks: [
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
        isComplete: true,
        dueDate: "2025-01-20",
        priority: "low",
        
    },
  ],
  filter: "all",
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    updateTask: (state, action: PayloadAction<ITask>) => {
      const { id } = action.payload; 
  const index = state.tasks.findIndex((task) => task.id === id);

  if (index !== -1) {
  
    state.tasks[index] = {  ...action.payload };
  }
    },
    toggleCompleteState:(state,action:PayloadAction<string>)=>{
      // console.log(action);
        state.tasks.forEach((task)=>{
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            task.id === action.payload ? (task.isComplete = !task.isComplete) 
            : task
        })
    },
    deleteTask:(state,action:PayloadAction<string>)=>{
state.tasks = state.tasks.filter((task)=>task.id !== action.payload);
    }
  },
});
export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};
export const { addTask,toggleCompleteState,deleteTask,updateTask } = taskSlice.actions;
export default taskSlice.reducer;
