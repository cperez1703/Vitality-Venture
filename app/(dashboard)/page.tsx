"use client";

import { useRef } from "react";
import AddTasks from "@/components/dashboard/addTasks";
import HomeHeader from "@/components/dashboard/homeHeader";
import SortTasks from "@/components/dashboard/sortTasks";
import Navbar from "@/components/navigation/Navbar";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import EditTasks from "@/components/dashboard/editTasks";
import useStore from "@/components/dashboard/useStore";

export default function Home() {
  const { tasks, points, addTask, saveTask, completeTask, deleteTask, sortTasks } = useStore();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleSliderChange = (value: number[]) => {
    const container = scrollContainerRef.current;
    if (container) {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      container.scrollLeft = (maxScrollLeft * value[0]) / 100;
    }
  };

  return (
    <>
      <Navbar points={points} />
      <HomeHeader />
      <div className="flex items-center justify-center columns-2 h-28">
        <div className="w-full flex items-center justify-center text-3xl">
          {tasks.length} Tasks Left for Today!
        </div>
        <div className="w-full flex items-center justify-center columns-2">
          <div className="w-full flex items-center justify-center text-3xl">
            <SortTasks onSort={sortTasks} />
          </div>
          <div className="w-full flex items-center justify-center text-3xl">
            <AddTasks addTask={addTask} />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mb-4">
        <Slider defaultValue={[0]} max={100} step={1} onValueChange={handleSliderChange} className="justify-center w-8/12" />
      </div>
      <div className="w-full h-28 flex items-center mb-4 overflow-x-auto whitespace-nowrap hide-scrollbar" ref={scrollContainerRef}>
        {tasks.map(task => (
          <div className="flex-none flex justify-between items-center px-4 outline outline-1 rounded" style={{ minWidth: '33.33%', marginLeft: '1%' }} key={task.id}>
            <div className="flex justify-center items-center p-2">
              <EditTasks task={task} onSave={saveTask} onDelete={deleteTask} />
            </div>
            <span className="flex-grow text-center">{task.text} ({task.time})</span>
            <Button
              className="flex justify-center items-center p-2"
              variant="ghost"
              onClick={() => !task.completed && completeTask(task.id)}
              disabled={task.completed}
            >
              <Check className={`text-green-500 ${task.completed ? 'opacity-50 text-rose-500' : ''}`} />
            </Button>
          </div>
        ))}
      </div>
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, and Opera */
        }
      `}</style>
    </>
  );
}
