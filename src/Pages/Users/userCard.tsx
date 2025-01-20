
import { cn } from "@/lib/utils";
import { removeUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import {  IUser } from "@/types";
import { Trash2 } from "lucide-react";


interface IProps{
    user:IUser;
}

export default function UserCard({user}:IProps) {
  const dispatch = useAppDispatch();
  return (
<div className="border px-6 py-4 rounded-md shadow-sm">
  <div className="flex justify-between items-center">
    {/* Task Title Section */}
    <div className="flex gap-4 items-center">
      {/* Status Indicator */}
      <div className={cn("w-3 bg-green-500 h-3 rounded-full",{
        // " bg-green-500":task.priority == "low",
        
      })}></div>
      {/* Task Title */}
      <h1 className={"text-lg font-semibold"}>{user.name}</h1>
    </div>

    {/* Action Buttons */}
    <div className="flex gap-3 items-center">

      <Trash2 onClick={()=>dispatch(removeUser(user.id))} className="text-gray-500 cursor-pointer hover:text-red-500" />
   
    </div>
  </div>

</div>

  );
}
