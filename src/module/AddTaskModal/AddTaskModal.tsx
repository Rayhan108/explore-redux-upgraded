import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,

  DialogDescription,

  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent,  SelectItem,  SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
// import { useCreateTasksMutation } from "@/redux/api/baseApi";
import { addTask } from "@/redux/features/task/taskSlice";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { ITask } from "@/types";
// import { addTask } from "@/redux/features/task/taskSlice";
// import { selectUsers } from "@/redux/features/user/userSlice";
// import { useAppDispatch, useAppSelector } from "@/redux/hook";
// import { ITask } from "@/types";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"


export function AddTaskModal() {
  const [open,setOpen]=useState(false);
    const form = useForm();
    const users = useAppSelector(selectUsers)
    const dispatch = useAppDispatch();
    // const [createTask,{data,isLoading}]= useCreateTasksMutation();
    const onSubmit:SubmitHandler<FieldValues> =(data)=>{
        console.log(data);
        dispatch(addTask(data as ITask));
      //   const taskData={
      //     ...data,
      //     isComplete:false
      //   }
      // const res = await  createTask(taskData).unwrap();
        setOpen(false);
        form.reset()
    }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button >Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription className="sr-only">Fillup this form to add task</DialogDescription>
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
         
        </DialogHeader>
     <Form {...form}>
 <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
 <FormField
    control={form.control}
    name="title"
    render={({field}) => (
      <FormItem>
         <FormLabel>Title</FormLabel>
        <FormControl>
          <Input {...field} value={field.value||""}/>
        </FormControl>
      
      </FormItem>
    )}
  />
 <FormField
    control={form.control}
    name="description"
    render={({field}) => (
      <FormItem>
        <FormLabel>Description</FormLabel>
        <FormControl>
          <Textarea {...field} value={field.value||""}/>
        </FormControl>
      
      </FormItem>
    )}
  />
   <FormField
          control={form.control}
          name="dueDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Due Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        " pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    // disabled={(date) =>
                    //   date > new Date() || date < new Date("1900-01-01")
                    // }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
      
            </FormItem>
          )}
        />
  <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Priority</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Priority to set" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
        
            </FormItem>
          )}
        />
  <FormField
          control={form.control}
          name="assignedTo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Assigned To</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a user for assign task" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                    users.map((user)=>( <SelectItem key={user.id} value={user.id}>{user.name}</SelectItem>))
                  }
                 
           
                </SelectContent>
              </Select>
        
            </FormItem>
          )}
        />
        <DialogFooter>
          <Button className="mt-5" type="submit">Save changes</Button>
        </DialogFooter>
 </form>
     </Form>
      </DialogContent>
    </Dialog>
  )
}
