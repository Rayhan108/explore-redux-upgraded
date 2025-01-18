import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";


const Tasks = () => {
    const tasks =useAppSelector(selectTasks)
    const filter =useAppSelector(selectFilter)
    console.log(tasks);
    console.log(filter);
    return (
        <div>
             <h1 className="text-3xl h-screen flex justify-center items-center">This is Tasks page</h1>
        </div>
    );
};

export default Tasks;