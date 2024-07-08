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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const SortTasks = () => {
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
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Time" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="time">Time</SelectItem>
                    <SelectItem value="date">Date Created</SelectItem>
                    <SelectItem value="alphabet">Alphabetically</SelectItem>
                </SelectContent>
            </Select>
            </div>
            <DialogFooter>
                <Button className="hover:bg-green-600" type="submit">Sort Tasks</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
     );
}
 
export default SortTasks;