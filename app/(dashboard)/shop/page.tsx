"use client";

import { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import useStore from "@/components/dashboard/useStore";
import Image from "next/image";
import Hats from "@/components/shop/hats";
import Eyes from "@/components/shop/eyes";
import Shirts from "@/components/shop/shirts";
import Pants from "@/components/shop/pants";
import Shoes from "@/components/shop/shoes";
import Accessories from "@/components/shop/accessories";

export default function Home() {
  const { points } = useStore();
  const [hatPurchased, setHatPurchased] = useState(false);

  const handleHatPurchase = () => {
    setHatPurchased(true);
  };

  return (
    <>
      <Navbar points={points} />
      <div className="flex">
        <div className="flex-1 flex flex-col items-center justify-center p-2">
          <Hats onPurchase={handleHatPurchase} />
          <Eyes />
          <Shirts />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-2">
          <div className="w-full flex items-center justify-center mb-4 relative">
            <Image src="/sign.png" height={300} width={300} alt="Sign Logo" />
          </div>
          <div className="relative flex items-center justify-center">
            <Image
              src="/gator-removebg-preview.png"
              height={600}
              width={600}
              alt="Gator Logo"
              className="z-0"
            />
            {hatPurchased && (
              <Image
                src="/cowboy_hat.png"
                height={250}
                width={250}
                alt="Purchased Hat"
                className="absolute -top-4 left-1/2  transform -translate-x-1/2 -translate-y-1/4 z-10"
              />
            )}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-2">
          <Pants />
          <Shoes />
          <Accessories />
        </div>
      </div>
    </>
  );
}
