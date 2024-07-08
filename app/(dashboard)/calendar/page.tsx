"use client"

import Navbar from "@/components/navigation/Navbar";
import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <>
      <Navbar/>
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
