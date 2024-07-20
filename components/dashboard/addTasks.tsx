"use client";

import { useState } from "react";
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

interface AddTasksProps {
  addTask: (text: string, time: string) => void;
}

const AddTasks: React.FC<AddTasksProps> = ({ addTask }) => {
    const [taskText, setTaskText] = useState("");
    const [taskTime, setTaskTime] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleAddTask = () => {
        if (taskText.trim() && taskTime.trim()) {
            addTask(taskText, taskTime);
            setTaskText("");
            setTaskTime("");
            setIsOpen(false);
        }
    };

    return ( 
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button size="lg" variant="outline" onClick={() => setIsOpen(true)}>
                    Add Task
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    <DialogDescription>
                        Create your new task
                    </DialogDescription>
                </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                    Task
                </Label>
                <Input
                    id="name"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    className="col-span-3"
                />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="time" className="text-right">
                    Time
                </Label>
                <Input
                    id="time"
                    value={taskTime}
                    onChange={(e) => setTaskTime(e.target.value)}
                    className="col-span-3"
                />
                </div>
            </div>
            <DialogFooter>
                <Button className="hover:bg-green-600" onClick={handleAddTask}>Create Task</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
     );
}
 
export default AddTasks;
