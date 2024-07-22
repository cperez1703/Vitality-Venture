"use client"

import Navbar from "@/components/navigation/Navbar";
import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import useStore from "@/components/dashboard/useStore";
export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const { points } = useStore();

  return (
    
    <>
      <Navbar points={points} />
      <div className="flex items-center justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
    </>
  );
}
