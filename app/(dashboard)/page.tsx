"use client"

import AddTasks from "@/components/dashboard/addTasks";
import HomeHeader from "@/components/dashboard/homeHeader";
import SortTasks from "@/components/dashboard/sortTasks";
import Navbar from "@/components/navigation/Navbar";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { Check } from "lucide-react";
import EditTasks from "@/components/dashboard/editTasks";

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Drink Water", completed: false, time: "7:00", timeCreated: "7:00" },
    { id: 2, text: "Go Outside", completed: false, time: "7:00", timeCreated: "7:00" },
    { id: 3, text: "Go to the Gym", completed: false, time: "7:00", timeCreated: "7:00" },
    { id: 4, text: "Walk Outside", completed: false, time: "7:00", timeCreated: "7:00" },
    { id: 5, text: "Walk Outside", completed: false, time: "7:00", timeCreated: "7:00" },
    { id: 6, text: "Walk Outside", completed: false, time: "7:00", timeCreated: "7:00" },
    { id: 7, text: "Walk Outside", completed: false, time: "7:00", timeCreated: "7:00" },
  ]);

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
      <Navbar />
      <HomeHeader />
      <div className="flex items-center justify-center columns-2 h-28">
        <div className="w-full flex items-center justify-center text-3xl">
          {tasks.length} Tasks Left for Today!
        </div>
        <div className="w-full flex items-center justify-center columns-2">
          <div className="w-full flex items-center justify-center text-3xl">
            <SortTasks />
          </div>
          <div className="w-full flex items-center justify-center text-3xl">
            <AddTasks />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mb-4">
        <Slider defaultValue={[0]} max={100} step={1} onValueChange={handleSliderChange} />
      </div>
      <div className="w-full h-28 flex items-center mb-4 overflow-x-auto whitespace-nowrap hide-scrollbar" ref={scrollContainerRef}>
        {tasks.map((task, index) => (
          <div className="flex-none flex justify-between items-center px-4 outline outline-1 rounded" style={{ minWidth: '33.33%', marginLeft:'1%' }} key={task.id}>
            <div className="flex justify-center items-center p-2">
              <EditTasks/>
            </div>
            <span className="flex-grow text-center">{task.text}</span>
            <Button className="flex justify-center items-center p-2" variant="ghost">
              <Check className="text-green-500" />
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
