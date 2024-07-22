"use client";

import Navbar from "@/components/navigation/Navbar";
import useStore from "@/components/dashboard/useStore";
export default function Home() {
  const { points } = useStore();

  return (
    <>
      <Navbar points={points} />
      <div className="w-[250px] h-[75px] relative">
        <p className="w-[250px] h-[75px] absolute left-0 top-0 text-[35px] text-center text-black">
          Shop
        </p>
      </div>
    </>
  );
}
