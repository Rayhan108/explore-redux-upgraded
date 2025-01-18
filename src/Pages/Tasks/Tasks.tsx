import TaskCard from "@/module/Task/taskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  // const filter =useAppSelector(selectFilter)
  console.log(tasks);

  return (
  <>
    <h1 className="text-3xl flex justify-center items-center">
          Tasks List
        </h1>
     
  <div className="mx-auto max-w-7xl px-5 mt-10">
    
      <div className="space-y-5 mt-5">
     {
        tasks?.map(task=><TaskCard/>)
     }
      </div>
    </div>
  </>
  );
};

export default Tasks;
