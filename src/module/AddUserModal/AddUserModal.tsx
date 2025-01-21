import { Button } from "@/components/ui/button"

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

import { useState } from "react";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"


export function AddUserModal() {
   const [open,setOpen]=useState(false);
    const form = useForm();
    // const dispatch = useAppDispatch();
    const onSubmit:SubmitHandler<FieldValues> = (data)=>{
        console.log(data);
        // dispatch(addUser(data as IUser));
        setOpen(false);
        form.reset();
    }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button >Add User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription className="sr-only">Fillup this form to add User</DialogDescription>
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
         
        </DialogHeader>
     <Form {...form}>
 <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
 <FormField
    control={form.control}
    name="name"
    render={({field}) => (
      <FormItem>
         <FormLabel>Title</FormLabel>
        <FormControl>
          <Input {...field} value={field.value||""}/>
        </FormControl>
      
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
