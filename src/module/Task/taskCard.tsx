import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";

export default function TaskCard() {
  return (
<div className="border px-6 py-4 rounded-md shadow-sm">
  <div className="flex justify-between items-center">
    {/* Task Title Section */}
    <div className="flex gap-4 items-center">
      {/* Status Indicator */}
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
      {/* Task Title */}
      <h1 className="text-lg font-semibold">Task Title</h1>
    </div>

    {/* Action Buttons */}
    <div className="flex gap-3 items-center">
      <Button variant="link" className="p-0 text-red-500">
        Edit
      </Button>
      <Trash2 className="text-gray-500 cursor-pointer hover:text-red-500" />
      <Checkbox className="cursor-pointer" />
    </div>
  </div>

  {/* Task Description */}
  <p className="mt-4 text-sm text-gray-700">Task Description</p>
</div>

  );
}
