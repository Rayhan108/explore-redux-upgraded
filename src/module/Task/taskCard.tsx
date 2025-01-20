
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { deleteTask, toggleCompleteState } from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import { ITask } from "@/types";
import { Trash2 } from "lucide-react";
import { UpdateTask } from "../UpdateTask";

interface IProps{
    task:ITask;
}

export default function TaskCard({task}:IProps) {
  const dispatch = useAppDispatch();
  return (
<div className="border px-6 py-4 rounded-md shadow-sm">
  <div className="flex justify-between items-center">
    {/* Task Title Section */}
    <div className="flex gap-4 items-center">
      {/* Status Indicator */}
      <div className={cn("w-3 h-3 rounded-full",{
        " bg-green-500":task.priority == "low",
        " bg-yellow-500":task.priority == "medium",
        " bg-red-500":task.priority == "high",
      })}></div>
      {/* Task Title */}
      <h1 className={cn("text-lg font-semibold",{"line-through":task.isComplete})}>{task.title}</h1>
    </div>

    {/* Action Buttons */}
    <div className="flex gap-3 items-center">
      <div  >
        <UpdateTask task={task}/>
      </div>
      <Trash2 onClick={()=>dispatch(deleteTask(task.id))} className="text-gray-500 cursor-pointer hover:text-red-500" />
      <Checkbox checked={task.isComplete} className="cursor-pointer"  onClick={()=>dispatch(toggleCompleteState(task.id))}/>
    </div>
  </div>

  {/* Task Description */}
  <p className="mt-4 text-sm text-gray-700">{task.description}</p>
</div>

  );
}
