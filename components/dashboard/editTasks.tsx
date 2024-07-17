"use client";

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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EllipsisVertical } from "lucide-react";

const EditTasks = () => {
    return ( 
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost">
                    <EllipsisVertical/>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Task</DialogTitle>
                    <DialogDescription>
                        Edit your existing task
                    </DialogDescription>
                </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                    Task
                </Label>
                <Input
                    id="name"
                    defaultValue="Drink Water"
                    className="col-span-3"
                />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="Time" className="text-right">
                    Time
                </Label>
                <Input
                    id="time"
                    defaultValue="6:00am"
                    className="col-span-3"
                />
                </div>
            </div>
            <DialogFooter>
                <Button className="hover:bg-green-600" type="submit">Edit Task</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
     );
}
 
export default EditTasks;