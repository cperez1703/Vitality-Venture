"use client";

import { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import useStore from "@/components/dashboard/useStore";
import Image from "next/image";
import Hats from "@/components/shop/hats";
import Eyes from "@/components/shop/eyes";
import Shoes from "@/components/shop/shoes";
import Accessories from "@/components/shop/accessories";
import Gator from "@/components/character/gator";
import useCharacterStore from "@/components/character/useCharacterStore";

export default function Home() {
  const { points } = useStore();
  const { hat, setHat, eye, setEye, shirt, setShirt, pants, setPants, shoes, setShoes, accessories, setAccessories  } = useCharacterStore();

  return (
    <>
      <Navbar points={points} />
      <div className="flex">
        <div className="flex-1 flex flex-col items-center justify-center p-2">
          <Hats />
          <Eyes />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-2">
          <div className="w-full flex items-center justify-center mb-4 relative">
            <Image src="/sign.png" height={300} width={300} alt="Sign Logo" />
          </div>
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
          <Shoes />
          <Accessories />
        </div>
      </div>
    </>
  );
}
