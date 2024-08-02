"use client";

import { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import useStore from "@/components/dashboard/useStore";
import Image from "next/image";
import Hats from "@/components/character/hats";
import Eyes from "@/components/character/eyes";
import Shirts from "@/components/character/shirts";
import Pants from "@/components/character/pants";
import Shoes from "@/components/character/shoes";
import Accessories from "@/components/character/accessories";
import Gator from "@/components/character/gator";
import useCharacterStore from "@/components/character/useCharacterStore";

export default function Home() {
  const { points } = useStore();
  const { hat, setHat, eye, setEye, shirt, setShirt, pants, setPants, shoes, setShoes, accessories, setAccessories  } = useCharacterStore();

  return (
    <>
      <div className="relative flex flex-col h-screen bg-cover bg-center">
        <Navbar points={points} />
        <div className="flex top-0 left-0 w-full h-full">
          <div className="flex-1 flex flex-col items-center justify-center p-2">
            <Hats setHat={setHat}/>
            <Eyes setEye={setEye}/>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-2">
            <div className="relative flex items-center justify-center">
              <Gator
                hat={hat}
                eyes={eye}
                shirt={shirt}
                pants={pants}
                shoes={shoes}
                accessories={accessories}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-2">
            <Shoes setShoes={setShoes}/>
            <Accessories setAccessories={setAccessories}/>
          </div>
        </div>
      </div>
    </>
  );
}
