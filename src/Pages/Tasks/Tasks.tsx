import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddTaskModal } from "@/module/AddTaskModal/AddTaskModal";
import TaskCard from "@/module/Task/taskCard";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  // const filter =useAppSelector(selectFilter)
  console.log(tasks);
const dispatch = useAppDispatch();
  return (
    <>
      <h1 className="text-3xl flex justify-center items-center">Tasks List</h1>
  
      <div className="mx-auto max-w-7xl px-5 mt-10">
        <div className="flex justify-end">
          <div className="mr-5">
          <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger onClick={()=>dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
          <TabsTrigger onClick={()=>dispatch(updateFilter("low"))} value="low">Low</TabsTrigger>
          <TabsTrigger onClick={()=>dispatch(updateFilter("medium"))} value="medium">Medium</TabsTrigger>
          <TabsTrigger onClick={()=>dispatch(updateFilter("high"))} value="high">High</TabsTrigger>
        </TabsList>
      </Tabs>
          </div>
          <AddTaskModal />
        </div>
        <div className="space-y-5 mt-5">
          {tasks?.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Tasks;
