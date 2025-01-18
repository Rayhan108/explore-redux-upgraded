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
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form"


export function AddTaskModal() {
    const form = useForm();
    const onSubmit = (data)=>{
        console.log(data);
    }
  return (
    <Dialog>
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
    name="Due Date"
    render={({field}) => (
      <FormItem>
        <FormLabel>Deu Date</FormLabel>
        <FormControl>
          <Calendar {...field} />
        </FormControl>
      
      </FormItem>
    )}
  />
 <FormField
    control={form.control}
    name="Priority"
    render={({field}) => (
      <FormItem>
        <FormLabel>Priority</FormLabel>
        <FormControl>
        <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="low">Low</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
        </FormControl>
      
      </FormItem>
    )}
  />
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
 </form>
     </Form>
      </DialogContent>
    </Dialog>
  )
}
