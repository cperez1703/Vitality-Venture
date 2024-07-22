"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EllipsisVertical } from "lucide-react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
  time: string;
  timeCreated: string;
}

interface EditTasksProps {
  task: Task;
  onSave: (updatedTask: Task) => void;
  onDelete: (taskId: number) => void;
}

const EditTasks = ({ task, onSave, onDelete }: EditTasksProps) => {
  const [editText, setEditText] = useState(task.text);
  const [editTime, setEditTime] = useState(task.time);
  const [isOpen, setIsOpen] = useState(false);

  const handleSave = () => {
    const updatedTask = { ...task, text: editText, time: editTime };
    onSave(updatedTask);
    setIsOpen(false);
  };

  const handleDelete = () => {
    onDelete(task.id);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" onClick={() => setIsOpen(true)}>
          <EllipsisVertical />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogDescription>Edit your existing task</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Task
            </Label>
            <Input
              id="name"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="time" className="text-right">
              Time
            </Label>
            <Input
              id="time"
              value={editTime}
              onChange={(e) => setEditTime(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleDelete} className="hover:bg-rose-600" type="button">
            Delete Task
          </Button>
          <Button onClick={handleSave} className="hover:bg-green-600" type="button">
            Edit Task
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditTasks;