"use client"

import Navbar from "@/components/navigation/Navbar";
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import useStore from "@/components/dashboard/useStore";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const { tasks, points } = useStore();

  return (
    <>
      <Navbar points={points} />
      <div className="flex items-start justify-center space-x-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-semibold">Tasks Completed Today</h2>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <div key={task.id} className="bg-gray-100 p-4 rounded-md">
                {task.text}
              </div>
            ))
          ) : (
            <p>No tasks completed today.</p>
          )}
        </div>
      </div>
    </>
  );
}
