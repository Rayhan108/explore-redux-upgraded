import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddTaskModal } from "@/module/AddTaskModal/AddTaskModal";
import TaskCard from "@/module/Task/taskCard";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import { ITask } from "@/types";

const Tasks = () => {
  // const tasks = useAppSelector(selectTasks);
  // const filter =useAppSelector(selectFilter)
//   console.log(tasks);
// const dispatch = useAppDispatch();

const {data,isLoading}=useGetTasksQuery(undefined);


if(isLoading){
  <p className="flex h-screen items-center">Loading...</p>
}


  return (
    <>
      <h1 className="text-3xl flex justify-center items-center">Tasks List</h1>
  
      <div className="mx-auto max-w-7xl px-5 mt-10">
        <div className="flex justify-end">
          <div className="mr-5">
          <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-4">
        {/* onClick={()=>dispatch(updateFilter("all"))} */}
          <TabsTrigger  value="all">All</TabsTrigger>
          <TabsTrigger  value="low">Low</TabsTrigger>
          <TabsTrigger value="medium">Medium</TabsTrigger>
          <TabsTrigger  value="high">High</TabsTrigger>
        </TabsList>
      </Tabs>
          </div>
          <AddTaskModal />
        </div>
        <div className="space-y-5 mt-5">
          {!isLoading && data.tasks?.map((task:ITask) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Tasks;
