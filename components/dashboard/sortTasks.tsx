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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SortTasksProps {
  onSort: (criteria: string) => void;
}

const SortTasks = ({ onSort }: SortTasksProps) => {
  const [selectedSort, setSelectedSort] = useState<string>("");

  const handleSort = () => {
    onSort(selectedSort);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline">
          Sort Tasks
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sort Tasks</DialogTitle>
          <DialogDescription>
            Filter your Tasks by
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Select value={selectedSort} onValueChange={setSelectedSort}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select criteria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="completion">Completion</SelectItem>
              <SelectItem value="time">Time</SelectItem>
              <SelectItem value="create">Created</SelectItem>
              <SelectItem value="alphabet">Alphabetically</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <Button
            className="hover:bg-green-600"
            type="button"
            onClick={handleSort}
          >
            Sort Tasks
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SortTasks;
